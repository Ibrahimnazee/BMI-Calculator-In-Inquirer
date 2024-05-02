#! /usr/bin/env node

import inquire from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright("\n \t  \t WELCOME TO BMI CACULATOR"));
console.log("=".repeat(60));

const questionBmi = await inquire.prompt([
    {
        name : "name",
        type : "string",
        message : "Enter Your name",
    },
    {
        name : "weight",
        type : "number",
        message : "Enter Your Weight(kg)",

    },
    {
        name : "height",
        type : "number",
        message : "Enter Your Height(m)",

    },
   
])

const calculatebmi = (weight: number, height: number):number =>weight / (height * height);
 const bmi = calculatebmi (questionBmi.weight, questionBmi.height );

 let bmi_category = '';
 if (bmi < 18.5 ){
    bmi_category = " underweight";
 }
 else if (bmi >= 18.5 && bmi <= 24.9){
    bmi_category = "Normal";
 }
 else if (bmi >= 24.9  && bmi <= 29.9){
    bmi_category = "Overweight";
 }
else {
    bmi_category = "Obesity";
}
 console.log(` Dear ${questionBmi.name} your bmi is ${bmi.toFixed(2)}`);
 console.log(`your bmi category is ${bmi_category}`)

