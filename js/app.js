function calculateAge() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();

    // Check if dob is a valid date
    if (isNaN(dob.getTime())) {
        document.getElementById("result").innerHTML = "Invalid date format. Please enter a valid date in the format yyyy-mm-dd.";
        return;
    }

    let ageInMilliseconds = today - dob.getTime();
    let ageInYears = ageInMilliseconds / 31556952000; // 1000ms * 60s * 60m * 24h * 365.25d = 31556952000ms

    // Check if ageInYears is NaN or less than 0 (if dob is in the future)
    if (isNaN(ageInYears) || ageInYears < 0) {
        document.getElementById("result").innerHTML = "Invalid date. Please enter a date that is not in the future.";
        return;
    }

    let age = Math.floor(ageInYears);
    document.getElementById("result").innerHTML = "Your age is " + age + " years.";
}
