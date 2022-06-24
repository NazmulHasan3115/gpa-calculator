
var CREDIT = 18;
var PER_COURSE = 3;
var PER_LAB = 1.5;


window.onload = (e) => {

    var form = document.querySelector("#main-form");

    form.addEventListener("submit", (e) => {

        // stop form from refreshing the page
        e.preventDefault();
        
        var course1 = parseFloat(form['course1'].value*PER_COURSE);
        var course2 = parseFloat(form['course2'].value*PER_COURSE);
        var course3 = parseFloat(form['course3'].value*PER_COURSE);
        var course4 = parseFloat(form['course4'].value*PER_COURSE);
        var course5 = parseFloat(form['course5'].value*PER_COURSE);
        var lab1 = parseFloat(form['lab1'].value*PER_LAB);
        var lab2 = parseFloat(form['lab2'].value*PER_LAB);
        var result = (parseFloat(course1)+parseFloat(course2)+parseFloat(course3)+parseFloat(course4)+parseFloat(course5)+parseFloat(lab1)+parseFloat(lab2))/parseFloat(CREDIT);
        result= result.toFixed(2);

        document.querySelector("#final-gpa").innerHTML = result;
    });


}