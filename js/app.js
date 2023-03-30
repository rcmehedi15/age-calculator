const calculateAge = () => {
    const dobInput = document.getElementById("dob");
    const dob = new Date(dobInput.value);
    const today = new Date();
    
    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();
    
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths = (ageMonths + 12) % 12;
      ageDays = (ageDays + 31) % 31;
    } else {
      ageMonths = ageMonths % 12;
      ageDays = ageDays % 31;
    }
    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
  }
  
  const calculateBtn = document.getElementById("calculate-btn");
  calculateBtn.addEventListener("click", calculateAge);
  