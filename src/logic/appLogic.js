import { getBonusForMode, getDailyBonus, getKmPrice } from '../lib/calculations';

export function setBodyClass() {
    if (typeof document === 'undefined') return;
    document.body.classList.add('min-h-screen', 'pb-32', 'bg-[#0f172a]');
}

export function bindAppGlobals() {
    if (typeof window === 'undefined') return;
    Object.assign(window, {
        addCalculatedToPayment,
        addCheckItem,
        addDialerNumber,
        addFuelEntry,
        addNote,
        addRepeatTransaction,
        backupData,
        calculateFuelConsumption,
        calculateFutureBalance,
        calculateMaintenance,
        calculatePerf,
        calculateProfit,
        callDialerNumber,
        changeDays,
        changeMonth,
        changePacketCount,
        changeSimulationDays,
        clearDialerHistory,
        clearFuelForm,
        clearFuelHistory,
        clearPacketInputs,
        clearTransactionHistory,
        closeDialerModal,
        closeNoteModal,
        deleteAccumulatedPayment,
        deleteCheckItem,
        deleteNote,
        deleteRepeatTransaction,
        goToToday,
        loadDoors,
        loadStreets,
        openDialerModal,
        openExternalMap,
        openGoogleWeather,
        openNoteModal,
        posTetikle,
        processPayment,
        quickSearchAddress,
        removeDialerNumber,
        resetAllCounters,
        resetPerfForm,
        resetPriceDefaults,
        restoreData,
        saveExpenses,
        saveFinancialData,
        saveFuelUnitData,
        saveOrderHistory,
        savePerfMemoryAuto,
        savePriceSettings,
        scrollToResults,
        searchAndShowMap,
        setDurationMode,
        setNoteType,
        setPerfTime,
        switchChecklist,
        switchTab,
        toggleCheckItem,
        toggleManualMode,
        toggleMapModal,
        toggleSettings,
        toggleSideDock,
        updateEarningCalculation
    });
}



// --- DEĞİŞKENLER ---
let daysOff = 4;
let prices = { single: 110, multi: 40, avm: 10, night: 20 };
let activeDayMode = 'weekday';
let calendarData = {}; let selectedDate = null; let noteType = 'expense'; let displayedDate = new Date();
let activeChecklistMode = 'start'; let checklistStart = []; let checklistEnd = [];
let garageData = { currentKm: 0, lastOilKm: 0, oilInterval: 2000 };
let packetCounter = { single: 0, multi: 0 };
let quickDaysMode = null;
let accumulatedPayments = {};
let transactionHistory = [];
let expenses = { fuel: 250, extra: '', extraVatOnly1: '', extraVatOnly2: '', vatDescription: '', maint: 3000, acc: 1000, other: '' };
let profitDurationMode = 'day'; // 'day', 'week', 'month'

// GÜNLÜK BONUS TABLOSU (2026)
const dailyBonusTiers = [
    { min: 0, max: 19, weekday: 0, friday: 0, saturday: 0, sunday: 0 },
    { min: 20, max: 21, weekday: 207, friday: 289, saturday: 434, sunday: 521 },
    { min: 22, max: 25, weekday: 259, friday: 363, saturday: 545, sunday: 654 },
    { min: 26, max: 29, weekday: 317, friday: 444, saturday: 665, sunday: 798 },
    { min: 30, max: 33, weekday: 379, friday: 531, saturday: 796, sunday: 955 },
    { min: 34, max: 37, weekday: 446, friday: 624, saturday: 936, sunday: 1123 },
    { min: 38, max: 41, weekday: 517, friday: 723, saturday: 1085, sunday: 1302 },
    { min: 42, max: 45, weekday: 592, friday: 829, saturday: 1243, sunday: 1492 },
    { min: 46, max: 49, weekday: 671, friday: 940, saturday: 1410, sunday: 1692 },
    { min: 50, max: 53, weekday: 783, friday: 1096, saturday: 1644, sunday: 1973 },
    { min: 54, max: 57, weekday: 931, friday: 1303, saturday: 1954, sunday: 2345 },
    { min: 58, max: 61, weekday: 1089, friday: 1524, saturday: 2286, sunday: 2744 },
    { min: 62, max: 65, weekday: 1257, friday: 1760, saturday: 2640, sunday: 3168 },
    { min: 66, max: 69, weekday: 1435, friday: 2009, saturday: 3014, sunday: 3617 },
    { min: 70, max: 999, weekday: 1623, friday: 2272, saturday: 3408, sunday: 4089 }
];

let perfMemory = null;
let repeatTransactions = [];
let simulationDays = 10;
let fuelHistory = [];

// --- INIT ---
export function initApp() {
    autoSelectDay();
    loadPrices();
    loadExpenses();
    loadCalendarData();
    loadChecklists();
    loadGarageData();
    initWeather();
    calculateProfit();
    renderCalendar();
    calculateMaintenance();
    loadAccountData();
    loadPerfMemory();
    loadPacketCounter();
    initFuelSystem();
    loadFinancialData(); // Restore finance
    loadRepeatTransactions(); // Restore repeat
    loadPaymentSystem(); // Restore payments
    updateSystemInfo();
    renderActivityPanel();
    populatePaymentWednesdays();
    setDurationMode('day'); // Default mode

    // SCROLL BUTTON LOGIC (FIXED)
    const scrollBtn = document.getElementById('scrollDirectionBtn');
    const scrollIcon = document.getElementById('scrollDirectionIcon');
    let scrollTarget = 'bottom';
    if (scrollBtn && scrollIcon) {
        window.addEventListener('scroll', function () {
            const scrollY = window.scrollY;
            // Use scrollable height instead of total height
            const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

            if (scrollY < (maxScroll / 2)) {
                scrollTarget = 'bottom';
                scrollIcon.className = 'fa-solid fa-arrow-down';
            } else {
                scrollTarget = 'top';
                scrollIcon.className = 'fa-solid fa-arrow-up';
            }
            scrollBtn.classList.toggle('visible', scrollY > 100);
        }, { passive: true });
        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: scrollTarget === 'bottom' ? document.body.scrollHeight : 0, behavior: 'smooth' });
        });
    }
}

// --- CORE FUNCTIONS (UPDATED) ---

// 1. Duration Mode System (UPDATED to auto-set daysOff)
function setDurationMode(mode) {
    profitDurationMode = mode;
    ['btnDurDay', 'btnDurWeek', 'btnDurMonth'].forEach(id => {
        document.getElementById(id).classList.remove('active');
        document.getElementById(id).classList.add('inactive');
    });
    const activeId = mode === 'day' ? 'btnDurDay' : (mode === 'week' ? 'btnDurWeek' : 'btnDurMonth');
    document.getElementById(activeId).classList.add('active');
    document.getElementById(activeId).classList.remove('inactive');

    // Logic Change: Automatically adjust daysOff based on selected mode
    if (mode === 'day') {
        daysOff = 0; // Single day implies 0 days off
    } else if (mode === 'week') {
        daysOff = 1; // Standard week implies 1 day off
    } else {
        // Month default - Reset to 4 explicitly as per user request
        daysOff = 4;
    }
    document.getElementById('daysOffDisplay').innerText = daysOff;

    calculateProfit();
}

// 2. Wednesday Generator for Dropdowns
function populatePaymentWednesdays() {
    const selects = ['manualPaymentDate', 'packetPaymentDate'];
    const today = new Date();
    const dates = [];

    // Calculate next Wednesday
    let d = new Date(today);
    while (d.getDay() !== 3) { // 3 = Wednesday
        d.setDate(d.getDate() + 1);
    }

    // Generate next 4 Wednesdays
    for (let i = 0; i < 4; i++) {
        const dateStr = d.toISOString().split('T')[0];
        const label = d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        dates.push({ value: dateStr, label: label });
        d.setDate(d.getDate() + 7);
    }

    selects.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = '';
            dates.forEach(item => {
                const opt = document.createElement('option');
                opt.value = item.value;
                opt.innerText = item.label;
                el.appendChild(opt);
            });
        }
    });
}

// 3. Financial Data Functions (Restored)
function loadFinancialData() {
    const data = JSON.parse(localStorage.getItem('kurye_financial') || '{}');
    if (data.bank) document.getElementById('bankAccount').value = data.bank;
    if (data.debt) document.getElementById('creditDebt').value = data.debt;
    updateNetBalance();
}
function saveFinancialData() {
    const data = {
        bank: parseFloat(document.getElementById('bankAccount').value) || 0,
        debt: parseFloat(document.getElementById('creditDebt').value) || 0
    };
    localStorage.setItem('kurye_financial', JSON.stringify(data));
    updateNetBalance();
}
function updateNetBalance() {
    const bank = parseFloat(document.getElementById('bankAccount').value) || 0;
    const debt = parseFloat(document.getElementById('creditDebt').value) || 0;
    document.getElementById('netBalance').innerText = (bank - debt).toLocaleString('tr-TR') + ' ₺';
}

// 4. Recurring Transactions Functions (Restored)
function loadRepeatTransactions() {
    const s = localStorage.getItem('kurye_repeat');
    if (s) repeatTransactions = JSON.parse(s);
}
function addRepeatTransaction() {
    const day = document.getElementById('repeatDay').value;
    const desc = document.getElementById('repeatDesc').value;
    const amt = parseFloat(document.getElementById('repeatAmount').value);
    const type = document.getElementById('repeatType').value;

    if (!day || !desc) {
        // Add Shake animation on error
        const form = document.querySelector('.simulation-card'); // broadly targeting container
        form.classList.add('shake-animation');
        setTimeout(() => form.classList.remove('shake-animation'), 500);
        return;
    }
    repeatTransactions.push({ day, description: desc, amount: amt || 0, type });
    localStorage.setItem('kurye_repeat', JSON.stringify(repeatTransactions));
    renderRepeatTransactions();
    renderCalendar(); // Update dots
    showVisualSuccess("Eklendi", "Tekrarlayan işlem kaydedildi.");
}
function renderRepeatTransactions() {
    const container = document.getElementById('repeatTransactionsList');
    container.innerHTML = '';
    repeatTransactions.forEach((item, idx) => {
        let typeLabel = item.type === 'income' ? 'GELİR (+)' : (item.type === 'expense' ? 'GİDER (-)' : 'AKTİVİTE');
        let color = item.type === 'income' ? 'text-green-400' : (item.type === 'expense' ? 'text-red-400' : 'text-yellow-400');
        let amountStr = item.type === 'activity' ? '' : (item.type === 'income' ? `+${item.amount}₺` : `-${item.amount}₺`);

        container.innerHTML += `
                    <div class="bg-slate-800/50 p-2 rounded-lg flex justify-between items-center border border-white/5">
                        <div>
                            <div class="text-xs font-bold text-white">${item.description}</div>
                            <div class="text-[10px] text-gray-400">Her ayın ${item.day}. günü • <span class="${color} font-bold">${typeLabel} ${amountStr}</span></div>
                        </div>
                        <button onclick="deleteRepeatTransaction(${idx})" class="text-gray-500 hover:text-red-400"><i class="fa-solid fa-trash"></i></button>
                    </div>`;
    });
}
function deleteRepeatTransaction(idx) {
    repeatTransactions.splice(idx, 1);
    localStorage.setItem('kurye_repeat', JSON.stringify(repeatTransactions));
    renderRepeatTransactions();
    renderCalendar();
}

