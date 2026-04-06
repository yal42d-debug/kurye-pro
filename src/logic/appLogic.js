//noinspection SpellCheckingInspection
// cspell:disable
/* global L */
import { getBonusForMode, getDailyBonus, getKmRate } from '../lib/calculations';
import { fetchSecureData, startGoogleLogin, checkAccess } from '../lib/security';

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
        addPerfToPayment,
        addRepeatTransaction,
        backupData,
        calculateFuelConsumption,
        calculateFutureBalance,
        calculateDetailedPlan,
        calculateMaintenance,
        calculatePerf,
        calculateProfit, addExpenseItem, deleteExpenseItem, renderExpenseList,
        callDialerNumber,

        changeMonth,
        changePacketCount,
        changeSimulationDays,
        changeDetailDays,
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
        generateDetailedPlanInputs,
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
        selectQuickResult,
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
        switchProfitSubView,
        switchTab,
        toggleCheckItem,


        addOffDay, // Replaces toggleOffDay
        resetOffDays,
        toggleMapModal,
        toggleSettings,
        toggleSideDock,
        updateEarningCalculation,
        
        // Dynamic Expense Management
        addExpenseItem,
        deleteExpenseItem,
        renderExpenseList
    });
}



// --- DEĞİŞKENLER ---

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
let profitDurationMode = 'month'; // Default Month
let offDayCounts = { weekday: 0, friday: 0, saturday: 0, sunday: 0 };
let activeProfitSubView = 'expense';
let customExpenses = [];

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
    switchProfitSubView('average'); // Default view changed for debugging
    autoSelectDay();
    loadPrices();
    loadExpenses();
    loadCalendarData();
    loadChecklists();
    loadGarageData();
    initWeather();
    calculateProfit();

    // Switch to Performance Tab by default
    setTimeout(() => {
        const perfBtn = document.querySelector("button[onclick*=\"switchTab('tabPerf'\"]");
        if (perfBtn) {
            switchTab('tabPerf', perfBtn);
        }
    }, 100);

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

    // Auth Check
    checkAppAuth();
}

// --- CORE FUNCTIONS (UPDATED) ---

// 1. Duration Mode System (UPDATED to auto-set daysOff)
function setDurationMode(mode) {
    profitDurationMode = mode;
    const ids = ['btnDurDay', 'btnDurWeek', 'btnDurMonth'];

    // Only proceed if buttons exist in DOM
    const firstBtn = document.getElementById(ids[0]);
    if (firstBtn) {
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                // Reset to Inactive State
                el.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
                el.classList.add('inactive', 'text-gray-500', 'hover:text-white', 'hover:bg-white/5');
            }
        });

        const activeId = mode === 'day' ? 'btnDurDay' : (mode === 'week' ? 'btnDurWeek' : 'btnDurMonth');
        const activeEl = document.getElementById(activeId);
        if (activeEl) {
            // Set to Active State
            activeEl.classList.remove('inactive', 'text-gray-500', 'hover:text-white', 'hover:bg-white/5');
            activeEl.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
        }
    }

    calculateProfit();
}

// 2. Wednesday Generator for Dropdowns
function populatePaymentWednesdays() {
    const selects = ['manualPaymentDate', 'packetPaymentDate', 'perfPaymentDate'];
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



// --- NEW: PROFIT SUB-VIEW LOGIC ---
function switchProfitSubView(viewName) {
    activeProfitSubView = viewName;

    // Update Buttons (Active Tab Highlight)
    const btnMap = {
        'expense': 'btnSubExpense',
        'average': 'btnSubAverage',
        'detailed': 'btnSubDetailed'
    };

    Object.keys(btnMap).forEach(key => {
        const el = document.getElementById(btnMap[key]);
        if (el) {
            if (key === viewName) {
                el.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
                el.classList.remove('inactive', 'text-gray-500', 'hover:bg-white/5');
            } else {
                el.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
                el.classList.add('inactive', 'text-gray-500', 'hover:bg-white/5');
            }
        }
    });

    // Content Visibility
    const views = {
        'expense': document.getElementById('viewExpense'),
        'average': document.getElementById('viewAverage'),
        'detailed': document.getElementById('viewDetailed')
    };

    Object.keys(views).forEach(key => {
        if (views[key]) {
            if (key === viewName) views[key].classList.remove('hidden');
            else views[key].classList.add('hidden');
        }
    });

    // Re-calculate based on view
    if (viewName === 'detailed') generateDetailedPlanInputs();
    
    loadExpenses();
    calculateProfit();
}

// --- DETAILED PLAN LOGIC ---
let detailPlanDays = 7;
function changeDetailDays(amount) {
    detailPlanDays += amount;
    if (detailPlanDays < 1) detailPlanDays = 1;
    if (detailPlanDays > 31) detailPlanDays = 31;
    document.getElementById('detailDaysDisp').innerText = detailPlanDays;
    
    // Listeyi anlık güncelle
    generateDetailedPlanInputs();
}

function generateDetailedPlanInputs() {
    const container = document.getElementById('detailedPlanContainer');
    container.innerHTML = '';

    // Default to today if not set
    let startDateInput = document.getElementById('planStartDate').value;
    let startDate = new Date();
    if (startDateInput) {
        startDate = new Date(startDateInput);
    } else {
        // Set input to today
        const todayStr = startDate.toISOString().split('T')[0];
        document.getElementById('planStartDate').value = todayStr;
    }

    const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    for (let i = 0; i < detailPlanDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        const dayIndex = currentDate.getDay();
        const dayName = dayNames[dayIndex];
        const dateStr = currentDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'numeric' });

        // Determine day type for styling
        let dayClass = "text-gray-400";
        if (dayIndex === 5) dayClass = "text-emerald-400"; // Friday
        else if (dayIndex === 6 || dayIndex === 0) dayClass = "text-indigo-400"; // Weekend

        container.innerHTML += `
            <div class="bg-slate-800/50 p-3 rounded-xl border border-white/5 space-y-2">
                <div class="flex justify-between items-center border-b border-white/5 pb-1">
                    <div class="text-[11px] font-bold ${dayClass} flex items-center gap-2">
                        <i class="fa-regular fa-calendar"></i> ${dateStr} ${dayName}
                    </div>
                    <div class="text-[10px] font-bold text-gray-500" id="detail_info_${i}">Bonus: -</div>
                </div>
                
                <div class="grid grid-cols-4 gap-2">
                    <div class="col-span-1">
                        <label class="block text-[8px] text-gray-500 font-bold mb-0.5 text-center">Tekli</label>
                        <input type="number" id="ds_${i}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="0" onkeyup="calculateDetailedPlan()">
                    </div>
                    <div class="col-span-1">
                        <label class="block text-[8px] text-gray-500 font-bold mb-0.5 text-center">Çoklu</label>
                        <input type="number" id="dm_${i}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="0" onkeyup="calculateDetailedPlan()">
                    </div>
                    <div class="col-span-1">
                        <label class="block text-[8px] text-gray-500 font-bold mb-0.5 text-center">AVM</label>
                        <input type="number" id="da_${i}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="-" onkeyup="calculateDetailedPlan()">
                    </div>
                    <div class="col-span-1">
                        <label class="block text-[8px] text-blue-500/70 font-bold mb-0.5 text-center">Gece</label>
                        <input type="number" id="dn_${i}" class="input-dark p-1.5 rounded-lg text-center text-xs font-bold w-full" placeholder="-" onkeyup="calculateDetailedPlan()">
                    </div>
                </div>
                
                <div class="grid grid-cols-2 gap-2 items-center">
                     <div>
                        <label class="block text-[8px] test-gray-500 font-bold mb-0.5 ml-1">Ort. KM</label>
                        <div class="relative">
                            <input type="number" id="dkm_${i}" step="0.1" class="input-dark p-1.5 rounded-lg text-xs font-bold w-full pl-6 text-blue-300" placeholder="0" onkeyup="calculateDetailedPlan()">
                             <i class="fa-solid fa-gauge-high absolute left-2 top-1/2 -translate-y-1/2 text-[9px] text-blue-500"></i>
                        </div>
                     </div>
                     <div class="bg-slate-900 rounded-lg p-1.5 text-right">
                        <span class="text-[10px] text-gray-400 block" style="line-height:1">Günlük</span>
                        <span id="dres_${i}" class="text-sm font-black text-white">0 ₺</span>
                     </div>
                </div>
            </div>
        `;
    }
    document.getElementById('detailedResultArea').classList.remove('hidden');
    calculateDetailedPlan();
}

