const d = document;
//general dom elements
const $charts = d.querySelectorAll('.chart-charts');
//charts
const $monday_chart = d.getElementById('monday'),
$tuesday_chart = d.getElementById('tuesday'),
$wednesday_chart = d.getElementById('wednesday'),
$thursday_chart = d.getElementById('thursday'),
$friday_chart = d.getElementById('friday'),
$saturday_chart = d.getElementById('saturday'),
$sunday_chart = d.getElementById('sunday');
//numbers
const $monday_number = d.getElementById('monday-number'),
$tuesday_number = d.getElementById('tuesday-number'),
$wednesday_number = d.getElementById('wednesday-number'),
$thursday_number = d.getElementById('thursday-number'),
$friday_number = d.getElementById('friday-number'),
$saturday_number = d.getElementById('saturday-number'),
$sunday_number = d.getElementById('sunday-number');

//----------functions

function chartDayOn(input){ //show number when hover
    input === $monday_chart ? $monday_number.classList.remove('vis-hidden')
    :input === $tuesday_chart ? $tuesday_number.classList.remove('vis-hidden')
    :input === $wednesday_chart ? $wednesday_number.classList.remove('vis-hidden')
    :input === $thursday_chart ? $thursday_number.classList.remove('vis-hidden')
    :input === $friday_chart ? $friday_number.classList.remove('vis-hidden')
    :input === $saturday_chart ? $saturday_number.classList.remove('vis-hidden')
    :input === $sunday_chart ? $sunday_number.classList.remove('vis-hidden') : null;
}

function chartDayOff(input){    //hide number when leave mouse
    input === $monday_chart ? $monday_number.classList.add('vis-hidden')
    :input === $tuesday_chart ? $tuesday_number.classList.add('vis-hidden')
    :input === $wednesday_chart ? $wednesday_number.classList.add('vis-hidden')
    :input === $thursday_chart ? $thursday_number.classList.add('vis-hidden')
    :input === $friday_chart ? $friday_number.classList.add('vis-hidden')
    :input === $saturday_chart ? $saturday_number.classList.add('vis-hidden')
    :input === $sunday_chart ? $sunday_number.classList.add('vis-hidden') : null;
}

//----------hover logic

for(let ins of $charts){
    ins.addEventListener('mouseover', e =>{
        chartDayOn(ins);
    })

    ins.addEventListener('mouseleave', e =>{
        chartDayOff(ins);
    })
}