// 6. Payment Process Logic (Fixed)
function loadPaymentSystem() {
    const s = localStorage.getItem('kurye_accumulated_payments');
    if (s) accumulatedPayments = JSON.parse(s);

    const h = localStorage.getItem('kurye_transaction_history');
    if (h) transactionHistory = JSON.parse(h);

    // Find next payment amount (Next Wednesday or earliest date)
    const dates = Object.keys(accumulatedPayments).sort();
    let nextDate = dates.length > 0 ? dates[0] : '--.--.----';
    let amount = dates.length > 0 ? accumulatedPayments[nextDate] : 0;

    // Sum total
    let total = 0;
    for (let key in accumulatedPayments) total += accumulatedPayments[key];

    document.getElementById('nextPaymentAmount').innerText = amount.toLocaleString('tr-TR') + ' ₺';
    document.getElementById('nextPaymentDate').innerText = nextDate.split('-').reverse().join('.');
    document.getElementById('accumulatedTotal').innerText = total.toLocaleString('tr-TR') + ' ₺';

    // Payment Day Alert
    const todayStr = new Date().toISOString().split('T')[0];
    if (dates.includes(todayStr)) {
        document.getElementById('paymentDayInfo').innerText = "BUGÜN ÖDEME GÜNÜ";
        document.getElementById('paymentDayInfo').className = "font-bold text-emerald-400 animate-pulse";
    } else {
        document.getElementById('paymentDayInfo').innerText = "Her Çarşamba";
        document.getElementById('paymentDayInfo').className = "font-bold text-purple-400";
    }

    renderTransactionHistory();
}

async function processPayment() {
    // Get the earliest payment
    const dates = Object.keys(accumulatedPayments).sort();
    if (dates.length === 0) {
        showVisualSuccess("Bilgi", "Ödenecek tutar yok.");
        return;
    }
    const dateToPay = dates[0];
    const amount = accumulatedPayments[dateToPay];

    const confirmed = await showCustomConfirm(`₺${amount.toLocaleString('tr-TR')} tutarındaki ${dateToPay} tarihli ödemeyi banka hesabına aktarmak istiyor musunuz?`, "Ödeme Al");
    if (!confirmed) return;

    // Update Bank
    let currentBank = parseFloat(document.getElementById('bankAccount').value) || 0;
    currentBank += amount;
    document.getElementById('bankAccount').value = currentBank;

    // Remove from accumulated
    delete accumulatedPayments[dateToPay];

    // Add to history
    transactionHistory.unshift({
        date: new Date().toLocaleDateString('tr-TR'),
        type: 'payment',
        amount: amount,
        description: 'Banka Aktarımı'
    });

    // Save all
    saveFinancialData();
    localStorage.setItem('kurye_accumulated_payments', JSON.stringify(accumulatedPayments));
    localStorage.setItem('kurye_transaction_history', JSON.stringify(transactionHistory));

    loadPaymentSystem();
    renderCalendar(); // EKRANI YENILE
    showVisualSuccess("Başarılı", "Ödeme banka hesabına eklendi.");
}

function renderTransactionHistory() {
    const div = document.getElementById('transactionHistory');
    div.innerHTML = '';
    if (transactionHistory.length === 0) div.innerHTML = '<div class="text-center text-[10px] text-gray-500 italic py-4">İşlem yok.</div>';
    transactionHistory.forEach(t => {
        let colorClass = t.type === 'income' ? 'transaction-income' : (t.type === 'payment' ? 'transaction-payment' : 'transaction-expense');
        div.innerHTML += `
                    <div class="transaction-history-item ${colorClass} flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">${t.description}</div>
                            <div class="text-[9px] text-gray-400">${t.date}</div>
                        </div>
                        <div class="text-sm font-bold text-white">${t.amount.toLocaleString('tr-TR')} ₺</div>
                    </div>
                `;
    });
}

// --- TAKVİM SİSTEMİ (ONARILDI) ---
function loadCalendarData() {
    const s = localStorage.getItem('kurye_calendar');
    if (s) calendarData = JSON.parse(s);
    renderActivityPanel();
}

function saveCalendarData() {
    localStorage.setItem('kurye_calendar', JSON.stringify(calendarData));
    renderCalendar();
    renderActivityPanel();
    updateSystemInfo();
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    grid.innerHTML = '';
    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();
    const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    document.getElementById('currentMonthLabel').innerText = monthNames[month];
    document.getElementById('currentYearLabel').innerText = year;

    const firstDay = new Date(year, month, 1).getDay();
    const startOffset = (firstDay === 0 ? 6 : firstDay - 1); // Pzt=0
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startOffset; i++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day opacity-50 bg-slate-800/50';
        grid.appendChild(cell);
    }

    const today = new Date();
    let monthlyIncome = 0;
    let monthlyExpense = 0;

    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement('div');
        cell.className = 'calendar-day flex flex-col items-center justify-center cursor-pointer hover:bg-slate-700 relative';
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            cell.classList.add('today');
        }
        cell.innerHTML = `<span class="text-sm font-bold text-gray-300">${day}</span>`;

        const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        // Dots container
        const dots = document.createElement('div');
        dots.className = 'dots-container';

        // Calendar Notes
        if (calendarData[dateKey]) {
            calendarData[dateKey].forEach(n => {
                if (n.type === 'income') { dots.innerHTML += `<div class="dot bg-green-500"></div>`; monthlyIncome += n.amount; }
                if (n.type === 'expense') { dots.innerHTML += `<div class="dot bg-red-500"></div>`; monthlyExpense += n.amount; }
                if (n.type === 'activity') dots.innerHTML += `<div class="dot bg-yellow-500"></div>`;
            });
        }

        // Recurring
        repeatTransactions.forEach(rt => {
            if (parseInt(rt.day) === day) {
                dots.innerHTML += `<div class="dot bg-blue-400"></div>`;
            }
        });

        // Payments
        if (accumulatedPayments[dateKey]) {
            dots.innerHTML += `<div class="dot bg-purple-500 border border-white"></div>`;
        }

        cell.appendChild(dots);
        cell.onclick = () => openNoteModal(dateKey);
        grid.appendChild(cell);
    }

    document.getElementById('monthlyExtraIncome').innerText = '+' + monthlyIncome.toLocaleString('tr-TR') + ' ₺';
    document.getElementById('monthlyExpenseSummary').innerText = '-' + monthlyExpense.toLocaleString('tr-TR') + ' ₺';
    // Simple net calculation for visual summary
    document.getElementById('monthlyNetSummary').innerText = (monthlyIncome - monthlyExpense).toLocaleString('tr-TR') + ' ₺'; renderActivityPanel();
}

function changeMonth(dir) {
    displayedDate.setMonth(displayedDate.getMonth() + dir);
    renderCalendar();
}
function goToToday() {
    displayedDate = new Date();
    renderCalendar();
}

// --- UPDATED: ACTIVITY PANEL WITH TURKISH LABELS ---
function renderActivityPanel() {
    const todayDiv = document.getElementById('todayActivities');
    const upcomingDiv = document.getElementById('upcomingActivities');
    const todayStr = new Date().toISOString().split('T')[0];
    let todayHTML = '';
    let upcomingHTML = '';
    let hasUpcoming = false;
    const sortedDates = Object.keys(calendarData).sort();

    sortedDates.forEach(date => {
        if (date >= todayStr) {
            const notes = calendarData[date];
            notes.forEach(note => {
                const isToday = date === todayStr;
                const dateObj = new Date(date);
                const formattedDate = dateObj.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });

                let typeLabel = 'GİDER (-)';
                let typeColor = 'text-red-400';
                let amountStr = note.amount ? `-${note.amount}₺` : '';
                let borderColor = 'border-red-500/20';

                if (note.type === 'income') {
                    typeLabel = 'GELİR (+)';
                    typeColor = 'text-green-400';
                    amountStr = `+${note.amount}₺`;
                    borderColor = 'border-green-500/20';
                } else if (note.type === 'activity') {
                    typeLabel = 'AKTİVİTE';
                    typeColor = 'text-yellow-400';
                    amountStr = '';
                    borderColor = 'border-yellow-500/20';
                }

                const html = `
                        <div onclick="openNoteModal('${date}')" class="activity-item flex items-center justify-between bg-slate-800/60 p-3 rounded-xl border ${borderColor} mb-2 cursor-pointer hover:bg-slate-800">
                            <div>
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-bold ${typeColor} border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">${typeLabel}</span>
                                    <span class="text-[9px] text-gray-400">${isToday ? 'Bugün' : formattedDate}</span>
                                </div>
                                <p class="text-xs font-bold text-white">${note.note}</p>
                            </div>
                            <span class="text-sm font-bold ${typeColor}">${amountStr}</span>
                        </div>`;

                if (isToday) todayHTML += html;
                else {
                    upcomingHTML += html;
                    hasUpcoming = true;
                }
            });
        }
    });

    // Payment Days Logic
    const paymentDays = Object.keys(accumulatedPayments).sort();
    paymentDays.forEach(date => {
        if (date >= todayStr) {
            const isToday = date === todayStr;
            const dateObj = new Date(date);
            const formattedDate = dateObj.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });

            const html = `
                    <div onclick="openNoteModal('${date}')" class="activity-item flex items-center justify-between bg-purple-900/20 p-3 rounded-xl border border-purple-500/30 mb-2 cursor-pointer hover:bg-purple-900/30">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-[10px] font-bold text-purple-400 border border-current px-1.5 py-0.5 rounded uppercase tracking-wider">ÖDEME</span>
                                <span class="text-[9px] text-purple-300">${isToday ? 'Bugün' : formattedDate}</span>
                            </div>
                            <p class="text-xs font-bold text-white">Ödeme Bekliyor</p>
                        </div>
                        <span class="text-sm font-bold text-white">${accumulatedPayments[date].toLocaleString('tr-TR')} ₺</span>
                    </div>`;

            if (isToday) todayHTML += html;
            else {
                upcomingHTML += html;
                hasUpcoming = true;
            }
        }
    });

    if (!todayHTML) todayHTML = `<div class="text-center text-xs text-gray-500 italic py-2">Bugün için planlanan bir şey yok.</div>`;
    if (!hasUpcoming) upcomingHTML = `<div class="text-center text-[10px] text-gray-600 py-2">Yaklaşan kayıt yok.</div>`;

    todayDiv.innerHTML = todayHTML;
    upcomingDiv.innerHTML = upcomingHTML;
}

