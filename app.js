"use strict";


let user = {
    name:"jhon",
    years:30
};

let {name,years:age,isAdmin=false} = user;


console.log(name);
console.log(age);
console.log(isAdmin);



function topSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(let [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }