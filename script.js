function calculateDamage() {
    // Retrieve and parse input values
    const attackerLevel = parseInt(document.getElementById("attackerLevel").value) || 0;
    const attackerPower = parseFloat(document.getElementById("attackerPower").value) || 0;
    const spellPower = parseFloat(document.getElementById("spellPower").value) || 0;
    const targetLevel = parseInt(document.getElementById("targetLevel").value) || 0;
    const targetDefense = parseFloat(document.getElementById("targetDefense").value) || 0;
    const modifiers = parseFloat(document.getElementById("modifiers").value) || 1;

    console.log("Input values:", {
        attackerLevel,
        attackerPower,
        spellPower,
        targetLevel,
        targetDefense,
        modifiers
    });

    // Calculate damage
    let damage = ((attackerLevel * 3) + 100) * (1 + (attackerPower / 3000)) * ((spellPower - 1) x 0.11) * (1 - ((targetLevel * 2) + (targetDefense / 3000)) * modifiers);
    damage = Math.max(0, damage); // Prevent negative damage

    console.log("Calculated Damage:", damage);

    // Update the result on the page
    document.getElementById("result").innerText = `Damage: ${damage.toFixed(2)}`;
}
