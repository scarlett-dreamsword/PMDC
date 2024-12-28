console.log("Script loaded successfully!");
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

    // Calculate individual components of the formula
    const base = (attackerLevel * 3) + 100;
    console.log("Base:", base);

    const powerFactor = 1 + (attackerPower / 3000);
    console.log("Power Factor:", powerFactor);

    const spellFactor = (spellPower - 1) * 0.11;
    console.log("Spell Factor:", spellFactor);

    const defenseFactor = ((targetLevel * 2) + (targetDefense / 3000)) * modifiers;
    console.log("Defense Factor:", defenseFactor);

    // Final damage calculation
    let damage = base * powerFactor * spellFactor * (1 - defenseFactor);
    damage = Math.max(0, damage); // Prevent negative damage

    console.log("Calculated Damage:", damage);

    // Update the result on the page
    document.getElementById("result").innerText = `Damage: ${damage.toFixed(2)}`;
}