// --- HAVA DURUMU SİSTEMİ (ONARILDI) ---
async function initWeather() {
    try {
        // Varsayılan Konya Koordinatları
        const lat = 37.8714, lon = 32.4846;
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m,weathercode&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`);
        const data = await response.json();

        // Anlık
        document.getElementById('currentTemp').innerText = `${Math.round(data.current_weather.temperature)}°`;
        document.getElementById('currentWeatherDesc').innerText = getWeatherDesc(data.current_weather.weathercode);

        // Saatlik
        const hourlyContainer = document.getElementById('hourlyForecast');
        hourlyContainer.innerHTML = '';
        const currentHour = new Date().getHours();
        for (let i = 0; i < 24; i++) {
            const time = new Date(data.hourly.time[i]);
            if (time.getHours() >= currentHour) {
                hourlyContainer.innerHTML += `
                            <div class="text-center shrink-0">
                                <div class="bg-slate-800 rounded-xl p-3 min-w-[70px] border border-white/5">
                                    <div class="text-xs font-bold text-gray-300">${time.getHours()}:00</div>
                                    <div class="text-2xl my-2">${getWeatherIcon(data.hourly.weathercode[i])}</div>
                                    <div class="text-sm font-bold text-white">${Math.round(data.hourly.temperature_2m[i])}°</div>
                                </div>
                            </div>`;
            }
        }

        // Haftalık
        const weeklyContainer = document.getElementById('weeklyForecast');
        weeklyContainer.innerHTML = '';
        for (let i = 0; i < 7; i++) {
            const date = new Date(data.daily.time[i]);
            const dayName = date.toLocaleDateString('tr-TR', { weekday: 'long' });
            const code = data.daily.weathercode[i];
            // Yağmur uyarısı için stil
            const isRain = (code >= 51 && code <= 67) || (code >= 80 && code <= 82);
            const rowClass = isRain ? 'weather-row rain-alert-bg p-2 rounded-lg' : 'weather-row p-2';

            weeklyContainer.innerHTML += `
                        <div class="${rowClass} flex justify-between items-center">
                            <div class="flex items-center gap-3">
                                <span class="w-6 text-center">${getWeatherIcon(code)}</span>
                                <div>
                                    <div class="text-xs font-bold text-white">${dayName}</div>
                                    <div class="text-[10px] text-gray-400">${getWeatherDesc(code)}</div>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-300">
                                <span class="text-white">${Math.round(data.daily.temperature_2m_max[i])}°</span> / ${Math.round(data.daily.temperature_2m_min[i])}°
                            </div>
                        </div>`;
        }
    } catch (e) { console.error("Hava durumu hatası:", e); }
}

function getWeatherDesc(code) {
    if (code === 0) return "Açık";
    if (code >= 1 && code <= 3) return "Parçalı Bulutlu";
    if (code >= 45 && code <= 48) return "Sisli";
    if (code >= 51 && code <= 67) return "Yağmurlu";
    if (code >= 71 && code <= 77) return "Karlı";
    if (code >= 80 && code <= 82) return "Sağanak";
    if (code >= 95) return "Fırtına";
    return "Bulutlu";
}
function getWeatherIcon(code) {
    if (code === 0) return '<i class="fa-solid fa-sun text-yellow-400"></i>';
    if (code >= 1 && code <= 3) return '<i class="fa-solid fa-cloud-sun text-gray-300"></i>';
    if (code >= 45 && code <= 48) return '<i class="fa-solid fa-smog text-gray-400"></i>';
    if (code >= 51 && code <= 67) return '<i class="fa-solid fa-cloud-rain text-blue-400"></i>';
    if (code >= 71 && code <= 77) return '<i class="fa-regular fa-snowflake text-white"></i>';
    return '<i class="fa-solid fa-cloud text-gray-500"></i>';
}
function openGoogleWeather() { window.open("https://www.google.com/search?q=hava+durumu+konya", "_blank"); }

// --- GARAJ & CHECKLIST (ONARILDI) ---
function loadGarageData() {
    const s = localStorage.getItem('kurye_garage');
    if (s) garageData = JSON.parse(s);
    document.getElementById('currentKm').value = garageData.currentKm || '';
    document.getElementById('lastOilKm').value = garageData.lastOilKm || '';
    document.getElementById('oilInterval').value = garageData.oilInterval || 2000;
}
function calculateMaintenance() {
    garageData.currentKm = parseFloat(document.getElementById('currentKm').value) || 0;
    garageData.lastOilKm = parseFloat(document.getElementById('lastOilKm').value) || 0;
    garageData.oilInterval = parseFloat(document.getElementById('oilInterval').value) || 2000;
    localStorage.setItem('kurye_garage', JSON.stringify(garageData));

    const diff = garageData.currentKm - garageData.lastOilKm;
    let percent = (diff / garageData.oilInterval) * 100;
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;

    const bar = document.getElementById('oilProgressBar');
    bar.style.width = percent + '%';
    document.getElementById('oilPercentText').innerText = '%' + percent.toFixed(0);

    const status = document.getElementById('oilStatusText');
    if (percent < 50) { bar.className = 'bg-green-500 h-full transition-all'; status.innerText = 'Durum İyi'; status.className = 'text-green-400 font-bold'; }
    else if (percent < 80) { bar.className = 'bg-yellow-500 h-full transition-all'; status.innerText = 'Bakım Yaklaşıyor'; status.className = 'text-yellow-400 font-bold'; }
    else { bar.className = 'bg-red-500 h-full transition-all'; status.innerText = 'BAKIM GEREKLİ!'; status.className = 'text-red-500 font-bold animate-pulse'; }
}

function loadChecklists() {
    const sStart = localStorage.getItem('kurye_checklist_start');
    const sEnd = localStorage.getItem('kurye_checklist_end');
    if (sStart) checklistStart = JSON.parse(sStart);
    if (sEnd) checklistEnd = JSON.parse(sEnd);
    renderChecklist();
}
function switchChecklist(mode) {
    activeChecklistMode = mode;
    document.getElementById('btnCheckStart').className = mode === 'start' ? 'toggle-btn active' : 'toggle-btn inactive';
    document.getElementById('btnCheckEnd').className = mode === 'end' ? 'toggle-btn active' : 'toggle-btn inactive';

    const title = document.getElementById('checkHeaderTitle');
    const sub = document.getElementById('checkHeaderSub');
    const icon = document.getElementById('checkHeaderIcon');
    const card = document.getElementById('checkHeaderCard');

    if (mode === 'start') {
        title.innerText = "İşe Başlarken";
        sub.innerText = "Unutma: Eksik malzeme = Zaman kaybı.";
        icon.className = "fa-solid fa-backpack text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12";
        card.className = "bg-indigo-600 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-indigo-900/20 transition-colors duration-500";
    } else {
        title.innerText = "İşten Dönerken";
        sub.innerText = "Yarına hazırlık bugünden başlar.";
        icon.className = "fa-solid fa-moon text-9xl absolute -right-4 -bottom-4 text-white transform rotate-12";
        card.className = "bg-purple-700 rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-purple-900/20 transition-colors duration-500";
    }
    renderChecklist();
}
function renderChecklist() {
    const list = activeChecklistMode === 'start' ? checklistStart : checklistEnd;
    const container = document.getElementById('checklistContainer');
    container.innerHTML = '';
    if (list.length === 0) document.getElementById('emptyListMsg').classList.remove('hidden');
    else document.getElementById('emptyListMsg').classList.add('hidden');

    list.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `check-item ${item.checked ? 'checked' : ''} bg-slate-800 p-3 rounded-xl flex items-center justify-between cursor-pointer`;
        div.innerHTML = `<span class="font-bold text-sm text-white flex-1">${item.text}</span><button onclick="deleteCheckItem(event, ${index})" class="text-gray-500 hover:text-red-400 p-2"><i class="fa-solid fa-trash"></i></button>`;
        div.onclick = (e) => { if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'I') toggleCheckItem(index); };
        container.appendChild(div);
    });
}
function addCheckItem() {
    const val = document.getElementById('newCheckItem').value;
    if (!val) return;
    const list = activeChecklistMode === 'start' ? checklistStart : checklistEnd;
    list.push({ text: val, checked: false });
    saveChecklist();
    document.getElementById('newCheckItem').value = '';
    renderChecklist();
}

function toggleCheckItem(index) {
    const list = activeChecklistMode === 'start' ? checklistStart : checklistEnd;
    list[index].checked = !list[index].checked;
    saveChecklist();
    renderChecklist();

    // Otomatik tamamlama kontrolü (NEW FEATURE)
    if (list.length > 0 && list.every(item => item.checked)) {
        showVisualSuccess("Harika!", "Tüm ürünler seçildi, çanta hazır!");
        setTimeout(() => {
            list.forEach(item => item.checked = false);
            saveChecklist();
            renderChecklist();
        }, 1500);
    }
}

function deleteCheckItem(e, index) {
    e.stopPropagation();
    const list = activeChecklistMode === 'start' ? checklistStart : checklistEnd;
    list.splice(index, 1);
    saveChecklist();
    renderChecklist();
}
function saveChecklist() {
    localStorage.setItem('kurye_checklist_start', JSON.stringify(checklistStart));
    localStorage.setItem('kurye_checklist_end', JSON.stringify(checklistEnd));
}

// --- YENİ FONKSİYONLAR ---
function autoSelectDay() {
    const day = new Date().getDay();
    if (day === 0) setDayMode('sunday');
    else if (day === 5) setDayMode('friday');
    else if (day === 6) setDayMode('saturday');
    else setDayMode('weekday');
}

function setDayMode(mode) {
    activeDayMode = mode;
    const labels = { 'weekday': 'Pazartesi - Perşembe', 'friday': 'Cuma Günü', 'saturday': 'Cumartesi Günü', 'sunday': 'Pazar Günü' };
    if (document.getElementById('selectedDayLabel')) document.getElementById('selectedDayLabel').innerText = labels[mode];
    if (document.getElementById('speedDayLabel')) document.getElementById('speedDayLabel').innerText = labels[mode];
    calculateProfit();
    if (typeof updateEarningCalculation === 'function') updateEarningCalculation();
}

function changeDays(amount) {
    daysOff += amount;
    if (daysOff < 0) daysOff = 0;
    if (daysOff > 30) daysOff = 30;
    document.getElementById('daysOffDisplay').innerText = daysOff;

    // Switch to Custom (Month-based) logic
    profitDurationMode = 'month';

    // UI: Inactive buttons
    ['btnDurDay', 'btnDurWeek', 'btnDurMonth'].forEach(id => {
        document.getElementById(id).classList.remove('active');
        document.getElementById(id).classList.add('inactive');
    });

    calculateProfit();
}

// --- GELİR HESAPLAMA (GÜNCELLENMİŞ) ---
function calculateProfit() {
    let workDays;
    if (profitDurationMode === 'day') workDays = 1;
    else if (profitDurationMode === 'week') workDays = 6;
    else workDays = 30 - daysOff;

    document.getElementById('calculatedWorkDays').innerText = workDays;

    const dailyFuel = parseFloat(document.getElementById('dailyFuel').value) || 0;
    const extraVat = parseFloat(document.getElementById('extraVat').value) || 0;
    const extraVatOnly1 = parseFloat(document.getElementById('extraVatOnly1').value) || 0;
    const extraVatOnly2 = parseFloat(document.getElementById('extraVatOnly2').value) || 0;
    const maint = parseFloat(document.getElementById('maintCost').value) || 0;
    const acc = parseFloat(document.getElementById('accCost').value) || 0;
    const other = parseFloat(document.getElementById('otherCost').value) || 0;

    let gross = 0;
    const isManual = document.getElementById('manualModeToggle').checked;

    if (isManual) {
        gross = parseFloat(document.getElementById('manualIncomeVal').value) || 0;
    } else {
        const s = parseFloat(document.getElementById('single').value) || 0;
        const m = parseFloat(document.getElementById('multi').value) || 0;
        const a = parseFloat(document.getElementById('avm').value) || 0;
        const n = parseFloat(document.getElementById('night').value) || 0;
        const avgKm = parseFloat(document.getElementById('avgKmProfit').value) || 0;

        const kmPrice = getKmPrice(avgKm);
        if (avgKm > 0) {
            document.getElementById('profitKmInfo').style.display = 'block';
            document.getElementById('profitKmRate').innerText = kmPrice;
        } else document.getElementById('profitKmInfo').style.display = 'none';

        const totalPackets = s + m;
        const kmIncome = totalPackets * kmPrice;
        const baseIncome = (s * prices.single) + (m * prices.multi);
        const extraIncome = (a * prices.avm) + (n * prices.night) + kmIncome;
        const fixedDailyIncome = baseIncome + extraIncome;

        const currentBonus = getDailyBonus(totalPackets, dailyBonusTiers, activeDayMode).current;
        const totalDailyDisplayed = fixedDailyIncome + currentBonus;

        document.getElementById('dispDailyMoney').innerText = totalDailyDisplayed.toLocaleString('tr-TR');
        document.getElementById('dispTotalPackets').innerText = totalPackets;
        document.getElementById('bonusAmount').innerText = currentBonus.toLocaleString('tr-TR');

        const bonusData = getDailyBonus(totalPackets, dailyBonusTiers, activeDayMode);
        const bar = document.getElementById('bonusBar');
        const nextEl = document.getElementById('nextBonusPkt');
        document.getElementById('currentTierInfo').innerText = bonusData.current.toLocaleString('tr-TR') + " TL";
        if (bonusData.nextTarget > 0) {
            let percent = Math.min(100, (totalPackets / bonusData.nextTarget) * 100);
            bar.style.width = `${percent}%`;
            nextEl.innerText = bonusData.nextTarget;
            document.getElementById('nextTierInfo').innerText = bonusData.nextValue.toLocaleString('tr-TR') + " TL";
        } else {
            bar.style.width = '100%';
            nextEl.innerText = "MAX";
            document.getElementById('nextTierInfo').innerText = "MAX";
        }

        // AYLIK PROJEKSİYON (Duration logic will override this if not 'month')
        const bonusWeekday = getBonusForMode(totalPackets, dailyBonusTiers, 'weekday');
        const bonusFriday = getBonusForMode(totalPackets, dailyBonusTiers, 'friday');
        const bonusSat = getBonusForMode(totalPackets, dailyBonusTiers, 'saturday');
        const bonusSun = getBonusForMode(totalPackets, dailyBonusTiers, 'sunday');

        const totalWeekday = fixedDailyIncome + bonusWeekday;
        const totalFriday = fixedDailyIncome + bonusFriday;
        const totalSat = fixedDailyIncome + bonusSat;
        const totalSun = fixedDailyIncome + bonusSun;

        const theoreticalMonthly = (totalWeekday * 18) + (totalFriday * 4) + (totalSat * 4) + (totalSun * 4);
        const averageDailyIncome = theoreticalMonthly / 30;

        // Duration Adjustment for Gross
        if (profitDurationMode === 'day') gross = totalDailyDisplayed;
        else if (profitDurationMode === 'week') gross = averageDailyIncome * workDays;
        else gross = averageDailyIncome * workDays;
    }

    // Duration Adjustment for Expenses (Logic Update)
    let effectiveMaint = 0, effectiveAcc = 0;
    if (profitDurationMode === 'day') {
        effectiveMaint = 0;
        effectiveAcc = 0;
    } else if (profitDurationMode === 'week') {
        effectiveMaint = maint / 4;
        effectiveAcc = acc / 4;
    } else {
        effectiveMaint = maint;
        effectiveAcc = acc;
    }

    // Calculations
    const VAT = 0.20;
    let effectiveFuel = dailyFuel;
    if (profitDurationMode === 'week') effectiveFuel = dailyFuel * 7; // Approx week
    else if (profitDurationMode === 'month') effectiveFuel = dailyFuel * workDays;

    const effectiveExtraVat = profitDurationMode === 'day' ? extraVat / 30 : (profitDurationMode === 'week' ? extraVat / 4 : extraVat);
    const effectiveOther = profitDurationMode === 'day' ? other / 30 : (profitDurationMode === 'week' ? other / 4 : other);
    const effectiveVatOnly = profitDurationMode === 'day' ? (extraVatOnly1 + extraVatOnly2) / 30 : (profitDurationMode === 'week' ? (extraVatOnly1 + extraVatOnly2) / 4 : (extraVatOnly1 + extraVatOnly2));

    const dedExp = effectiveFuel + effectiveExtraVat;
    const nonDedExp = effectiveMaint + effectiveAcc + effectiveOther;
    const totalExp = dedExp + nonDedExp + effectiveVatOnly;

    const grossVat = gross - (gross / (1 + VAT));
    const dedExpVat = dedExp - (dedExp / (1 + VAT));
    const vatPay = Math.max(0, grossVat - dedExpVat - effectiveVatOnly);
    const net = gross - totalExp - vatPay;

    document.getElementById('resGross').innerText = gross.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    document.getElementById('resExpenses').innerText = totalExp.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    document.getElementById('resVatDeductions').innerText = (effectiveVatOnly + dedExpVat).toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    document.getElementById('resVat').innerText = vatPay.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
    document.getElementById('resNet').innerText = net.toLocaleString('tr-TR', { maximumFractionDigits: 0 });
}

// --- HIZ / PERFORMANS (GÜNCELLENMİŞ) ---
function loadPacketCounter() {
    const saved = localStorage.getItem('kurye_packet_counter');
    if (saved) packetCounter = JSON.parse(saved);
    else packetCounter = { single: 0, multi: 0 };
    updatePacketCounterDisplay();
    updatePerfPacketCountFromCounter();
    const instantFuel = localStorage.getItem('kurye_instant_fuel');
    if (instantFuel !== null) document.getElementById('perfFuelInput').value = instantFuel;
    updateEarningCalculation();
}

function savePacketCounter() {
    localStorage.setItem('kurye_packet_counter', JSON.stringify(packetCounter));
    updateSystemInfo();
}

function changePacketCount(type, amount) {
    packetCounter[type] += amount;
    if (packetCounter[type] < 0) packetCounter[type] = 0;
    updatePacketCounterDisplay();
    updatePerfPacketCountFromCounter();
    updateEarningCalculation();
    savePacketCounter();
}

async function resetAllCounters() {
    const confirmed = await showCustomConfirm('Tüm paket sayaçlarını sıfırlamak istediğinize emin misiniz?', "Sayaç Sıfırlama");
    if (!confirmed) return;
    packetCounter = { single: 0, multi: 0 };
    updatePacketCounterDisplay();
    updatePerfPacketCountFromCounter();
    localStorage.setItem('kurye_instant_fuel', 250);
    document.getElementById('perfFuelInput').value = 250;
    updateEarningCalculation();
    savePacketCounter();
    showVisualSuccess("Sıfırlandı", "Tüm sayaçlar temizlendi.");
}

function updatePacketCounterDisplay() {
    document.getElementById('counterSingle').textContent = packetCounter.single;
    document.getElementById('counterMulti').textContent = packetCounter.multi;
    document.getElementById('totalPacketsCounter').textContent = packetCounter.single + packetCounter.multi;
}

function updatePerfPacketCountFromCounter() {
    const total = packetCounter.single + packetCounter.multi;
    if (document.getElementById('perfPacketCount')) {
        document.getElementById('perfPacketCount').value = total;
        calculatePerf();
    }
}

function updateEarningCalculation() {
    const vatRate = 0.20;
    const singleCount = packetCounter.single || 0;
    const multiCount = packetCounter.multi || 0;
    const totalPackets = singleCount + multiCount;
    const avgKm = parseFloat(document.getElementById('avgKmInput')?.value) || 0;
    if (avgKm) localStorage.setItem('kurye_avg_km_perf', avgKm);
    const kmPrice = getKmPrice(avgKm);
    const earnKm = totalPackets * kmPrice;
    const earnS = singleCount * prices.single;
    const earnM = multiCount * prices.multi;
    const bonusData = getDailyBonus(totalPackets, dailyBonusTiers, activeDayMode);
    const earnBonus = bonusData.current;
    const totalEarn = earnS + earnM + earnKm + earnBonus;
    const incomeWithoutVat = totalEarn / (1 + vatRate);
    const vatOnIncome = totalEarn - incomeWithoutVat;
    const fuelExpense = parseFloat(document.getElementById('perfFuelInput')?.value) || 0;
    if (fuelExpense) localStorage.setItem('kurye_instant_fuel', fuelExpense);
    const fuelWithoutVat = fuelExpense / (1 + vatRate);
    const vatOnFuel = fuelExpense - fuelWithoutVat;
    const netEarnAfterVat = incomeWithoutVat - fuelWithoutVat;
    const netEarn = totalEarn - fuelExpense;

    document.getElementById('singleCountDisplay').innerText = singleCount;
    document.getElementById('multiCountDisplay').innerText = multiCount;
    document.getElementById('earnSingle').innerText = earnS + " ₺";
    document.getElementById('earnMulti').innerText = earnM + " ₺";
    document.getElementById('kmUnitPriceDisp').innerText = kmPrice;
    document.getElementById('perfKmEarnings').innerText = earnKm.toFixed(0) + " ₺";
    document.getElementById('earnBonus').innerText = earnBonus + " ₺";
    document.getElementById('totalEarning').innerText = totalEarn.toLocaleString('tr-TR') + " ₺";
    document.getElementById('vatOnIncome').innerText = vatOnIncome.toFixed(0) + " ₺";
    document.getElementById('incomeWithoutVat').innerText = "KDV Hariç: " + incomeWithoutVat.toFixed(0) + " ₺";
    document.getElementById('vatOnFuel').innerText = vatOnFuel.toFixed(0) + " ₺";
    document.getElementById('fuelWithoutVat').innerText = "KDV Hariç: " + fuelWithoutVat.toFixed(0) + " ₺";
    document.getElementById('netEarningAfterVat').innerText = netEarnAfterVat.toFixed(0) + " ₺";
    document.getElementById('totalNetEarning').innerText = netEarn.toLocaleString('tr-TR') + " ₺";
}

// --- SİSTEM & YARDIMCI FONKSİYONLAR ---
function showCustomConfirm(message, title = "Emin misiniz?") {
    return new Promise((resolve) => {
        document.getElementById('confirmModalTitle').textContent = title;
        document.getElementById('confirmModalMessage').textContent = message;
        document.getElementById('customConfirmModal').classList.remove('hidden');
        document.getElementById('confirmModalOk').onclick = function () { document.getElementById('customConfirmModal').classList.add('hidden'); resolve(true); };
        document.getElementById('confirmModalCancel').onclick = function () { document.getElementById('customConfirmModal').classList.add('hidden'); resolve(false); };
    });
}

function showVisualSuccess(title, message) {
    const oldToast = document.querySelector('.success-toast');
    if (oldToast) oldToast.remove();
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.innerHTML = `<i class="fa-solid fa-check-circle text-lg"></i><div><div class="font-bold">${title}</div><div class="text-[10px] opacity-90">${message}</div></div>`;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// --- VERİ YÖNETİMİ ---
function loadPrices() {
    const saved = localStorage.getItem('kurye_prices');
    if (saved) prices = JSON.parse(saved);
    ['confSingle', 'confMulti', 'confAvm', 'confNight'].forEach(id => {
        const key = id.replace('conf', '').toLowerCase();
        document.getElementById(id).value = prices[key];
    });
}
function loadExpenses() {
    const s = localStorage.getItem('kurye_expenses');
    if (s) expenses = JSON.parse(s);
    document.getElementById('dailyFuel').value = expenses.fuel;
    document.getElementById('extraVat').value = expenses.extra;
    document.getElementById('extraVatOnly1').value = expenses.extraVatOnly1;
    document.getElementById('extraVatOnly2').value = expenses.extraVatOnly2;
    document.getElementById('vatDescription').value = expenses.vatDescription;
    document.getElementById('maintCost').value = expenses.maint;
    document.getElementById('accCost').value = expenses.acc;
    document.getElementById('otherCost').value = expenses.other;
}
function saveExpenses() {
    expenses.fuel = parseFloat(document.getElementById('dailyFuel').value) || 0;
    expenses.extra = parseFloat(document.getElementById('extraVat').value) || 0;
    expenses.extraVatOnly1 = parseFloat(document.getElementById('extraVatOnly1').value) || 0;
    expenses.extraVatOnly2 = parseFloat(document.getElementById('extraVatOnly2').value) || 0;
    expenses.vatDescription = document.getElementById('vatDescription').value;
    expenses.maint = parseFloat(document.getElementById('maintCost').value) || 0;
    expenses.acc = parseFloat(document.getElementById('accCost').value) || 0;
    expenses.other = parseFloat(document.getElementById('otherCost').value) || 0;
    localStorage.setItem('kurye_expenses', JSON.stringify(expenses));
}
function savePriceSettings() {
    ['single', 'multi', 'avm', 'night'].forEach(key => {
        const id = 'conf' + key.charAt(0).toUpperCase() + key.slice(1);
        prices[key] = parseFloat(document.getElementById(id).value) || 0;
    });
    localStorage.setItem('kurye_prices', JSON.stringify(prices));
    calculateProfit();
}

function backupData() {
    const backup = {
        metadata: { app: "Kurye Pro", version: "V34", date: new Date().toISOString() },
        prices, dailyBonusTiers, calendarData, checklistStart, checklistEnd, garageData, packetCounter, accumulatedPayments, fuelHistory,
        expenses: JSON.parse(localStorage.getItem('kurye_expenses') || '{}')
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = `kurye_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

async function restoreData(event) {
    const file = event.target.files[0];
    if (!file) return;
    const confirmed = await showCustomConfirm('Verileriniz silinecek. Onaylıyor musunuz?', "Geri Yükle");
    if (!confirmed) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);
            if (data.prices) localStorage.setItem('kurye_prices', JSON.stringify(data.prices));
            if (data.expenses) localStorage.setItem('kurye_expenses', JSON.stringify(data.expenses));
            if (data.calendarData) localStorage.setItem('kurye_calendar', JSON.stringify(data.calendarData));
            if (data.packetCounter) localStorage.setItem('kurye_packet_counter', JSON.stringify(data.packetCounter));
            if (data.fuelHistory) localStorage.setItem('kurye_fuel_history_list', JSON.stringify(data.fuelHistory));
            window.location.reload();
        } catch (err) { showVisualSuccess("Hata", "Dosya okunamadı."); }
    };
    reader.readAsText(file);
}

