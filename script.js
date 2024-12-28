function calculateDamage() {
    const attackerLevel = parseInt(document.getElementById("attackerLevel").value) || 0;
    const attackerPower = parseFloat(document.getElementById("attackerPower").value) || 0;
    const spellPower = parseFloat(document.getElementById("spellPower").value) || 0;
    const targetLevel = parseInt(document.getElementById("targetLevel").value) || 0;
    const targetDefense = parseFloat(document.getElementById("targetDefense").value) || 0;
    const modifiers = parseFloat(document.getElementById("modifiers").value) || 1;

    // Formula adjustments
    const base = (attackerLevel * 3) + 100;
    const powerFactor = 1 + (attackerPower / 3000);
    const spellFactor = (spellPower - 1) * 0.11;
    const defenseFactor = ((targetLevel * 2) + (targetDefense / 3000)) * modifiers;

    let damage = base * powerFactor * spellFactor * (1 - defenseFactor);
    damage = Math.max(0, damage); // Prevent negative damage

    document.getElementById("result").innerText = `Damage: ${damage.toFixed(2)}`;
}

