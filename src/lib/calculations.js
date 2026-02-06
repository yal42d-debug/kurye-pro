export function getDailyBonus(packetCount, tiers, activeDayMode) {
  let bonus = 0;
  let nextBonus = 0;
  let nextTarget = 0;
  for (let i = 0; i < tiers.length; i++) {
    const tier = tiers[i];
    if (packetCount >= tier.min) bonus = tier[activeDayMode];
    if (packetCount < tier.min && nextTarget === 0) {
      nextTarget = tier.min;
      nextBonus = tier[activeDayMode];
      break;
    }
  }
  return { current: bonus, nextTarget: nextTarget, nextValue: nextBonus };
}

export function getBonusForMode(packetCount, tiers, mode) {
  let bonus = 0;
  for (let i = 0; i < tiers.length; i++) {
    const tier = tiers[i];
    if (packetCount >= tier.min) bonus = tier[mode];
  }
  return bonus;
}

export function getKmPrice(dist) {
  if (!dist || dist === 0) return 0;
  if (dist <= 3) return 5;
  if (dist <= 5) return 6;
  if (dist <= 7) return 7;
  return 8;
}