// --- YAKIT SİSTEMİ ---
function initFuelSystem() {
    const savedPrice = localStorage.getItem('kurye_fuel_unit_price');
    if (savedPrice) document.getElementById('calcFuelUnitPrice').value = savedPrice;
    const savedHistory = localStorage.getItem('kurye_fuel_history_list');
    if (savedHistory) { fuelHistory = JSON.parse(savedHistory); renderFuelHistory(); }
}

function calculateFuelConsumption() {
    const unitPrice = parseFloat(document.getElementById('calcFuelUnitPrice').value) || 0;
    const totalPrice = parseFloat(document.getElementById('calcFuelPrice').value) || 0;
    const km = parseFloat(document.getElementById('calcFuelKm').value) || 0;
    let lt = (unitPrice > 0 && totalPrice > 0) ? totalPrice / unitPrice : 0;
    document.getElementById('calcFuelLtDisplay').innerText = lt.toFixed(1);
    document.getElementById('calcFuelLt').value = lt;
    if (km > 0 && totalPrice > 0) {
        document.getElementById('resFuelTl').innerText = (totalPrice / km).toFixed(2);
        document.getElementById('resFuelLt100').innerText = (lt > 0 ? (lt / km) * 100 : 0).toFixed(1);
    }
}

function saveFuelUnitData() { localStorage.setItem('kurye_fuel_unit_price', document.getElementById('calcFuelUnitPrice').value); }

