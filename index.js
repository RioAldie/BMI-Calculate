let weight = 0;
let height = 0;
let bmi = 0;
let category = '';
let output = document.querySelector('.output');
let form = document.querySelector('form');

let errMessage =
  '<p>Please Input your<span>Weight</span> and<span>Height</span></p>';

function getDataFromInput(name) {
  if (name === 'weight') {
    weight = document.getElementById(name).value;
  }
  if (name === 'height') {
    height = document.getElementById(name).value;
  }
}
function cleanOutput() {
  setTimeout(() => {
    form.reset();
    height = 0;
    weight = 0;
    return (output.innerHTML = '');
  }, 5000);
}
function handleCalculate() {
  //   bmi = weight / (height / 100) ** 2;
  if (height === 0 || weight === 0) {
    cleanOutput();
    return (output.innerHTML = errMessage);
  }
  let bmi1 = parseFloat(height / 100);
  let bmi2 = parseFloat(bmi1 ** 2);
  bmi = parseFloat(weight / bmi2);
  //cari kategori sesuai bmi float
  handleBMIcategories(bmi);
  //cari satu angka dibelakang koma
  let bmiInt = parseInt(bmi);
  let diff = bmi - bmiInt;
  diff = Math.round(diff * 10);
  if (diff === 10) {
    bmiInt = bmiInt + 1;
    diff = 0;
  }
  //tampilkan output dengan bmi display
  let bmiDisplay = `${bmiInt}.${diff}`;
  let result = `<p>Your BMI<span>${bmiDisplay}</span> which mean you are<span>${category}</span></p>`;
  cleanOutput();
  return (output.innerHTML = result);
}
function handleBMIcategories(bmi) {
  if (bmi < 18.5) {
    return (category = 'Underweight');
  }
  if (bmi <= 24.9) {
    return (category = 'Normal');
  }
  if (bmi <= 29.9) {
    return (category = 'overweight');
  }
  if (bmi >= 30) {
    return (category = 'obesitas');
  }
}
