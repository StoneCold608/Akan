function nameCalculator(){
    let d = document.getElementById('date').value;
    let date = d.split('-')
    // alert (date)
    let year = (date[0])
    // alert (year)
    let month =parseInt(date[1])
    //alert (month)
    let day =parseInt(date[2])
    //alert (date) 
    let cc = parseInt(year.slice (0,2))
    // alert (cc)
    let yy = parseInt(year.slice(2,4))
    // alert (yy)
    let daysOfTheWeek = Math.floor ( ( ((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + day ) % 7)
    // alert (daysOfTheWeek)
    let gender = document.getElementById('gender'). value;
    // alert(gender)

    let maleNames= ['Kwasi', 'Kwadwo','Kwabena','Kwaku','Yaw', 'Kofi','Kwame']
    let femaleNames=['Akosua','Adwowa','Abenaa','Akua','Yaa','Afua','Ama']
    let dayy = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    if(gender === 'male'){
        alert ('You were born on ' + dayy[daysOfTheWeek] + ' and your akan name is '+ maleNames[daysOfTheWeek])
    }

    else{
        alert ('You were born on ' + dayy[daysOfTheWeek] + ' and your akan name is '+ femaleNames[daysOfTheWeek])
    }
}