function addFuelEntry() {
    const amount = parseFloat(document.getElementById('calcFuelPrice').value) || 0;
    const lt = parseFloat(document.getElementById('calcFuelLt').value) || 0;
    const km = parseFloat(document.getElementById('calcFuelKm').value) || 0;
    if (amount <= 0) return showVisualSuccess("Hata", "Tutar giriniz.");
    fuelHistory.unshift({ date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' }), amount, lt, km, per100: (km > 0 && lt > 0) ? ((lt / km) * 100).toFixed(1) : "0.0" });
    if (fuelHistory.length > 5) fuelHistory = fuelHistory.slice(0, 5);
    localStorage.setItem('kurye_fuel_history_list', JSON.stringify(fuelHistory));
    renderFuelHistory();
    showVisualSuccess("Eklendi", "Yakıt kaydı eklendi.");
}

function renderFuelHistory() {
    const listDiv = document.getElementById('fuelHistoryList');
    if (!listDiv) return;
    listDiv.innerHTML = fuelHistory.length ? '' : '<div class="text-center text-[10px] text-gray-600 py-2">Kayıt yok.</div>';
    fuelHistory.forEach(item => {
        listDiv.innerHTML += `<div class="bg-slate-800/80 p-2 rounded-lg border border-white/5 flex justify-between items-center mb-1"><div><div class="text-xs font-bold text-white">${item.amount} ₺ <span class="text-[10px] text-gray-400">(${item.lt.toFixed(1)} Lt)</span></div><div class="text-[9px] text-gray-500">${item.date} • ${item.km > 0 ? item.km + ' KM' : 'KM girilmedi'}</div></div><div class="text-right"><div class="text-xs font-bold text-cyan-400">${item.per100} Lt <span class="text-[9px] text-gray-500">/100km</span></div></div></div>`;
    });
}

async function clearFuelHistory() {
    if (await showCustomConfirm("Geçmiş silinsin mi?")) {
        fuelHistory = []; localStorage.removeItem('kurye_fuel_history_list'); renderFuelHistory();
    }
}
function clearFuelForm() { document.getElementById('calcFuelPrice').value = ''; document.getElementById('calcFuelKm').value = ''; }

// --- NOTE MODAL (Eksik Modal Açma Fonksiyonları) ---
function openDayModal(dateKey) {
    const d = new Date(dateKey);
    selectedDate = dateKey; // IMPORTANT: Set selectedDate
    document.getElementById('noteDateTitle').innerText = d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('noteModal').classList.remove('hidden');

    // Render notes
    const listDiv = document.getElementById('dayEventsList');
    listDiv.innerHTML = '';
    let hasNotes = false;

    // Check accumulated payments (Updated with Delete Button)
    if (accumulatedPayments[dateKey]) {
        hasNotes = true;
        listDiv.innerHTML += `
                    <div class="bg-purple-900/40 p-2 rounded-lg mb-2 border border-purple-500/30 flex justify-between items-center">
                        <div>
                            <div class="text-xs font-bold text-white">Ödeme Günü</div>
                            <div class="text-[10px] text-purple-300">Bu tarihte birikmiş: <span class="text-white font-bold">${accumulatedPayments[dateKey].toLocaleString('tr-TR')} ₺</span></div>
                        </div>
                        <button onclick="deleteAccumulatedPayment('${dateKey}')" class="text-purple-300 hover:text-red-400 transition-colors px-2"><i class="fa-solid fa-trash"></i></button>
                    </div>`;
    }

    // Check Recurring
    const dayOfMonth = parseInt(dateKey.split('-')[2]);
    repeatTransactions.forEach(rt => {
        if (parseInt(rt.day) === dayOfMonth) {
            hasNotes = true;
            let typeLabel = rt.type === 'income' ? 'GELİR' : (rt.type === 'expense' ? 'GİDER' : 'AKTİVİTE');
            let typeColor = rt.type === 'income' ? 'text-green-400' : (rt.type === 'expense' ? 'text-red-400' : 'text-yellow-400');
            let amountStr = rt.type === 'activity' ? '' : (rt.type === 'income' ? `+${rt.amount}₺` : `-${rt.amount}₺`);

            listDiv.innerHTML += `
                        <div class="bg-blue-900/40 p-2 rounded-lg mb-2 border border-blue-500/20">
                            <div class="text-xs font-bold text-white">${rt.description}</div>
                            <div class="text-[10px] text-blue-300">Tekrarlayan İşlem • <span class="${typeColor} font-bold">${typeLabel} ${amountStr}</span></div>
                        </div>`;
        }
    });

    if (calendarData[dateKey]) {
        calendarData[dateKey].forEach((n, idx) => {
            hasNotes = true;
            let typeLabel = n.type === 'income' ? 'GELİR' : (n.type === 'expense' ? 'GİDER' : 'AKTİVİTE');
            let typeColor = n.type === 'income' ? 'text-green-400' : (n.type === 'expense' ? 'text-red-400' : 'text-yellow-400');
            let amountStr = '';

            if (n.type === 'income') amountStr = `+${n.amount}₺`;
            else if (n.type === 'expense') amountStr = `-${n.amount}₺`;

            listDiv.innerHTML += `
                        <div class="bg-slate-800 p-2 rounded-lg mb-2 flex justify-between items-center">
                            <div>
                                <div class="text-xs font-bold text-white">${n.note}</div>
                                <div class="text-[10px] text-gray-400"><span class="${typeColor} font-bold">${typeLabel}</span> ${amountStr}</div>
                            </div>
                            <button onclick="deleteNote(${idx})" class="text-red-400"><i class="fa-solid fa-trash"></i></button>
                        </div>`;
        });
    }

    if (!hasNotes) listDiv.innerHTML = '<div class="text-center text-[10px] text-gray-500 py-2">Henüz not yok.</div>';
}

async function deleteAccumulatedPayment(dateKey) {
    const confirmed = await showCustomConfirm(`${dateKey} tarihindeki ödemeyi silmek istediğinize emin misiniz?`, "Ödeme Sil");
    if (!confirmed) return;

    delete accumulatedPayments[dateKey];
    localStorage.setItem('kurye_accumulated_payments', JSON.stringify(accumulatedPayments));

    showVisualSuccess("Silindi", "Ödeme silindi.");
    openNoteModal(dateKey); // Refresh modal content
    renderCalendar(); // Refresh calendar dots
    loadPaymentSystem(); // Refresh next payment info
}

function openNoteModal(dateKey) { openDayModal(dateKey); }
function closeNoteModal() { document.getElementById('noteModal').classList.add('hidden'); }
function setNoteType(t) {
    noteType = t;
    ['btnTypeIncome', 'btnTypeExpense', 'btnTypeActivity'].forEach(b => document.getElementById(b).classList.remove('active'));
    document.getElementById('btnType' + t.charAt(0).toUpperCase() + t.slice(1)).classList.add('active');
}
function addNote() {
    const txt = document.getElementById('noteText').value;
    const amt = parseFloat(document.getElementById('noteAmount').value);
    if (!txt && !amt) return;

    if (!calendarData[selectedDate]) calendarData[selectedDate] = [];
    calendarData[selectedDate].push({ note: txt, amount: amt, type: noteType });
    localStorage.setItem('kurye_calendar', JSON.stringify(calendarData));

    document.getElementById('noteText').value = '';
    document.getElementById('noteAmount').value = '';
    showVisualSuccess("Eklendi", "Not eklendi.");
    openNoteModal(selectedDate); // Refresh
    renderCalendar();
}
function deleteNote(idx) {
    if (calendarData[selectedDate]) {
        calendarData[selectedDate].splice(idx, 1);
        if (calendarData[selectedDate].length === 0) delete calendarData[selectedDate];
        localStorage.setItem('kurye_calendar', JSON.stringify(calendarData));
        openNoteModal(selectedDate);
        renderCalendar();
    }
}
function updateActivityBoard() {
    document.getElementById('todayActivities').innerHTML = '<div class="text-center text-[10px] text-gray-600 py-2">Bugün için plan yok.</div>';
}

// --- HELPER FUNCTIONS ---
function loadAccountData() { /* Placeholder if needed for migration */ }
function loadPerfMemory() {
    const s = localStorage.getItem('kurye_perf_memory');
    if (s) {
        const d = JSON.parse(s);
        if (d.start) document.getElementById('perfStartTime').value = d.start;
        if (d.end) document.getElementById('perfEndTime').value = d.end;
        if (d.count) document.getElementById('perfPacketCount').value = d.count;
        calculatePerf();
    }
}
function savePerfMemoryAuto() {
    const d = {
        start: document.getElementById('perfStartTime').value,
        end: document.getElementById('perfEndTime').value,
        count: document.getElementById('perfPacketCount').value
    };
    localStorage.setItem('kurye_perf_memory', JSON.stringify(d));
}
function setPerfTime(id) {
    const now = new Date();
    const time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    document.getElementById(id).value = time;
    calculatePerf();
    savePerfMemoryAuto();
}
function calculatePerf() {
    const start = document.getElementById('perfStartTime').value;
    const end = document.getElementById('perfEndTime').value;
    const count = parseFloat(document.getElementById('perfPacketCount').value) || 0;
    if (!start || !end || count <= 0) return;

    const [sh, sm] = start.split(':').map(Number);
    const [eh, em] = end.split(':').map(Number);
    let diffMins = (eh * 60 + em) - (sh * 60 + sm);
    if (diffMins < 0) diffMins += 24 * 60;

    if (diffMins > 0) {
        const hours = diffMins / 60;
        const speed = count / hours;
        const minsPerPacket = diffMins / count;

        document.getElementById('perfResultArea').classList.remove('hidden');
        document.getElementById('perfAvgSpeed').innerText = speed.toFixed(1);
        document.getElementById('perfMinsPerPacket').innerText = minsPerPacket.toFixed(1);
        document.getElementById('perfTotalTime').innerText = Math.floor(diffMins / 60) + "s " + (diffMins % 60) + "dk";
        document.getElementById('perfTotalPackets').innerText = count;
    }
}
function resetPerfForm() {
    document.getElementById('perfStartTime').value = '';
    document.getElementById('perfEndTime').value = '';
    document.getElementById('perfPacketCount').value = '';
    document.getElementById('perfResultArea').classList.add('hidden');
    savePerfMemoryAuto();
}
function updateSystemInfo() {
    let size = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) size += ((localStorage[key].length + key.length) * 2);
    }
    document.getElementById('dataSize').innerText = (size / 1024).toFixed(2) + " KB";
}
// --- ADDED MISSING TOGGLEMANUALMODE FUNCTION ---
function toggleManualMode() {
    const isManual = document.getElementById('manualModeToggle').checked;
    const manualSection = document.getElementById('manualSection');
    const packetSection = document.getElementById('packetSection');
    const label = document.getElementById('modeLabel');

    if (isManual) {
        manualSection.classList.remove('hidden');
        packetSection.classList.add('hidden');
        label.innerText = 'MANUEL';
        label.classList.remove('text-gray-300');
        label.classList.add('text-emerald-400');
    } else {
        manualSection.classList.add('hidden');
        packetSection.classList.remove('hidden');
        label.innerText = 'PAKET';
        label.classList.add('text-gray-300');
        label.classList.remove('text-emerald-400');
    }
    calculateProfit();
}