function calculateDetailedPlan() {
    let totalGross = 0;
    let startDateInput = document.getElementById('planStartDate').value;
    let startDate = startDateInput ? new Date(startDateInput) : new Date();

    for (let i = 0; i < detailPlanDays; i++) {
        const s = parseFloat(document.getElementById(`ds_${i}`).value) || 0;
        const m = parseFloat(document.getElementById(`dm_${i}`).value) || 0;
        const a = parseFloat(document.getElementById(`da_${i}`).value) || 0;
        const n = parseFloat(document.getElementById(`dn_${i}`).value) || 0;
        const km = parseFloat(document.getElementById(`dkm_${i}`).value) || 0;

        const base = (s * prices.single) + (m * prices.multi);
        const extra = (a * prices.avm) + (n * prices.night);

        const totalPkt = s + m;

        // KM Calculation
        const kmRate = getKmRate(km);
        const kmIncome = totalPkt * km * kmRate;

        // Bonus Logic based on Day
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const dayIndex = currentDate.getDay();

        // Fix Sunday calculation (getDay() 0 is Sunday)
        let mode = 'weekday';
        if (dayIndex === 5) mode = 'friday';
        else if (dayIndex === 6) mode = 'saturday';
        else if (dayIndex === 0) mode = 'sunday';

        const bonusData = getBonusForMode(totalPkt, dailyBonusTiers, mode);

        // bonusData returns a NUMBER from getBonusForMode, NOT an object with .current
        // Wait, imported getDailyBonus returns object {current, next...}
        // imported getBonusForMode returns number.
        // Let's use getDailyBonus to be safe and consistent or check imports.
        // File line 4 imports both.
        // Let's use getDailyBonus(total, tiers, mode).current

        const bonusObj = getDailyBonus(totalPkt, dailyBonusTiers, mode);
        const bonusAmount = bonusObj.current;

        const dailyTotal = base + extra + kmIncome + bonusAmount;
        totalGross += dailyTotal;

        document.getElementById(`dres_${i}`).innerText = dailyTotal.toLocaleString('tr-TR') + ' ₺';

        // Avoid NaN in display
        const kmDisp = Math.round(kmIncome) || 0;
        document.getElementById(`detail_info_${i}`).innerText = `Bonus: ${bonusAmount}₺ / KM: ${kmDisp}₺`;
    }

    document.getElementById('detailTotalGross').innerText = totalGross.toLocaleString('tr-TR');
}


// --- GELİR HESAPLAMA (REFACTORED) ---
// --- WEEKLY OFF DAYS LOGIC ---
function addOffDay(type) {
    if (offDayCounts[type] === undefined) offDayCounts[type] = 0;

    // Determine Max Limit based on Duration Mode
    let maxLimit = 5; // Default for Month
    if (profitDurationMode === 'week') {
        if (type === 'weekday') maxLimit = 4; // Max 4 weekdays in a week (Assuming 1-2 days maybe working)
        else maxLimit = 1; // Max 1 Fri/Sat/Sun in a week
    } else if (profitDurationMode === 'day') {
        maxLimit = 1;
    }

    // Increment or Cycle
    if (offDayCounts[type] < maxLimit) {
        offDayCounts[type]++;
    } else {
        offDayCounts[type] = 0; // Cycle back to 0
    }
    updateOffDaysUI();
    calculateProfit();
}

function resetOffDays() {
    offDayCounts = { weekday: 0, friday: 0, saturday: 0, sunday: 0 };
    updateOffDaysUI();
    calculateProfit();
}

function updateOffDaysUI() {
    // Update Counts and Bars
    ['weekday', 'friday', 'saturday', 'sunday'].forEach(type => {
        const count = offDayCounts[type];

        let typeKey = type.charAt(0).toUpperCase() + type.slice(1);

        // Count
        const countEl = document.getElementById(`count${typeKey}`);
        if (countEl) countEl.innerText = count;

        // Bar (Visual Fill e.g. 1=20%, 5=100%)
        const barEl = document.getElementById(`bar${typeKey}`);
        if (barEl) barEl.style.width = `${Math.min(100, count * 20)}%`;
    });

    // Update total label sum
    const total = Object.values(offDayCounts).reduce((a, b) => a + b, 0);
    const label = document.getElementById('offDaysTotalLabel');
    if (label) label.innerText = `${total} Gün`;
}


