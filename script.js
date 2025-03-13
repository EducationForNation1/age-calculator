function calculateAge() {
    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dob) {
        result.innerHTML = "Please enter a valid date of birth!";
        result.style.color = "yellow";
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth();
    let ageDays = today.getDate() - dobDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    result.style.color = "white";
}
