function calculateAge() {
    var day = document.getElementById('day').value;
    var month = document.getElementById('month').value;
    var year = document.getElementById('year').value;

    // Clear Any  Previous Errors
    ['errorDay', 'errorMonth', 'errorYear'].forEach(id => document.getElementById(id).innerHTML = '');
    ['day', 'month', 'year'].forEach(id => document.getElementById(id).style.border = '');
    ['dayLabel', 'monthLabel', 'yearLabel'].forEach(id => document.getElementById(id).style.color = '');
    

    let errors = []

    // Check if any field is empty
    if (!day) { 
        errors.push(["This fielsis required.","errorDay", "day", "dayLabel"]);
    }
    if (!month) {
        errors.push(["This field is required.","errorMonth", "month", 'monthLabel']);
    }
    if(!year) {
        errors.push(["This field is required.","errorYear", "year", 'yearLabel']);
    }

    if(errors.length > 0) {
        handleErrors(errors);
        return;
    }

    // Convert input values to numbers
    day = parseInt(day, 10);
    month = parseInt(month, 10);
    year = parseInt(year, 10);


    // Validate day and month ranges
    if (isNaN(day) || day < 1 || day > 31) {
        // alert("Error")
        errors.push(["Must be a valid day.","errorDay", "day", "dayLabel"]);
    }

    if (isNaN(month) || month < 1 || month > 12) {
        errors.push(["Must be a valid month.","errorMonth", "month", 'monthLabel']);
    }

    
    // Get the current date
    var currentDate = new Date();

    // Validate if the date is in the future
    if (year > parseInt(currentDate.getFullYear(), 10)) {
        errors.push(["Must be in the past.","errorYear", "year", 'yearLabel']);
    }

    if (errors.length > 0) {
        handleErrors(errors);
    return;
}

    // Create a Date object with the entered date of birth
    var dob = new Date(year, month - 1, day);


    // Validate if the date is valid (e.g., 31/04/1991)
    if (dob.getMonth() !== month - 1 || dob.getDate() !== day) {
        errors.push(['Must be a valid date.','errorDay','day','dayLabel']);
        errors.push(['','errorMonth','month','monthLabel']);
        errors.push(['','errorYear','year','yearLabel']);
        handleErrors(errors);
        return;
    }

    // Validate if the date is in the future
    if (dob > currentDate) {
        errors.push(['Must be in the past.','errorDay','day','dayLabel']);
        errors.push(['','errorMonth','month','monthLabel']);
        errors.push(['','errorYear','year','yearLabel']);
        handleErrors(errors);
        return;
    }



    // Calculate the difference in years, months, and days
    var ageInMilliseconds = currentDate - dob;
    var ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var ageInMonths = Math.floor((ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    var ageInDays = Math.floor((ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

    // Display the age in the UI
    document.getElementById('years').textContent = ageInYears;
    document.getElementById('months').textContent = ageInMonths;
    document.getElementById('days').textContent = ageInDays;

}


function handleErrors(errors) {
    errors.forEach((group, _index) => {
        let message = group[0];
        let containerId = group[1];
        let inputId = group[2];
        let labelId = group[3];

        var errorElement = document.getElementById(containerId);
        var errorParagraph = document.createElement('p');
        let inputElement = document.getElementById(inputId);
        let labelElement = document.getElementById(labelId);

        errorParagraph.textContent = message;
        errorElement.appendChild(errorParagraph);

        // Change the border color to red
        inputElement.style.border = "2px solid red";

        // Change the text color to red
        labelElement.style.color = "red";
    });
}


// Attach the calculateAge function to the button click event
document.querySelector('.circle-button').addEventListener('click', calculateAge);


// Attach the calculateAge function to the Enter key press event on input fields
document.getElementById('day').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});

document.getElementById('month').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});

document.getElementById('year').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});