function toggleSettings() { document.getElementById('settingsModal').classList.toggle('hidden'); }
function scrollToResults() { document.getElementById('finalResultCard').scrollIntoView({ behavior: 'smooth' }); }

function switchTab(id, btn) {
    document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-lg'));
    btn.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
    btn.classList.remove('text-gray-400');

    // Toggle visibility of Manual switch in header
    const headerToggle = document.getElementById('headerManualToggle');
    if (id === 'tabProfit') {
        headerToggle.classList.remove('hidden');
    } else {
        headerToggle.classList.add('hidden');
    }
}

function clearPacketInputs() { document.getElementById('single').value = ''; document.getElementById('multi').value = ''; calculateProfit(); }
function clearTransactionHistory() { transactionHistory = []; localStorage.removeItem('kurye_transaction_history'); renderTransactionHistory(); }
function resetPriceDefaults() { if (confirm("Varsayılan fiyatlara dönülsün mü?")) { prices = { single: 110, multi: 40, avm: 10, night: 20 }; savePriceSettings(); loadPrices(); } }

// Placeholder external links
function makroTetikle() { console.log('Makro'); }
function posTetikle() { console.log('POS'); }

// --- NEW: ADVANCED DATE CALCULATION LOGIC ---
function calculateRealPaymentDate(date = new Date()) {
    const current = new Date(date);
    const day = current.getDay(); // 0: Sunday
    // Calculate end of work week (Sunday)
    const daysUntilSunday = day === 0 ? 0 : 7 - day;
    const endOfWeek = new Date(current);
    endOfWeek.setDate(current.getDate() + daysUntilSunday);
    // Rule: Payment is 10 days after work week ends (which is a Wednesday)
    const paymentDate = new Date(endOfWeek);
    paymentDate.setDate(endOfWeek.getDate() + 10);
    return paymentDate;
}

