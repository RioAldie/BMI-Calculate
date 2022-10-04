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
    return (output.innerHTML = null);
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
  let bmiDisplay = `${bmiInt}.${diff}`;
  let result = `<p>Your BMI<span>${bmiDisplay}</span> which mean you are category<span>${category}</span></p>`;
  //print bmidisplay
  //getCategoryBMI
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

// umus BMI untuk satuan KG dan CM adalah Berat Badan/(Tinggi Badan/100)^2
// Aplikasi harus menampilkan status BMI sesuai dengan standar berikut:
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5 – 24.9
// Overweight = 25 – 29.9
// Obesity = BMI of 30 or greater
// Expected Result
// Berat Badan 60 KG
// Tinggi Badan 167 CM BMI = 60 / (167/100)^2 BMI = 60 / (2.8) BMI = 21.5 BMI Categories: Normal Weight