function calculateProfit() {
    if (activeProfitSubView === 'expense') {
        const gross = parseFloat(document.getElementById('manualTurnoverInput').value) || 0;

        const VAT_RATE = 0.20;
        const grossExVat = gross / (1 + VAT_RATE);
        const outputVat = gross - grossExVat;

        // Dynamic Expenses Calculation (KDV DAHIL tutarlardan)
        let totalExpenses = 0;
        let totalInputVat = 0;
        customExpenses.forEach(exp => {
            totalExpenses += exp.total;      // KDV Dahil tutar
            totalInputVat += exp.vat;        // KDV tutarı (indirilebilir)
        });

        let vatPayable = outputVat - totalInputVat;
        if (vatPayable < 0) vatPayable = 0;

        const net = gross - totalExpenses - vatPayable;

        document.getElementById('resGross').innerText = gross.toLocaleString('tr-TR');
        document.getElementById('resExpenses').innerText = totalExpenses.toLocaleString('tr-TR');
        document.getElementById('resVatDeductions').innerText = totalInputVat.toLocaleString('tr-TR');
        document.getElementById('resVat').innerText = vatPayable.toLocaleString('tr-TR');
        document.getElementById('resNet').innerText = net.toLocaleString('tr-TR');

        renderExpenseList();
    } else if (activeProfitSubView === 'average') {
        // EXISTING LOGIC for Packet Input


        const s = parseFloat(document.getElementById('single').value) || 0;
        const m = parseFloat(document.getElementById('multi').value) || 0;
        const a = parseFloat(document.getElementById('avm').value) || 0;
        const n = parseFloat(document.getElementById('night').value) || 0;

        const inputK = document.getElementById('avgKmProfit');
        // Fix: Read settings from localStorage to avoid ReferenceError
        let savedAvgKm = 3.5;
        try {
            const saved = localStorage.getItem('userSettings');
            if (saved) savedAvgKm = JSON.parse(saved).avgKm || 3.5;
        } catch (e) {
            console.error('Error reading settings', e);
        }

        const avgKm = inputK ? (parseFloat(inputK.value) || 0) : savedAvgKm;

        const kmRate = getKmRate(avgKm);
        const kmInfoEl = document.getElementById('profitKmInfo');
        if (kmInfoEl) {
            if (avgKm > 0) {
                kmInfoEl.style.display = 'block';
                document.getElementById('profitKmRate').innerText = `${kmRate} TL/km`;
            } else kmInfoEl.style.display = 'none';
        }

        const totalPackets = s + m;
        const kmIncome = totalPackets * avgKm * kmRate;
        const baseIncome = (s * prices.single) + (m * prices.multi);

        const extraIncome = (a * prices.avm) + (n * prices.night) + kmIncome;
        const fixedDailyIncome = baseIncome + extraIncome;

        const currentBonus = getDailyBonus(totalPackets, dailyBonusTiers, activeDayMode).current;
        const totalDailyDisplayed = fixedDailyIncome + currentBonus;

        document.getElementById('dispDailyMoney').innerText = totalDailyDisplayed.toLocaleString('tr-TR');
        document.getElementById('dispTotalPackets').innerText = totalPackets;
        document.getElementById('bonusAmount').innerText = currentBonus.toLocaleString('tr-TR');

        // SMART CALCULATION: Iterative Day-by-Day from Today
        // Logic: Start from today, iterate for 'workDays' count consecutively (no breaks).

        let totalGrossPeriod = 0;
        let currentDate = new Date(); // Start from today
        let daysToSimulate = 0;

        if (profitDurationMode === 'month') daysToSimulate = 30; // Calendar Month
        else if (profitDurationMode === 'week') daysToSimulate = 7; // Calendar Week
        else daysToSimulate = 1;

        let actualWorkDays = 0;

        // Create a copy of counts to modify during simulation
        let tempCounts = { ...offDayCounts };

        for (let i = 0; i < daysToSimulate; i++) {
            // Determine day index
            const dayIdx = currentDate.getDay();

            let mode = 'weekday';
            if (dayIdx === 5) mode = 'friday';
            else if (dayIdx === 6) mode = 'saturday';
            else if (dayIdx === 0) mode = 'sunday';

            // CHECK OFF DAY (If user has quota for this day type)
            if (tempCounts[mode] > 0) {
                // Skip income calculation (Active Off Day)
                tempCounts[mode]--;
            } else {
                // Working Day
                actualWorkDays++;

                // Calculate bonus for this specific day
                const bonus = getDailyBonus(totalPackets, dailyBonusTiers, mode).current;

                // Daily Total = Fixed (Base + Extra + Km) + Bonus
                totalGrossPeriod += (fixedDailyIncome + bonus);
            }

            // Move to next day (ALWAYS)
            currentDate.setDate(currentDate.getDate() + 1);
        }

        document.getElementById('avgTotalGross').innerText = totalGrossPeriod.toLocaleString('tr-TR');

        // Update Actual Work Days Display
        if (document.getElementById('calculatedWorkDays')) {
            document.getElementById('calculatedWorkDays').innerText = actualWorkDays;
        }

        // Update info text
        const todayStr = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
        const infoEl = document.getElementById('calculatedWorkDaysInfo');
        if (infoEl) {
            infoEl.innerHTML = `<span class="text-indigo-400 font-bold">${todayStr}</span>'den itibaren <span class="text-gray-400">${daysToSimulate} Gün</span> (<span class="text-white font-bold">${actualWorkDays} İş Günü</span>)`;
        }

        // Bonus Bar Logic (remains based on CURRENT day for visual feedback)
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
    }
}


// --- HIZ / PERFORMANS (GÜNCELLENMİŞ) ---
function loadPacketCounter() {
    const saved = localStorage.getItem('kurye_packet_counter');
    if (saved) packetCounter = JSON.parse(saved);
    else packetCounter = { single: 0, multi: 0, avm: 0 };
    if (packetCounter.avm === undefined) packetCounter.avm = 0;
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
    packetCounter = { single: 0, multi: 0, avm: 0 };
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
    if (document.getElementById('counterAvm')) document.getElementById('counterAvm').textContent = packetCounter.avm || 0;
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
    const kmRate = getKmRate(avgKm);
    const earnKm = totalPackets * avgKm * kmRate;
    const earnS = singleCount * prices.single;
    const earnM = multiCount * prices.multi;
    const avmCount = packetCounter.avm || 0;
    const earnAvm = avmCount * prices.avm; // 10 TL usually
    const bonusData = getDailyBonus(totalPackets, dailyBonusTiers, activeDayMode);
    const earnBonus = bonusData.current;
    const totalEarn = earnS + earnM + earnKm + earnBonus + earnAvm;
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
    if (document.getElementById('avmCountDisplay')) document.getElementById('avmCountDisplay').innerText = avmCount;
    document.getElementById('earnSingle').innerText = earnS + " ₺";
    document.getElementById('earnMulti').innerText = earnM + " ₺";
    if (document.getElementById('earnAvm')) document.getElementById('earnAvm').innerText = earnAvm + " ₺";
    document.getElementById('kmUnitPriceDisp').innerText = kmRate + " TL/Km";
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
    // Load dynamic expense list from localStorage
    const list = localStorage.getItem('kurye_custom_expenses');
    if (list) customExpenses = JSON.parse(list);
    else customExpenses = [];

    renderExpenseList();
}
function saveExpenses() {
    // Save dynamic expense list to localStorage
    localStorage.setItem('kurye_custom_expenses', JSON.stringify(customExpenses));
}

// --- DYNAMIC EXPENSE LIST FUNCTIONS ---
function addExpenseItem() {
    const name = document.getElementById('expName').value || "Gider";
    const amount = parseFloat(document.getElementById('expAmount').value) || 0;
    const rate = parseFloat(document.getElementById('expVatRate').value) || 0;

    if (amount === 0) return;

    // KDV DAHIL tutar verildiğinde, KDV'yi ayıklamak için
    // KDV Tutarı = (Toplam Tutar * KDV Oranı) / (100 + KDV Oranı)
    const vat = (amount * rate) / (100 + rate);
    const base = amount - vat;

    customExpenses.push({
        id: Date.now(),
        name: name,
        base: base,
        rate: rate,
        vat: vat,
        total: amount
    });

    document.getElementById('expName').value = '';
    document.getElementById('expAmount').value = '';

    saveExpenses();
    calculateProfit();
}

