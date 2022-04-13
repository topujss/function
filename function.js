const show = (names, age) => {
  let state = '';

  if (age > 0 && age <= 4) {
    state = 'infant';
  } else if (age >= 5 && age <= 12) {
    state = 'children';
  } else if (age >= 13 && age <= 17) {
    state = 'teenager';
  } else if (age >= 18 && age <= 65) {
    state = 'adult';
  } else if (age > 66) {
    state = 'old';
  } else {
    alert(names + ' ,' + 'wrong input!');
  }

  return `Hi ${names}, your age is ${+age} and you are a ${state} person.`;
};

// 2.

const areaCal = (names, val1, val2 = null) => {
  let shape = '';
  let total = '';

  switch (names) {
    case 'r':
      shape = 'Rectangle';
      total = val1 * val2; // length * width
      break;
    case 's':
      shape = 'square';
      total = val1 * val1; // square * square
      break;
    case 't':
      shape = 'triangle';
      total = 0.5 * (val1 * val2); // 1/2 * (base * height)
  }

  return `The name of the area is ${shape} and the value of that ${shape} is ${total}`;
};

// 3.

/**
 * 100 > 91 = A ;
 * 90 > 81 = B ;
 * 80 > 71 = C;
 * 70 > 61 = D;
 */

const gpa = (marks) => {
  let gpa;

  if (marks > 0 && marks <= 60) {
    gpa = 'F';
  } else if (marks >= 61 && marks <= 70) {
    gpa = 'D';
  } else if (marks >= 71 && marks <= 80) {
    gpa = 'C';
  } else if (marks >= 81 && marks <= 90) {
    gpa = 'B';
  } else if (marks >= 91 && marks <= 100) {
    gpa = 'A';
  } else {
    console.error('Wrong input for Grade');
  }
  return gpa;
};

const grade = (marks) => {
  let grade;

  if (marks > 0 && marks <= 60) {
    grade = 0.0;
  } else if (marks >= 61 && marks <= 70) {
    grade = 2.0;
  } else if (marks >= 71 && marks <= 80) {
    grade = 3.0;
  } else if (marks >= 81 && marks <= 90) {
    grade = 4.0;
  } else if (marks >= 91 && marks <= 100) {
    grade = 5.0;
  } else {
    console.error('Wrong input for Grade');
  }
  return grade;
};

// 4.

const age = (names, bYear) => {
  let age = 2022 - bYear;

  return ` Your name is ${names} and your age is ${age} years old.`;
};

// 5.
const bmiCal = () => {
  let message;
  if (weight > 0.0 && weight <= 17.0) {
    message = 'lowerweight';
  } else if (weight >= 18 && weight <= 24) {
    message = 'normal';
  } else if (weight >= 25 && weight <= 29) {
    message = 'overweight';
  } else if (weight >= 30 && weight <= 39) {
    message = 'obese';
  } else if (weight > 40) {
    message = 'extreamly obese';
  }

  return ` Hi ${names} your age is ${age}, your height is ${height} and your weight is ${weight}. With this info you are ${message} category and your bmi is ${bmi}`;
};

// 6.

let currenCon = (currency, amount) => {
  let bdt;

  switch (currency) {
    case 'usd':
      bdt = amount * 88;
      break;
    case 'cad':
      bdt = amount * 68;
      break;
    case 'gbp':
      bdt = amount * 112;
      break;
    case 'euro':
      bdt = amount * 94;
      break;
    case 'inr':
      bdt = amount * 2;
      break;
    case 'aud':
      bdt = amount * 65;
      break;

    default:
      bdt = 'invalid';
      break;
  }

  return bdt;
}