import data from './data.json' assert{type: 'json'};

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
//other variables
let highest_val = 0,
percentage_val = 0,
amount_percentage = 0,
balance = 0;

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

//----------json data on the charts

for(let val = 0; val<data.length; val++){
    if(val === 0){  //gets the highest value to know where the highest chart is
       highest_val = data[val].amount;
    }else if(data[val].amount > highest_val){
        highest_val = data[val].amount;
        percentage_val = highest_val * 1.2;
    }
    balance += data[val].amount;    //I thought there was a way to dinamically change the balance and total this month but there's not enough data
}

for(let val of data){   //put the height % to the charts and the values to the text
    amount_percentage = val.amount / percentage_val;
    let percentage = `${Math.floor(amount_percentage * 100)}%`;
    let rounded_amount = val.amount.toFixed(2);

    if(val.day === 'mon'){
        $monday_chart.style.height = percentage;
        $monday_number.innerHTML = rounded_amount;
    }else if(val.day === 'tue'){
        $tuesday_chart.style.height = percentage;
        $tuesday_number.innerHTML = rounded_amount;
    }else if(val.day === 'wed'){
        $wednesday_chart.style.height = percentage;
        $wednesday_number.innerHTML = rounded_amount;
    }else if(val.day === 'thu'){
        $thursday_chart.style.height = percentage;
        $thursday_number.innerHTML = rounded_amount;
    }else if(val.day === 'fri'){
        $friday_chart.style.height = percentage;
        $friday_number.innerHTML = rounded_amount;
    }else if(val.day === 'sat'){
        $saturday_chart.style.height = percentage;
        $saturday_number.innerHTML = rounded_amount;
    }else if(val.day === 'sun'){
        $sunday_chart.style.height = percentage;
        $sunday_number.innerHTML = rounded_amount;
    }
}