function changeSimulationDays(amount) {
    simulationDays += amount;
    if (simulationDays < 1) simulationDays = 1;
    if (simulationDays > 60) simulationDays = 60;
    document.getElementById('simDays').textContent = simulationDays;
}

// --- UPDATED: PAYMENT ACCUMULATION WITH NEW DATE LOGIC ---
async function addCalculatedToPayment(selectId) {
    const netStr = document.getElementById('resNet').innerText.replace(/\./g, '').replace(',', '.');
    const netVal = parseFloat(netStr);

    if (netVal <= 0) {
        showVisualSuccess("Hata", "Net gelir 0 veya daha düşük.");
        return;
    }

    // DUZELTME: Menuden secilen tarihi kullan
    const dateStr = document.getElementById(selectId).value;
    // Tarihi gorsel gosterim icin objeye cevir
    const targetDate = new Date(dateStr);

    const confirmed = await showCustomConfirm(`₺${netVal.toLocaleString('tr-TR')} tutarındaki net gelir ${targetDate.toLocaleDateString('tr-TR')} ödemesine eklensin mi?`, "Ödeme Ekle");
    if (!confirmed) return;

    if (!accumulatedPayments[dateStr]) accumulatedPayments[dateStr] = 0;
    accumulatedPayments[dateStr] += netVal;

    transactionHistory.unshift({
        date: new Date().toLocaleDateString('tr-TR'),
        type: 'income',
        amount: netVal,
        description: 'Hesaplanan Net Gelir'
    });
    if (transactionHistory.length > 5) transactionHistory.pop();

    localStorage.setItem('kurye_accumulated_payments', JSON.stringify(accumulatedPayments));
    localStorage.setItem('kurye_transaction_history', JSON.stringify(transactionHistory));

    showVisualSuccess("Başarılı", "Ödeme gününe eklendi.");
    loadPaymentSystem();
    renderCalendar();
}

// --- UPDATED: FUTURE CALCULATION LOGIC ---
function calculateFutureBalance() {
    const currentBank = parseFloat(document.getElementById('bankAccount').value) || 0;
    const currentDebt = parseFloat(document.getElementById('creditDebt').value) || 0;
    let balance = currentBank - currentDebt;

    let futureIncome = 0;
    let futureExpense = 0;

    const today = new Date();
    const endDate = new Date();
    endDate.setDate(today.getDate() + simulationDays);

    // 1. Calendar
    Object.keys(calendarData).forEach(dateStr => {
        const date = new Date(dateStr);
        if (date >= today && date <= endDate) {
            const notes = calendarData[dateStr];
            notes.forEach(note => {
                if (note.type === 'income') futureIncome += parseFloat(note.amount) || 0;
                else if (note.type === 'expense') futureExpense += parseFloat(note.amount) || 0;
            });
        }
    });

    // 2. Recurring
    const todayDay = today.getDate();
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    repeatTransactions.forEach(rt => {
        if (rt.type === 'activity') return;
        let daysUntil = rt.day - todayDay;
        if (daysUntil < 0) daysUntil = (lastDayOfMonth - todayDay) + parseInt(rt.day);
        if (daysUntil <= simulationDays) {
            if (rt.type === 'income') futureIncome += rt.amount;
            else if (rt.type === 'expense') futureExpense += rt.amount;
        }
    });

    // 3. Payments
    for (let paymentDate in accumulatedPayments) {
        const date = new Date(paymentDate);
        if (date >= today && date <= endDate) {
            futureIncome += accumulatedPayments[paymentDate];
        }
    }

    document.getElementById('currentBalanceResult').innerText = balance.toLocaleString('tr-TR') + ' ₺';
    document.getElementById('futureIncomesResult').innerText = '+' + futureIncome.toLocaleString('tr-TR') + ' ₺';
    document.getElementById('futureExpensesResult').innerText = '-' + futureExpense.toLocaleString('tr-TR') + ' ₺';

    const finalBalance = balance + futureIncome - futureExpense;
    document.getElementById('finalBalanceResult').innerText = finalBalance.toLocaleString('tr-TR') + ' ₺';

    // Emoji Logic
    const resultEmoji = document.getElementById('resultEmoji');
    const resultTitle = document.getElementById('resultTitle');
    if (finalBalance > balance * 1.2) { resultEmoji.textContent = '🚀'; resultTitle.textContent = 'MÜTHİŞ!'; resultTitle.className = 'text-lg font-bold text-emerald-400'; }
    else if (finalBalance > balance) { resultEmoji.textContent = '📈'; resultTitle.textContent = 'İYİ GİDİYOR!'; resultTitle.className = 'text-lg font-bold text-green-400'; }
    else if (finalBalance > 0) { resultEmoji.textContent = '⚠️'; resultTitle.textContent = 'DİKKAT!'; resultTitle.className = 'text-lg font-bold text-yellow-400'; }
    else { resultEmoji.textContent = '🔴'; resultTitle.textContent = 'TEHLİKE!'; resultTitle.className = 'text-lg font-bold text-red-400'; }

    document.getElementById('futureResult').classList.remove('hidden');
    document.getElementById('futureResult').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// DOCK TOGGLE İŞLEMİ
function toggleSideDock() {
    const dock = document.getElementById('sideDock');
    if (dock) {
        dock.classList.toggle('active');
    }
}

// --- KURYE DIALER SİSTEMİ ---
let dialerNumbers = JSON.parse(localStorage.getItem('kurye_dialer_numbers') || '[]');
let dialerHistory = JSON.parse(localStorage.getItem('kurye_dialer_history') || '[]');

function openDialerModal() {
    document.getElementById('dialerModal').classList.remove('hidden');
    renderDialerNumbers();
    renderDialerHistory();
    document.getElementById('dialerOrderInput').focus();
}

function closeDialerModal() {
    document.getElementById('dialerModal').classList.add('hidden');
}

function renderDialerNumbers() {
    const list = document.getElementById('dialerNumbersList');
    list.innerHTML = '';
    dialerNumbers.forEach((num, index) => {
        list.innerHTML += `
                    <div class="bg-slate-800/30 p-2 rounded-xl border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center text-gray-400">
                                <i class="fa-solid fa-phone"></i>
                            </div>
                            <div class="text-white font-mono font-bold tracking-wide text-sm">${num}</div>
                        </div>
                        <div class="flex gap-2">
                             <button onclick="callDialerNumber('${num}')" class="w-8 h-8 rounded-lg bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white transition-all flex items-center justify-center">
                                <i class="fa-solid fa-phone text-xs"></i>
                            </button>
                            <button onclick="removeDialerNumber(${index})" class="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center">
                                <i class="fa-solid fa-trash text-xs"></i>
                            </button>
                        </div>
                    </div>
                `;
    });
}

function addDialerNumber() {
    const input = document.getElementById('newDialerNumber');
    const num = input.value.trim().replace(/\s/g, ''); // Boşlukları temizle
    if (!num) return;

    // Basit validasyon
    if (num.length < 3) return showVisualSuccess("Hata", "Geçersiz numara");

    dialerNumbers.push(num);
    localStorage.setItem('kurye_dialer_numbers', JSON.stringify(dialerNumbers));
    input.value = '';
    renderDialerNumbers();
}

function removeDialerNumber(index) {
    dialerNumbers.splice(index, 1);
    localStorage.setItem('kurye_dialer_numbers', JSON.stringify(dialerNumbers));
    renderDialerNumbers();
}

function callDialerNumber(num) {
    const orderNo = document.getElementById('dialerOrderInput').value.trim();

    // Eğer sipariş numarası varsa, otomatik olarak geçmişe kaydet
    if (orderNo) {
        addOrderToHistory(orderNo);
    }

    // Aramayı başlat
    // Not: Virgül ile bekleme (,1234) çoğu modern mobil tarayıcıda güvenlik nedeniyle doğrudan çalışmayabilir
    // ancak protokol standardında desteklenir. Kullanıcı deneyimi için yine de ekliyoruz.
    // Sipariş numarası varsa sonuna ekle
    let dialString = num;
    if (orderNo) {
        // Bekleme süresi için virgül ekle (bazı tel sistemleri destekler)
        dialString += ',' + orderNo;
    }

    window.open('tel:' + dialString);
}

function saveOrderHistory() {
    const orderNo = document.getElementById('dialerOrderInput').value.trim();
    if (!orderNo) return;
    addOrderToHistory(orderNo);
    showVisualSuccess("Kaydedildi", "Geçmişe eklendi");
}

function addOrderToHistory(orderNo) {
    // Tekrarları önle, en başa ekle
    dialerHistory = dialerHistory.filter(n => n !== orderNo);
    dialerHistory.unshift(orderNo);

    // Son 10 kaydı tut
    if (dialerHistory.length > 10) dialerHistory = dialerHistory.slice(0, 10);

    localStorage.setItem('kurye_dialer_history', JSON.stringify(dialerHistory));
    renderDialerHistory();
}

function renderDialerHistory() {
    const list = document.getElementById('dialerHistoryList');
    const section = document.getElementById('dialerHistorySection');

    if (dialerHistory.length === 0) {
        section.classList.add('hidden');
        return;
    }

    section.classList.remove('hidden');
    list.innerHTML = '';

    dialerHistory.forEach(orderNo => {
        list.innerHTML += `
                    <button onclick="document.getElementById('dialerOrderInput').value = '${orderNo}'" 
                        class="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-400 font-mono text-sm border border-cyan-500/20 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all">
                        ${orderNo}
                    </button>
                `;
    });
}

function clearDialerHistory() {
    dialerHistory = [];
    localStorage.setItem('kurye_dialer_history', JSON.stringify(dialerHistory));
    renderDialerHistory();
}

// HIZLI ADRES ARAMA - Çoklu kelime desteği
async function quickSearchAddress(query) {
    const resultsDiv = document.getElementById('quickSearchResults');

    if (!query || query.length < 2) {
        resultsDiv.classList.add('hidden');
        resultsDiv.innerHTML = '';
        return;
    }

    await ensureAddressData();
    if (!addressData) return;

    // Türkçe karakterleri normalize et
    function normalize(str) {
        return str.toUpperCase()
            .replace(/İ/g, 'I').replace(/I/g, 'I')
            .replace(/Ğ/g, 'G').replace(/Ü/g, 'U')
            .replace(/Ş/g, 'S').replace(/Ö/g, 'O')
            .replace(/Ç/g, 'C');
    }

    // Kelimelere ayır
    const searchWords = query.trim().split(/\s+/).map(w => normalize(w)).filter(w => w.length > 0);
    const results = [];
    const maxResults = 20;

    // Tüm kelimelerin eşleşip eşleşmediğini kontrol et
    function matchesAllWords(fullText) {
        const normalizedText = normalize(fullText);
        return searchWords.every(word => normalizedText.includes(word));
    }

    // addressData içinde ara
    for (const [mahalleId, mahalle] of Object.entries(addressData)) {
        const mahalleAdi = mahalle.adi;

        // Sokak/Cadde ve kapı numarasında ara
        for (const [sokakId, sokak] of Object.entries(mahalle.streets || {})) {
            const sokakAdi = sokak.adi;

            // Kapı numaralarında kombinasyon ara
            for (const door of (sokak.doors || [])) {
                const doorNo = door.no;
                const fullAddress = mahalleAdi + ' ' + sokakAdi + ' ' + doorNo;

                if (matchesAllWords(fullAddress)) {
                    results.push({
                        type: 'kapi',
                        icon: 'fa-door-open',
                        color: 'text-amber-400',
                        text: mahalleAdi + ' Mah. ' + sokakAdi + ' No:' + doorNo,
                        mahalleId: mahalleId,
                        mahalleAdi: mahalleAdi,
                        sokakId: sokakId,
                        sokakAdi: sokakAdi,
                        door: door
                    });
                }

                if (results.length >= maxResults) break;
            }

            // Eğer kapıda bulamadıysak, sokak seviyesinde ara
            if (results.length < maxResults) {
                const streetAddress = mahalleAdi + ' ' + sokakAdi;
                if (matchesAllWords(streetAddress) && !results.some(r => r.sokakId === sokakId && !r.door)) {
                    results.push({
                        type: 'sokak',
                        icon: 'fa-road',
                        color: 'text-green-400',
                        text: sokakAdi + ', ' + mahalleAdi + ' Mah.',
                        mahalleId: mahalleId,
                        mahalleAdi: mahalleAdi,
                        sokakId: sokakId,
                        sokakAdi: sokakAdi
                    });
                }
            }

            if (results.length >= maxResults) break;
        }

        // Sadece mahalle araması
        if (results.length < maxResults && searchWords.length === 1) {
            if (matchesAllWords(mahalleAdi) && !results.some(r => r.mahalleId === mahalleId && r.type === 'mahalle')) {
                results.push({
                    type: 'mahalle',
                    icon: 'fa-location-dot',
                    color: 'text-blue-400',
                    text: mahalleAdi + ' Mah.',
                    mahalleId: mahalleId,
                    mahalleAdi: mahalleAdi
                });
            }
        }

        if (results.length >= maxResults) break;
    }

    // Sonuçları sırala (kapı no önce, sonra sokak, sonra mahalle)
    results.sort((a, b) => {
        const order = { 'kapi': 0, 'sokak': 1, 'mahalle': 2 };
        return order[a.type] - order[b.type];
    });

    // Sonuçları göster
    if (results.length === 0) {
        resultsDiv.innerHTML = '<div class="p-3 text-gray-500 text-sm text-center">Sonuç bulunamadı</div>';
    } else {
        resultsDiv.innerHTML = results.map(r => `
                    <div class="p-2 hover:bg-slate-700 cursor-pointer flex items-center gap-2 text-sm border-b border-slate-700 last:border-0"
                         onclick='selectQuickResult(${JSON.stringify(r).replace(/'/g, "&#39;")})'>
                        <i class="fa-solid ${r.icon} ${r.color}"></i>
                        <span class="text-gray-200">${r.text}</span>
                    </div>
                `).join('');
    }

    resultsDiv.classList.remove('hidden');
}


function selectQuickResult(result) {
    document.getElementById('quickSearchResults').classList.add('hidden');
    document.getElementById('quickAddressSearch').value = result.text;

    // Mahalle seç
    const mahalleSelect = document.getElementById('mapMahalle');
    mahalleSelect.value = result.mahalleId;
    loadStreets();

    // Sokak varsa onu da seç
    if (result.sokakId) {
        setTimeout(() => {
            const sokakSelect = document.getElementById('mapSokak');
            sokakSelect.value = result.sokakId;
            loadDoors();

            // Kapı no varsa onu da seç ve haritayı göster
            if (result.door) {
                setTimeout(() => {
                    const kapiSelect = document.getElementById('mapKapi');
                    // Kapı seçimini bul - "No: X" formatında text var
                    const doorText = 'No: ' + result.door.no;
                    for (let opt of kapiSelect.options) {
                        if (opt.text === doorText || opt.textContent === doorText) {
                            kapiSelect.value = opt.value;
                            break;
                        }
                    }
                    searchAndShowMap();
                }, 200);
            }
        }, 150);
    }
}


// HARİTA MODAL İŞLEMLERİ
let internalMap = null;
let internalMarker = null;
let selectedLocation = null;
let addressData = null;

async function ensureAddressData() {
    if (addressData) return;
    try {
        if (!addressData) {
            try {
                const mod = await import('../data/addressDataEncrypted.js');
                const raw = mod.encryptedData;

                if (raw.startsWith('KRYSEC_')) {
                    const base64 = raw.replace('KRYSEC_', '').split('').reverse().join('');

                    // Browser environment decoding
                    const jsonStr = decodeURIComponent(escape(window.atob(base64)));
                    addressData = JSON.parse(jsonStr);

                } else {
                    console.error('Invalid encrypted data format');
                    addressData = {};
                }
            } catch (err) {
                console.error('Failed to load address data:', err);
                addressData = {};
            }
        }
    } catch (err) {
        console.error('Adres verisi yüklenemedi:', err);
    }
}

async function toggleMapModal() {
    const modal = document.getElementById('mapModal');
    if (!modal) return;

    const isHidden = modal.classList.contains('hidden');
    if (isHidden) {
        modal.classList.remove('hidden');
        modal.classList.add('animate-modal-in');
        await ensureAddressData();
        if (document.getElementById('mapMahalle')?.options.length <= 1) {
            initMapModal();
        }
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('animate-modal-in');
    }
}


function initMapModal() {
    const select = document.getElementById('mapMahalle');
    if (!addressData) return;
    if (select.options.length > 1) return; // Already loaded

    select.innerHTML = '<option value="">Seçiniz...</option>';

    // Mahalle listesini oluştur ve sırala
    const mahalleList = Object.entries(addressData).map(([id, m]) => ({ id, adi: m.adi }));
    mahalleList.sort((a, b) => a.adi.localeCompare(b.adi, 'tr'));

    mahalleList.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = m.adi;
        select.appendChild(opt);
    });
}

