let left = document.getElementById("left");
let right = document.getElementById("right");
let leftCount = 0;
let rightCount = 0;

function leftOne(){
    leftCount += 1;
    left.innerText = leftCount;
    console.log("1")
}

function leftTwo(){
    leftCount += 2;
    console.log("2")
    left.innerText = leftCount;
}

function leftThree(){
    leftCount += 3;
    console.log("3")
    left.innerText = leftCount;
}

function rightOne() {
    rightCount += 1;
    console.log("1")
    right.textContent = rightCount;
    }

function rightTwo() {
    rightCount += 2;
    right.textContent = rightCount;
    console.log("2")
}

function rightThree() {
    rightCount += 3;
    right.textContent = rightCount;
    console.log("3")
}

function reset(){
    leftCount = 0;
    rightCount = 0;
    left.textContent = leftCount;
    right.textContent = rightCount;
    console.log("0")
}