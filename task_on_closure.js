/*
===== TASK =====
Create a function which returns a module with the following
accesssible functions: sum, substract, multiply, divide - that
will perform the operations over 2 values. One of the values should be
passed as a parameter to the module function, the other one should be a local variable.
*/

function moduleValue(val) {
    return {
        sum: addNum => val + addNum,
        subStract: subNum => val - subNum,
        multiply: multNum => val * multNum,
        divide: divNum => val / divNum,
    }
}

let interestingNumb = moduleValue(10);
console.log(interestingNumb.subStract(2));
console.log(interestingNumb.sum(2));
console.log(interestingNumb.multiply(2));
console.log(interestingNumb.divide(2));
