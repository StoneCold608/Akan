function name_calculator()
{
    d = document.getElementById('date').value;
    date = d.split('-')
    year = (date[0])
    month =parseInt(date[1])
    day =parseInt(date[2])
    cc = parseInt(year.slice (0,2))
    yy = parseInt(year.slice(2,4))
    daysOfTheWeek = Math.floor ( ( ((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day ) % 7)
    gender = document.getElementById('gender'). value;
    
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
