var array = [{
    rollno: 1,
    name: "Saad",
    Class: 12,
}, {
    rollno: 2,
    name: "hamdan",
    Class: 11,
}, student3 = {
    rollno: 3,
    name: "adan",
    Class: 9,
}, {
    rollno: 4,
    name: "adnan",
    Class: 10,
}, {
    rollno: 5,
    name: "isnan",
    Class: 8,
}, {
    rollno: 6,
    name: "adam",
    Class: 6,
}, {
    rollno: 7,
    name: "adzan",
    Class: 7,
}, {
    rollno: 8,
    name: "yazdan",
    Class: 13,
}, {
    rollno: 9,
    name: "ahmed",
    Class: 2,
}, {
    rollno: 10,
    name: "ahmed",
    Class: 3,
}


]




var student1 = {
    rollno: 1,
    name: "Saad",
    Class: 12,
}
var student2 = {
    rollno: 2,
    name: "Hamdan",
    Class: 11,
}
var student3 = {
    rollno: 3,
    name: "adan",
    Class: 9,
}
var student4 = {
    rollno: 4,
    name: "adnan",
    Class: 10,
}
var student5 = {
    rollno: 5,
    name: "isnan",
    Class: 8,
}
var student6 = {
    rollno: 6,
    name: "adam",
    Class: 6,
}
var student7 = {
    rollno: 7,
    name: "adzan",
    Class: 7,
}
var student8 = {
    rollno: 8,
    name: "yazdan",
    Class: 13,
}
var student9 = {
    rollno: 9,
    name: "ahmed",
    Class: 2,
}
var student10 = {
    rollno: 10,
    name: "ahmed",
    Class: 3,
}
var inp = document.getElementById('inp')
var pp =document.getElementById('pp')
var oo =document.getElementById('oo')
var ii =document.getElementById('ii')
function search() {
    for (i = 0; i < array.length; i++) {
        if (inp.value == array[i].rollno)
            // hue.innerhtml = array[i]
            pp.innerHTML=(array[i]).name
            oo.innerHTML=(array[i]).Class
            ii.innerHTML=(array[i]).rollno
    }
}