function loadStreets() {
    const mahalleId = document.getElementById('mapMahalle').value;
    const streetSelect = document.getElementById('mapSokak');
    const doorSelect = document.getElementById('mapKapi');

    streetSelect.innerHTML = '<option value="">Yükleniyor...</option>';
    streetSelect.disabled = true;
    doorSelect.innerHTML = '<option value="">Önce Sokak Seçin</option>';
    doorSelect.disabled = true;
    document.getElementById('internalMapContainer').classList.add('hidden');

    if (!mahalleId || !addressData || !addressData[mahalleId]) {
        streetSelect.innerHTML = '<option value="">Önce Mahalle Seçin</option>';
        return;
    }

    const streets = addressData[mahalleId].streets;
    const streetList = Object.entries(streets).map(([id, s]) => ({ id, adi: s.adi, tur: s.tur }));
    streetList.sort((a, b) => a.adi.localeCompare(b.adi, 'tr'));

    streetSelect.innerHTML = '<option value="">Seçiniz...</option>';
    streetList.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.adi + (s.tur ? ' (' + s.tur + ')' : '');
        streetSelect.appendChild(opt);
    });
    streetSelect.disabled = false;
}

function loadDoors() {
    const mahalleId = document.getElementById('mapMahalle').value;
    const sokakId = document.getElementById('mapSokak').value;
    const doorSelect = document.getElementById('mapKapi');

    doorSelect.innerHTML = '<option value="">Yükleniyor...</option>';
    doorSelect.disabled = true;
    document.getElementById('internalMapContainer').classList.add('hidden');

    if (!mahalleId || !sokakId || !addressData || !addressData[mahalleId]) {
        doorSelect.innerHTML = '<option value="">Önce Sokak Seçin</option>';
        return;
    }

    const street = addressData[mahalleId].streets[sokakId];
    if (!street || !street.doors || street.doors.length === 0) {
        doorSelect.innerHTML = '<option value="">Bu sokakta kapı bulunamadı</option>';
        return;
    }

    // Kapıları numaraya göre sırala
    const doors = [...street.doors];
    doors.sort((a, b) => {
        const nA = parseInt(a.no) || 0;
        const nB = parseInt(b.no) || 0;
        return nA - nB;
    });

    doorSelect.innerHTML = '<option value="">Seçiniz...</option>';
    doors.forEach(d => {
        const opt = document.createElement('option');
        opt.value = JSON.stringify({ lat: d.lat, lon: d.lon, no: d.no });
        opt.textContent = 'No: ' + d.no;
        doorSelect.appendChild(opt);
    });
    doorSelect.disabled = false;
}

function searchAndShowMap() {
    const doorVal = document.getElementById('mapKapi').value;
    if (!doorVal) {
        alert("Lütfen geçerli bir kapı numarası seçin.");
        return;
    }

    const data = JSON.parse(doorVal);
    selectedLocation = data;

    document.getElementById('internalMapContainer').classList.remove('hidden');
    document.getElementById('googleMapsBtn').classList.remove('hidden');

    // Leaflet Init
    setTimeout(() => {
        if (!internalMap) {
            internalMap = L.map('internalMap').setView([data.lat, data.lon], 18);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
            }).addTo(internalMap);
        } else {
            internalMap.invalidateSize();
            internalMap.setView([data.lat, data.lon], 18);
        }

        if (internalMarker) {
            internalMap.removeLayer(internalMarker);
        }

        internalMarker = L.marker([data.lat, data.lon]).addTo(internalMap)
            .bindPopup(`<b>Kapı No: ${data.no}</b>`).openPopup();
    }, 100);
}

function openExternalMap() {
    if (selectedLocation) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lon}`, '_blank');
    } else {
        alert('Önce konum seçmelisiniz.');
    }
}
