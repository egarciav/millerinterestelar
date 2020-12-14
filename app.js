function millerTime() {
    
    let mainTime = new Date();

    let years = mainTime.getFullYear() - 2014;
    let months = mainTime.getMonth() + 1;
    let days = mainTime.getDate();
    
    let hours = mainTime.getHours();
    let minutes = mainTime.getMinutes();
    let seconds = mainTime.getSeconds();

    //Add zero to the values
    hours = ('0' + hours).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);
    
    // Arrival date and difference between both dates
    let arrivalDate = new Date('10/26/2014')
    let differenteTime = mainTime.getTime() - arrivalDate.getTime();
    let differenceDays = Math.round(differenteTime / (1000 * 3600 * 24));
    
    //Turning days (Earth) into seconds from Miller
    let daysIntoSeconds = differenceDays / 1.25  //Each 1.25 seconds at Miller is 1 day at Earth
    let hoursMiller = Math.floor(daysIntoSeconds / 60 /60);
    let minutesMiller = Math.floor(daysIntoSeconds / 60) - (hoursMiller * 60);
    let secondsMiller = daysIntoSeconds % 60;

    //Show results
    document.getElementById('earth').innerHTML = 
        hours + " HORAS " + "<br />" + minutes + " MINUTOS " + "<br />" + seconds + " SEGUNDOS ";

    document.getElementById('record').innerHTML = 
        years + " AÑOS " + months + " MESES " + days + " DÍAS ";
    
    document.getElementById('miller').innerHTML = 
        hoursMiller + ' HORAS' +  "<br />" + minutesMiller + ' MINUTOS' + "<br />" + secondsMiller.toFixed(2) + ' SEGUNDOS';
    
    
    let t = setTimeout(millerTime, 1000);



    
    
} 

