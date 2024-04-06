export function getCurrentDate() {
    // Create a new Date object
    var currentDate = new Date();
    
    // Array of days of the week
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Array of months
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Get day, month, date, and year
    var dayOfWeek = daysOfWeek[currentDate.getDay()];
    var month = months[currentDate.getMonth()];
    var date = currentDate.getDate();
    var year = currentDate.getFullYear();
    
    // Construct the string to display
    var dateTimeString = dayOfWeek + ', ' + month + ' ' + date + ', ' + year;
    
    return dateTimeString;
};


