function calculateAge() {
    let dob = new Date(document.getElementById("dob").value);
    let today = new Date();
    let ageInMilliseconds = today - dob.getTime();
    let ageInYears = ageInMilliseconds / 31556952000; // 1000ms * 60s * 60m * 24h * 365.25d = 31556952000ms
    let age = Math.floor(ageInYears);
    document.getElementById("result").innerHTML = "Your age is " + age + " years.";
}
