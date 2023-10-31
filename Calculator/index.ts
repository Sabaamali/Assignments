import inquirer from "inquirer";

const answers  : {
numberone: number
numbertwo: number
operator:string
} =await inquirer.prompt([
 {
    type:"number",
    name:"numberOne",
    message:"kindly enter your first no:",
 },
 {
    type:"number",
    name:"numbertwo",
    message:"kindly enter your second no:",
 },
 {
    type:"list",
    name:"operator",
    choices:["*", "+", "-", "/"],
    message:"Select Operator: "
 },
]);

const{numberone, numbertwo,operator} =answers
if(numberone && numbertwo && operator){
    let result:number=0;
    if(operator === "+"){
        result = numberone + numbertwo
    }else   if(operator === "-"){
        result = numberone - numbertwo

       }   if(operator === "/"){
            result = numberone / numbertwo 
           }    if(operator === "*"){
                result = numberone * numbertwo
            }

            console.log("Your result is : ,result");
        }  else {
            console.log("kindly invalid input ")
        }
        