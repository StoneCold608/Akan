function nameCalculator()
{
    d = document.getElementById('date').value;
    date = d.split('-')
    // alert (date)
    year = (date[0])
    // alert (year)
    month =parseInt(date[1])
    //alert (month)
    day =parseInt(date[2])
    //alert (date) 
    cc = parseInt(year.slice (0,2))
    // alert (cc)
    yy = parseInt(year.slice(2,4))
    // alert (yy)
    daysOfTheWeek = Math.floor ( ( ((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day ) % 7)
    // alert (daysOfTheWeek)
    gender = document.getElementById('gender'). value;
    // alert(gender)

    maleNames= ['Kwasi', 'Kwadwo','Kwabena','Kwaku','Yaw', 'Kofi','Kwame']
    femaleNames=['Akosua','Adwowa','Abenaa','Akua','Yaa','Afua','Ama']
    dayy = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    if(gender === 'male'){
        alert ('You were born on ' + dayy[daysOfTheWeek] + ' and your akan name is '+ maleNames[daysOfTheWeek])
    }

    else{
        alert ('You were born on ' + dayy[daysOfTheWeek] + ' and your akan name is '+ femaleNames[daysOfTheWeek])
    }
}