function deleteExpenseItem(id) {
    customExpenses = customExpenses.filter(item => item.id !== id);
    saveExpenses();
    calculateProfit();
}

function renderExpenseList() {
    const container = document.getElementById('expenseListContainer');
    if (!container) return;
    container.innerHTML = '';

    customExpenses.forEach(item => {
        container.innerHTML += `
            <div class="flex items-center justify-between bg-slate-800/40 p-2.5 rounded-xl border border-white/5 mb-2 hover:bg-slate-800/60 transition-all group">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="text-xs font-bold text-white">${item.name}</span>
                        <span class="text-[9px] px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full font-bold">%${item.rate} KDV</span>
                    </div>
                    <div class="text-[10px] text-gray-500">
                        Taban: ${item.base.toLocaleString('tr-TR')} ₺ + KDV: ${item.vat.toLocaleString('tr-TR')} ₺
                    </div>
                </div>
                <div class="text-right flex items-center gap-3">
                    <div class="text-xs font-black text-white">${item.total.toLocaleString('tr-TR')} ₺</div>
                    <button onclick="deleteExpenseItem(${item.id})" class="text-gray-600 group-hover:text-red-400 transition-colors p-1.5">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    });
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
        metadata: { 
            app: "Kurye Pro", 
            version: "V46", 
            date: new Date().toISOString() 
        },
        data: {
            calendar: JSON.parse(localStorage.getItem('kurye_calendar') || '{}'),
            financial: JSON.parse(localStorage.getItem('kurye_financial') || '{}'),
            accumulated: JSON.parse(localStorage.getItem('kurye_accumulated_payments') || '{}'),
            history: JSON.parse(localStorage.getItem('kurye_transaction_history') || '[]'),
            garage: JSON.parse(localStorage.getItem('kurye_garage') || '{}'),
            repeat: JSON.parse(localStorage.getItem('kurye_repeat') || '[]'),
            custom_expenses: JSON.parse(localStorage.getItem('kurye_custom_expenses') || '[]'),
            prices: JSON.parse(localStorage.getItem('kurye_prices') || '{}')
        }
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; 
    a.download = `kuryepro_yedek_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    showVisualSuccess("BAŞARILI", "Yedek dosyası indirildi. İndirilenler klasörüne bakınız.");
}

async function restoreData(event) {
    const file = event.target ? event.target.files[0] : event;
    if (!file) return;
    const confirmed = await window.customConfirm('Cihazdaki tüm kayıtlar silinecek ve yedekteki veriler yüklenecek. Onaylıyor musunuz?');
    if (!confirmed) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const wrap = JSON.parse(e.target.result);
            const data = wrap.data || wrap; // Handle old format too

            if (data.calendar) localStorage.setItem('kurye_calendar', JSON.stringify(data.calendar));
            if (data.financial) localStorage.setItem('kurye_financial', JSON.stringify(data.financial));
            if (data.accumulated) localStorage.setItem('kurye_accumulated_payments', JSON.stringify(data.accumulated));
            if (data.history) localStorage.setItem('kurye_transaction_history', JSON.stringify(data.history));
            if (data.garage) localStorage.setItem('kurye_garage', JSON.stringify(data.garage));
            if (data.repeat) localStorage.setItem('kurye_repeat', JSON.stringify(data.repeat));
            if (data.custom_expenses) localStorage.setItem('kurye_custom_expenses', JSON.stringify(data.custom_expenses));
            if (data.prices) localStorage.setItem('kurye_prices', JSON.stringify(data.prices));
            
            showVisualSuccess("HAZIR", "Veriler başarıyla yüklendi!");
            setTimeout(() => window.location.reload(), 1500);
        } catch (err) { alert("Dosya okunamadı veya hatalı: " + err.message); }
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
    // document.getElementById('perfStartTime').value = ''; // KEEPS START TIME PERSISTENT
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


function toggleSettings() { document.getElementById('settingsModal').classList.toggle('hidden'); }
function scrollToResults() { document.getElementById('finalResultCard').scrollIntoView({ behavior: 'smooth' }); }

function switchTab(id, btn) {
    document.querySelectorAll('.tab-content').forEach(e => e.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white', 'shadow-lg'));
    btn.classList.add('active', 'bg-indigo-600', 'text-white', 'shadow-lg');
    btn.classList.remove('text-gray-400');


}

function clearPacketInputs() { document.getElementById('single').value = ''; document.getElementById('multi').value = ''; calculateProfit(); }
function clearTransactionHistory() { transactionHistory = []; localStorage.removeItem('kurye_transaction_history'); renderTransactionHistory(); }
function resetPriceDefaults() { if (confirm("Varsayılan fiyatlara dönülsün mü?")) { prices = { single: 110, multi: 40, avm: 10, night: 20 }; savePriceSettings(); loadPrices(); } }

// Placeholder external links
function posTetikle() { console.log('POS'); }

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

// --- NEW: SPEED MENU PAYMENT ADDITION ---
async function addPerfToPayment(selectId) {
    const netStr = document.getElementById('totalNetEarning').innerText.replace('₺', '').replace(/\./g, '').replace(',', '.').trim();
    const netVal = parseFloat(netStr);

    if (isNaN(netVal) || netVal <= 0) {
        showVisualSuccess("Hata", "Net kazanç hesaplanamadı veya 0.");
        return;
    }

    const dateStr = document.getElementById(selectId).value;
    const targetDate = new Date(dateStr);

    const confirmed = await showCustomConfirm(`₺${netVal.toLocaleString('tr-TR')} tutarındaki HIZ MENÜSÜ net kazancı ${targetDate.toLocaleDateString('tr-TR')} ödemesine eklensin mi?`, "Ödeme Ekle");
    if (!confirmed) return;

    if (!accumulatedPayments[dateStr]) accumulatedPayments[dateStr] = 0;
    accumulatedPayments[dateStr] += netVal;

    transactionHistory.unshift({
        date: new Date().toLocaleDateString('tr-TR'),
        type: 'income',
        amount: netVal,
        description: 'Hız Menüsü Kazancı'
    });
    if (transactionHistory.length > 5) transactionHistory.pop();

    localStorage.setItem('kurye_accumulated_payments', JSON.stringify(accumulatedPayments));
    localStorage.setItem('kurye_transaction_history', JSON.stringify(transactionHistory));

    showVisualSuccess("Başarılı", "Hız kazancı ödeme gününe eklendi.");
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

    // --- YETKİ VE LİMİT CHECK ---
    try {
        let firebaseLib;
        try { firebaseLib = await import('../lib/firebase.js'); } catch (e) { console.error(e); }

        if (firebaseLib && firebaseLib.checkUserStatus) {
            const uid = localStorage.getItem('firebase_uid');
            if (!uid) {
                resultsDiv.innerHTML = `<div class="p-3 text-red-500 text-sm text-center font-bold"><i class="fa-solid fa-lock mb-2"></i><br>GİRİŞ YAPILMADI</div>`;
                resultsDiv.classList.remove('hidden');
                return;
            }
            const status = await firebaseLib.checkUserStatus(uid);
            if (!status.allowed) {
                resultsDiv.innerHTML = `<div class="p-3 text-red-500 text-sm text-center font-bold"><i class="fa-solid fa-lock mb-2"></i><br>ERİŞİM ENGELLENDİ</div>`;
                resultsDiv.classList.remove('hidden');
                return;
            }
            const u = status.data;
            if (u.role !== 'admin' && (!u.allowedRegions || Object.keys(u.allowedRegions).length === 0)) {
                resultsDiv.innerHTML = `<div class="p-3 text-red-500 text-sm text-center font-bold">
                                            <i class="fa-solid fa-lock mb-2"></i><br>
                                            BÖLGE YETKİNİZ YOK<br>
                                            <span class="text-xs text-gray-400 font-normal">Yöneticinizden bölge atanmasını isteyin.</span>
                                         </div>`;
                resultsDiv.classList.remove('hidden');
                return;
            }
        }

        if (firebaseLib && firebaseLib.hasRemainingLimit) {
            const status = await firebaseLib.hasRemainingLimit();
            if (!status.allowed) {
                const reasonTitle = status.reason || "SORGU LİMİTİ DOLDU";
                resultsDiv.innerHTML = `<div class="p-3 text-red-500 text-sm text-center font-bold">
                                            <i class="fa-solid fa-lock mb-2"></i><br>
                                            ${reasonTitle}<br>
                                            <span class="text-xs text-gray-400 font-normal">Sonra tekrar deneyin.</span>
                                         </div>`;
                resultsDiv.classList.remove('hidden');
                return;
            }
        }
    } catch (err) { console.error("Limit check fail", err); }
    // -------------------

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

async function selectQuickResult(result) {
    // --- INCREMENT LIMIT ONLY ON SELECTION ---
    try {
        const firebaseLib = await import('../lib/firebase.js');
        if (firebaseLib && firebaseLib.checkUserStatus) {
            const uid = localStorage.getItem('firebase_uid');
            const status = await firebaseLib.checkUserStatus(uid);
            if (!status.allowed) return;
            const u = status.data;
            if (u.role !== 'admin' && (!u.allowedRegions || Object.keys(u.allowedRegions).length === 0)) {
                showVisualSuccess("Hata", "Bölge yetkiniz yok.");
                return;
            }
        }
        if (firebaseLib && firebaseLib.incrementLimitUsage) {
            const success = await firebaseLib.incrementLimitUsage();
            if (!success) {
                showVisualSuccess("Hata", "Limit doldu, işlem yapılamaz.");
                document.getElementById('quickSearchResults').classList.add('hidden');
                return;
            }
        }
    } catch (e) { console.warn("Increment failed", e); }
    // -----------------------------------------

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

// --- AUTH & SECURITY ---
// --- AUTH & SECURITY ---
// (Import moved to top)

// Global Login Fonksiyonu
window.attemptLogin = async function (options = {}) {
    const btn = document.getElementById('btnLoginBtn');
    const isAuto = options?.auto === true;

    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Google ile Bağlanılıyor...';
    btn.disabled = true;

    const result = await startGoogleLogin(options);

    if (result.type === 'redirect' || result.type === 'external_browser') {
        btn.innerHTML = '<i class="fa-solid fa-external-link-alt mr-2"></i> Tarayıcıda Giriş Yap';
        btn.disabled = false;

        // Harici tarayıcıda giriş yapıldıktan sonra uygulamaya dön mesajı
        const infoText = document.getElementById('deviceInfoText');
        if (infoText) infoText.innerText = "Tarayıcıda giriş yaptıktan sonra uygulamayı yeniden açın.";
        return;
    }

    if (result.success) {
        document.getElementById('loginOverlay').classList.add('hidden');
        showVisualSuccess("Giriş Başarılı", `Hoşgeldin, ${result.user.displayName}`);
    } else {
        if (!isAuto && result.error && !result.error.includes('auth/popup-blocked')) {
            alert("Giriş Başarısız: " + result.error);
        }
        btn.innerHTML = '<i class="fa-brands fa-google mr-2"></i> GOOGLE İLE GİRİŞ YAP';
        btn.disabled = false;
    }
}

window.logoutUserApp = async function() {
    try {
        const firebaseLib = await import('../lib/firebase.js');
        if (firebaseLib && firebaseLib.logoutUser) {
            await firebaseLib.logoutUser();
            window.location.reload();
        }
    } catch (e) { console.error(e); }
};

// Uygulama Başlangıcında Kontrol
export async function checkAppAuth() {
    const infoText = document.getElementById('deviceInfoText');
    if (infoText) infoText.innerText = "Yükleniyor...";

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('mode') === 'login') {
        if (typeof window.attemptLogin === 'function') {
            window.attemptLogin({ auto: true });
        } else {
            startGoogleLogin({ auto: true }).catch(console.error);
        }
        return;
    }

    const status = await checkAccess();

    const overlay = document.getElementById('loginOverlay');

    if (status.status === 'authorized') {
        // GİRİŞ VAR -> Overlay'i Kaldır
        if (overlay) {
            overlay.classList.add('transition-opacity', 'duration-500', 'opacity-0');
            setTimeout(() => {
                overlay.classList.add('hidden');
                overlay.style.opacity = '1';
            }, 500);
        }
    } else {
        // GİRİŞ YOK -> Overlay Kalsın
        if (infoText) infoText.innerText = "Güvenli Giriş v4.2";

        if (status.status === 'banned') {
            document.getElementById('loginTitle').innerText = "HESAP YASAKLANDI";
            document.getElementById('loginTitle').classList.add('text-red-500');
            document.getElementById('btnLoginBtn').style.display = 'none';
            if (infoText) infoText.innerText = "Yönetici ile iletişime geçin.";
        }
    }
}

// --- END SECURE HANDLER ---

async function toggleMapModal() {
    const modal = document.getElementById('mapModal');
    if (!modal) return;

    const isHidden = modal.classList.contains('hidden');
    if (isHidden) {
        modal.classList.remove('hidden');
        modal.classList.add('animate-modal-in');
        await ensureAddressData();
        if (document.getElementById('mapIlce')?.options.length <= 1) {
            initMapModal();
        }
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('animate-modal-in');

        // SECURITY CLEANUP: RAM temizliği
        console.log("🔒 Güvenlik: Adres verisi RAM'den silindi.");
        addressData = null;

        // Inputları sıfırla
        const ilceEl = document.getElementById('mapIlce');
        if (ilceEl) ilceEl.innerHTML = '<option value="">Önce İlçe Seçiniz</option>';
        document.getElementById('mapMahalle').innerHTML = '<option value="">Önce İlçe Seçin</option>';
        document.getElementById('mapSokak').innerHTML = '<option value="">Önce Mahalle Seçin</option>';
        document.getElementById('mapKapi').innerHTML = '<option value="">Önce Sokak Seçin</option>';

        // Harita varsa kaldır (bellek sızıntısını önle)
        if (internalMap) {
            internalMap.remove();
            internalMap = null;
        }
    }
}


// --- AKILLI İLÇE ÇÖZÜCÜ (Smarter Normalization) ---
function trNormalize(str) {
    if (!str) return "";
    return str.toString()
        .replace(/i/g, 'İ').replace(/ı/g, 'I')
        .replace(/ğ/g, 'Ğ').replace(/ü/g, 'Ü').replace(/ş/g, 'Ş').replace(/ö/g, 'Ö').replace(/ç/g, 'Ç')
        .toUpperCase().trim();
}

const MAH_ILCE_MAP_RAW = {"İSTİKLAL": "KARATAY", "KALENDERHANE": "KARATAY", "KARAASLAN": "KARATAY", "KARADONA": "KARATAY", "KARAKAYA": "KARATAY", "KATRANCI": "KARATAY", "KEÇECİLER": "KARATAY", "KIZÖREN": "KARATAY", "KÖSEALİ": "KARATAY", "KUMKÖPRÜ": "KARATAY", "MENGENE": "KARATAY", "NAKİPOĞLU": "KARATAY", "OBRUK": "KARATAY", "ORTAKONAK": "KARATAY", "OVAKAVAĞI": "KARATAY", "SAKYATAN": "KARATAY", "SARAÇOĞLU": "KARATAY", "SARIYAKUP": "KARATAY", "ŞATIR": "KARATAY", "SEDİRLER": "KARATAY", "SELİMSULTAN": "KARATAY", "ŞEMSİTEBRİZİ": "KARATAY", "SULTAN MESUD": "KARATAY", "SÜRÜÇ": "KARATAY", "TATLICAK": "KARATAY", "ULUBATLIHASAN": "KARATAY", "YAĞLIBAYAT": "KARATAY", "YARMA": "KARATAY", "YAVŞANKUYU": "KARATAY", "YEDİLER": "KARATAY", "YENİCE": "KARATAY", "YENİKENT": "KARATAY", "ZİNCİRLİ": "KARATAY", "ALAKOVA": "MERAM", "ALAVARDI": "MERAM", "ALİ ULVİ KURUCU": "MERAM", "ALPASLAN": "MERAM", "AŞKAN": "MERAM", "ATEŞBAZ VELİ": "MERAM", "AYANBEY": "MERAM", "AYDOĞDU": "MERAM", "AYMANAS": "MERAM", "BAHÇEŞEHİR": "MERAM", "BAYAT": "MERAM", "BORUKTOLU": "MERAM", "BOTSA": "MERAM", "BOYALI": "MERAM", "ÇARIKLAR": "MERAM", "ÇAYBAŞI": "MERAM", "ÇAYIRBAĞI": "MERAM", "ÇOMAKLAR": "MERAM", "ÇOMAKLI": "MERAM", "ÇUKURÇİMEN": "MERAM", "DERE": "MERAM", "DURUNDAY": "MERAM", "ERENKAYA": "MERAM", "EVLİYATEKKE": "MERAM", "GÖDENE": "MERAM", "HADİMİ": "MERAM", "HARMANCIK": "MERAM", "HASANŞEYH": "MERAM", "HATIP": "MERAM", "HATUNSARAY": "MERAM", "HAVZAN": "MERAM", "İKİPINAR": "MERAM", "İNLİCE": "MERAM", "KARAAĞAÇ": "MERAM", "KARADİĞİN": "MERAM", "KARADİĞİNDERESİ": "MERAM", "KARAHÜYÜK": "MERAM", "KAŞINHANI": "MERAM", "KAVAK": "MERAM", "KAYADİBİ": "MERAM", "KAYALI": "MERAM", "KAYIHÜYÜK": "MERAM", "KİLİSTRA": "MERAM", "KIZILÖREN": "MERAM", "KONEVİ": "MERAM", "KOVANAĞZI": "MERAM", "KÖYCEĞİZ": "MERAM", "KOZAĞAÇ": "MERAM", "KUMRALI": "MERAM", "LALEBAHÇE": "MERAM", "MELİKŞAH": "MERAM", "OSMAN GAZİ": "MERAM", "PAMUKCU": "MERAM", "PİREBİ": "MERAM", "SADIKLAR": "MERAM", "SAĞLIK": "MERAM", "SAHİBATA": "MERAM", "SARIKIZ": "MERAM", "SEFAKÖY": "MERAM", "ULUĞBEY": "MERAM", "ULUIRMAK": "MERAM", "UZUNHARMANLAR": "MERAM", "YAKA": "MERAM", "YATAĞAN": "MERAM", "YAYLAPINAR": "MERAM", "YENİBAHÇE": "MERAM", "YENİŞEHİR": "MERAM", "YEŞİLDERE": "MERAM", "YEŞİLTEKKE": "MERAM", "AKADEMİ": "SELÇUKLU", "AKINCILAR": "SELÇUKLU", "AKPINAR": "SELÇUKLU", "AKŞEMSETTİN": "SELÇUKLU", "ARDIÇLI": "SELÇUKLU", "AŞAĞIPINARBAŞI": "SELÇUKLU", "AYDINLIKEVLER": "SELÇUKLU", "BAĞRIKURT": "SELÇUKLU", "BAŞARAKAVAK": "SELÇUKLU", "BEDİR": "SELÇUKLU", "BEYHEKİM": "SELÇUKLU", "BİÇER": "SELÇUKLU", "BİLECİK": "SELÇUKLU", "BİNKONUTLAR": "SELÇUKLU", "BOSNA HERSEK": "SELÇUKLU", "BUHARA": "SELÇUKLU", "BÜYÜKKAYACIK": "SELÇUKLU", "ÇALDERE": "SELÇUKLU", "ÇALTI": "SELÇUKLU", "ÇANDIR": "SELÇUKLU", "CUMHURİYET": "SELÇUKLU", "DAĞDERE": "SELÇUKLU", "DOKUZ": "SELÇUKLU", "DUMLUPINAR": "SELÇUKLU", "EĞRİBAYAT": "SELÇUKLU", "ERENKÖY": "SELÇUKLU", "ESENLER": "SELÇUKLU", "FATİH": "SELÇUKLU", "FERHUNİYE": "SELÇUKLU", "FERİTPAŞA": "SELÇUKLU", "GÜVENÇ": "SELÇUKLU", "HACIKAYMAK": "SELÇUKLU", "HANAYBAŞI": "SELÇUKLU", "HOCACİHAN": "SELÇUKLU", "HOROZLUHAN": "SELÇUKLU", "HÜSAMETTİN ÇELEBİ": "SELÇUKLU", "İHSANİYE": "SELÇUKLU", "IŞIKLAR": "SELÇUKLU", "KALEKÖY": "SELÇUKLU", "KARAÖMERLER": "SELÇUKLU", "KERVAN": "SELÇUKLU", "KILINÇARSLAN": "SELÇUKLU", "KINIK": "SELÇUKLU", "KIZILCAKUYU": "SELÇUKLU", "KOSOVA": "SELÇUKLU", "KÜÇÜKMUHSİNE": "SELÇUKLU", "MALAZGİRT": "SELÇUKLU", "MEHMET AKİF": "SELÇUKLU", "MEYDANKÖY": "SELÇUKLU", "MUSALLA BAĞLARI": "SELÇUKLU", "NİŞANTAŞ": "SELÇUKLU", "PARSANA": "SELÇUKLU", "SAKARYA": "SELÇUKLU", "SALAHATTİN": "SELÇUKLU", "SANCAK": "SELÇUKLU", "SARAYKÖY": "SELÇUKLU", "SARICALAR": "SELÇUKLU", "ŞEKER": "SELÇUKLU", "SELAHADDİNİ EYYUBİ": "SELÇUKLU", "SELÇUK": "SELÇUKLU", "ŞEYH ŞAMİL": "SELÇUKLU", "SİLLE": "SELÇUKLU", "SİLLE AK": "SELÇUKLU", "SIZMA": "SELÇUKLU", "SULUTAS": "SELÇUKLU", "TATKÖY": "SELÇUKLU", "TEPEKENT": "SELÇUKLU", "TÖMEK": "SELÇUKLU", "ULUMUHSİNE": "SELÇUKLU", "YAZIBELEN": "SELÇUKLU", "YAZIR": "SELÇUKLU", "YUKARIPINARBAŞI": "SELÇUKLU", "AZİZİYE": "KARATAY", "BAKIRTOLU": "KARATAY", "BAŞAK": "KARATAY", "BAŞGÖTÜREN": "KARATAY", "BEŞAĞIL": "KARATAY", "BÜYÜKBURNAK": "KARATAY", "ÇATALHÜYÜK": "KARATAY", "ÇENGİLTİ": "KARATAY", "ÇİMENLİK": "KARATAY", "DİVANLAR": "KARATAY", "EMİRGAZİ": "KARATAY", "ERENLER": "KARATAY", "ERLER": "KARATAY", "ESENTEPE": "KARATAY", "FETİH": "KARATAY", "FEVZİÇAKMAK": "KARATAY", "GAZİOSMANPAŞA": "KARATAY", "GÖÇÜ": "KARATAY", "HACIVEYİSZADE": "KARATAY", "HAMZAOĞLU": "KARATAY", "HAYIROĞLU": "KARATAY", "İPEKLER": "KARATAY", "İŞGALAMAN": "KARATAY", "İSMİL": "KARATAY", "ACIDORT": "KARATAY", "AĞSAKLI": "KARATAY", "AKABE": "KARATAY", "AKBAŞ": "KARATAY", "AKÖRENKIŞLA": "KARATAY", "ARAPLAR": "KARATAY"};
const MAH_ILCE_MAP = {};
// Pre-normalize keys
for(let k in MAH_ILCE_MAP_RAW) { MAH_ILCE_MAP[trNormalize(k)] = MAH_ILCE_MAP_RAW[k]; }

function initMapModal() {
    if (!addressData) return;
    const ilceSelect = document.getElementById('mapIlce');
    if (!ilceSelect) return;
    if (ilceSelect.options.length > 1) return; // Already loaded

    // İlçeleri topla (mahalle.ilce alanından veya MAH_ILCE_MAP'ten)
    const ilceSet = new Set();
    Object.values(addressData).forEach(m => {
        let ilce = m.ilce;
        if (!ilce) {
            const mName = trNormalize(m.adi);
            ilce = MAH_ILCE_MAP[mName] || 'Genel';
        }
        ilceSet.add(ilce);
    });

    const ilceList = [...ilceSet].sort((a, b) => a.localeCompare(b, 'tr'));
    ilceSelect.innerHTML = '<option value="">İlçe Seçiniz...</option>';
    ilceList.forEach(ilce => {
        const opt = document.createElement('option');
        opt.value = ilce;
        opt.textContent = ilce;
        ilceSelect.appendChild(opt);
    });

    // Önceki ilçe seçimini geri yükle
    const savedIlce = localStorage.getItem('kurye_last_ilce');
    if (savedIlce && ilceSet.has(savedIlce)) {
        ilceSelect.value = savedIlce;
        window.loadMahallesByIlce();
    }
}

window.loadMahallesByIlce = function() {
    const ilceSelect = document.getElementById('mapIlce');
    const mahalleSelect = document.getElementById('mapMahalle');
    const streetSelect = document.getElementById('mapSokak');
    const doorSelect = document.getElementById('mapKapi');
    const selectedIlce = ilceSelect.value;

    // İlçeyi kaydet
    if (selectedIlce) localStorage.setItem('kurye_last_ilce', selectedIlce);

    // Alt alanları sıfırla
    streetSelect.innerHTML = '<option value="">Önce Mahalle Seçin</option>';
    streetSelect.disabled = true;
    doorSelect.innerHTML = '<option value="">Önce Sokak Seçin</option>';
    doorSelect.disabled = true;
    const mapContainer = document.getElementById('internalMapContainer');
    if (mapContainer) mapContainer.classList.add('hidden');

    if (!selectedIlce || !addressData) {
        mahalleSelect.innerHTML = '<option value="">Önce İlçe Seçin</option>';
        return;
    }

    // Seçilen ilçenin mahallelerini filtrele
    const filtered = Object.entries(addressData)
        .filter(([id, m]) => {
            let ilce = m.ilce;
            if (!ilce) {
                const mName = trNormalize(m.adi);
                ilce = MAH_ILCE_MAP[mName] || 'Genel';
            }
            return ilce === selectedIlce;
        })
        .map(([id, m]) => ({ id, adi: m.adi }))
        .sort((a, b) => a.adi.localeCompare(b.adi, 'tr'));

    mahalleSelect.innerHTML = '<option value="">Mahalle Seçiniz...</option>';
    filtered.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m.id;
        opt.textContent = m.adi;
        mahalleSelect.appendChild(opt);
    });

    // Önceki mahalle seçimini geri yükle (aynı ilçedeyse)
    const savedMahalle = localStorage.getItem('kurye_last_mahalle');
    if (savedMahalle && addressData[savedMahalle]) {
         let mahIlce = addressData[savedMahalle].ilce;
         if (!mahIlce) {
             const mName = trNormalize(addressData[savedMahalle].adi);
             mahIlce = MAH_ILCE_MAP[mName] || 'Genel';
         }
         if (mahIlce === selectedIlce) {
            mahalleSelect.value = savedMahalle;
            loadStreets();
         }
    }
};

function loadStreets() {
    const mahalleId = document.getElementById('mapMahalle').value;
    const streetSelect = document.getElementById('mapSokak');
    const doorSelect = document.getElementById('mapKapi');

    if (mahalleId) {
        localStorage.setItem('kurye_last_mahalle', mahalleId);
    }

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

    // --- YETKİ KONTROLÜ ---
    (async () => {
        try {
            const firebaseLib = await import('../lib/firebase.js');
            const uid = localStorage.getItem('firebase_uid');
            const status = await firebaseLib.checkUserStatus(uid);
            if (!status.allowed) { alert("Erişim Reddedildi"); return; }
            const u = status.data;
            if (u.role !== 'admin' && (!u.allowedRegions || Object.keys(u.allowedRegions).length === 0)) {
                alert("BÖLGE YETKİNİZ YOK\nLütfen yöneticinizden bölge tanımlatın.");
                return;
            }

            // Limit Kontrolü
            const limitCheck = await firebaseLib.hasRemainingLimit(uid);
            if (!limitCheck.allowed) { alert(limitCheck.reason || "Arama limitiniz doldu."); return; }

            // Limit Artır
            await firebaseLib.incrementLimitUsage();

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

        } catch (err) { console.error(err); }
    })();
}

function openExternalMap() {
    if (selectedLocation) {
        window.open(`https://www.google.com/maps/search/?api=1&query=${selectedLocation.lat},${selectedLocation.lon}`, '_blank');
    } else {
        alert('Önce konum seçmelisiniz.');
    }
}

// --- SECURE REMOTE DATA HANDLER ---
async function ensureAddressData() {
    if (addressData && Object.keys(addressData).length > 0) return true;

    try {
        const statusEl = document.getElementById('updateStatus');
        // Önce hızlıca yerel/gömülü veriyi yükle (Kullanıcı beklemesin)
        if (!addressData) {
            const securityLib = await import('../lib/security.js');
            addressData = await securityLib.fetchLocalData();
            if (addressData) {
                console.log("⚡ Offline veri anında hazır.");
                initMapModal(); // Dropdown'ları anında doldur
            }
        }

        // Sonra arka planda Firebase'den en günceli çek (Erişim kontrolü dahil)
        const firebaseData = await fetchSecureData();
        if (firebaseData) {
             addressData = firebaseData;
             console.log("🔓 Güncel veri Firebase'den alındı.");
             // Eğer modal açıksa listeleri sessizce tazele
             const ilceEl = document.getElementById('mapIlce');
             if (ilceEl && ilceEl.options.length <= 1) initMapModal(); 
        }

        if (statusEl) statusEl.style.display = 'none';
        return true;

    } catch (err) {
        console.error('Erişim Hatası:', err);
        alert(`⛔ ERİŞİM ENGELLENDİ\n\nSebep: ${err.message}\n\nEğer giriş yapmadıysanız uygulamayı yeniden başlatıp giriş kodunu giriniz.`);

        const statusEl = document.getElementById('updateStatus');
        if (statusEl) statusEl.style.display = 'none';
        return false;
    }
}
// --- END SECURE HANDLER ---


// --- DİNAMİK ARAYÜZ ENJEKTÖRÜ V2 ---
function injectDynamicExpenseUI() {
    console.log("🛠 Enjektör Çalışıyor...");
    const target = document.getElementById("manualTurnoverInput");
    if (!target) {
        console.error("❌ Hedef element (manualTurnoverInput) bulunamadı!");
        return;
    }

    // Ciro girişinin içinde bulunduğu ana kapsayıcıyı bul (div.px-5.pb-6)
    const turnoverContainer = target.closest(".px-5.pb-6");
    if (!turnoverContainer) return;

    // Hemen arkasından gelen "Gider & KDV Yönetimi" kartını bul
    const oldExpenseCard = turnoverContainer.querySelector(".card.p-5.space-y-4.mt-4");
    if (oldExpenseCard) {
        console.log("✅ Eski kart bulundu, temizleniyor...");
        oldExpenseCard.innerHTML = `
            <div class="flex justify-between items-center border-b border-white/5 pb-3">
                <h2 class="text-xs font-bold text-gray-400 uppercase flex items-center gap-2">
                    <i class="fa-solid fa-wallet text-indigo-500"></i> GİDER & KDV YÖNETİMİ
                </h2>
            </div>
            
            <div class="bg-indigo-500/5 rounded-2xl p-4 border border-indigo-500/10">
                <h3 class="text-[10px] text-indigo-400 font-bold uppercase mb-4 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span> GİDER EKLE (% KDV DAHİL)
                </h3>
                <div class="space-y-3">
                    <input type="text" id="expName" class="w-full input-dark p-3 rounded-xl text-xs font-semibold" placeholder="Gider Adı (Örn: Ofis Malzemesi)">
                    <div class="grid grid-cols-2 gap-3">
                        <div class="relative">
                            <input type="number" id="expAmount" class="w-full input-dark p-3 rounded-xl font-bold text-lg" placeholder="Tutar">
                            <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 font-bold">₺</span>
                        </div>
                        <div class="relative">
                            <select id="expVatRate" class="w-full input-dark p-3 rounded-xl font-bold appearance-none">
                                <option value="20">%20 KDV</option>
                                <option value="10">%10 KDV</option>
                                <option value="1">%1 KDV</option>
                                <option value="18">%18 KDV</option>
                                <option value="0">%0 KDV</option>
                            </select>
                            <i class="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-indigo-400 pointer-events-none"></i>
                        </div>
                    </div>
                    <button onclick="window.addExpenseItem()" class="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-black rounded-xl transition-all shadow-lg shadow-indigo-500/20 uppercase">LİSTEYE EKLE</button>
                </div>
                <div id="expenseListContainer" class="mt-4 space-y-2 max-h-[250px] overflow-y-auto pr-1"></div>
            </div>

            <div class="bg-emerald-500/5 rounded-2xl p-4 border border-emerald-500/10">
                <label class="text-[9px] text-gray-400 font-bold block mb-1.5 ml-1 uppercase tracking-widest">Toplam Yakıt (Tutar)</label>
                <input type="number" id="dailyFuel" class="w-full input-dark p-3 rounded-xl font-bold" placeholder="0" onkeyup="window.calculateProfit()">
            </div>
        `;
        window.renderExpenseList();
    }
}

// --- REALTIME BAN LISTENER START ---
(async () => {
    try {
        const firebaseLib = await import('../lib/firebase.js');
        if (firebaseLib && firebaseLib.startBanListener) {
            firebaseLib.startBanListener(() => {
                alert("⛔ HESABINIZ YASAKLANDI!\nUygulama kapatılıyor.");
                window.location.reload(); 
            });
        }
    } catch (e) { console.warn("Ban listener init failed", e); }
})();

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(injectDynamicExpenseUI, 800));
} else {
    setTimeout(injectDynamicExpenseUI, 800);
}

