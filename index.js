var input_num = document.querySelector('.input_num');
var input_copy_1_var = document.querySelector('.input_copy_1');
var input_copy_2_var = document.querySelector('.input_copy_2');
var input_copy_3_var = document.querySelector('.input_copy_3');
var input_copy_4_var = document.querySelector('.input_copy_4');
var input_copy_5_var = document.querySelector('.input_copy_5');
var input_copy_6_var = document.querySelector('.input_copy_6');
var result_var_1 = document.querySelector('.result_1');
var result_var_2 = document.querySelector('.result_2');
var result_var_3 = document.querySelector('.result_3');
var result_var_4 = document.querySelector('.result_4');
var result_var_5 = document.querySelector('.result_5');
var result_var_6 = document.querySelector('.result_6');


function Meters_to_feet() {
    let meter_value_1 = input_num.value;
    //1m =  3.28084f
    let feet_value_1 = meter_value_1 * 3.28084;
    return feet_value_1.toFixed(2);
}

function feet_to_meters() {
    let feet_value_2 = input_num.value;
    // 1f  = 0.3048m
    let meter_value_2 = feet_value_2 * 0.3048;
    return meter_value_2.toFixed(2);
}

function liters_to_gallons() {
    // 1L = 0.26417G
    let liter_value_1 = input_num.value;
    let gallon_value_1 = liter_value_1 * 0.26417;
    return gallon_value_1.toFixed(2);
}

function glalon_to_liters() {
    // 1G = 3.7854L
    let gallon_value_2 = input_num.value;
    let liter_value_2 = gallon_value_2 * 3.7854;
    return liter_value_2.toFixed(2);
}

function kilo_to_pounds() {
    // 1kg = 2.205P
    let kilo_value_1 = input_num.value;
    let pound_value_1 = kilo_value_1 * 2.205;
    return pound_value_1.toFixed(2);
}

function pounds_to_kilos() {
    // 1p = 0.4536Kg
    let pound_value_2 = input_num.value;
    let kilo_value_2 = pound_value_2 * 0.4536;
    return kilo_value_2.toFixed(2);
}

function display_input() {
    console.log(input_num.value)
    input_copy_1_var.textContent = input_num.value;
    input_copy_2_var.textContent = input_num.value;
    input_copy_3_var.textContent = input_num.value;
    input_copy_4_var.textContent = input_num.value;
    input_copy_5_var.textContent = input_num.value;
    input_copy_6_var.textContent = input_num.value;

}

function display_result() {
    result_var_1.textContent = Meters_to_feet();
    result_var_2.textContent = feet_to_meters();
    result_var_3.textContent = liters_to_gallons();
    result_var_4.textContent = glalon_to_liters();
    result_var_5.textContent = kilo_to_pounds();
    result_var_6.textContent = pounds_to_kilos();

}

input_num.addEventListener('input', () => {
    display_input();
    display_result();
});