var numArray = [];
function addNum() {
  var number = parseInt(document.getElementById("numInput").value);
  numArray.push(number);
  document.getElementById("numValue").innerHTML = numArray.join(", ");
}

function ex1() {
  var sum =0;
  for (var i = 0; i < numArray.length; i++) {
    if(numArray[i] %2===0) 
      sum += numArray[i];
  }
  document.getElementById("result").innerHTML = "tổng các số chẵn: " +sum;
  document.getElementById("result").className = "info";
}

function ex2() {
  var countPlusNum = 0;
  for ( var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      countPlusNum++;
    }
  }
  document.getElementById("result2").innerHTML =
    "Có: " + countPlusNum + " số dương trong mảng";
  document.getElementById("result2").className = "info";
}

function ex3() {
  let min = numArray[0];
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] < min) {
      min = numArray[i];
    }
  }
  document.getElementById("result3").innerHTML = "Số nhỏ nhất là: " + min;
  document.getElementById("result3").className = "info";
}


function ex4() {
  var minPlus = "";
  var count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > 0) {
      count++;
      break;
    }
  }
  if (count != 0) {
    minPlus = numArray[i];
    for (i = i + 1; i < numArray.length; i++) {
      if (numArray[i] > 0 && numArray[i] < minPlus) {
        minPlus = numArray[i];
      }
    }
    document.getElementById("result4").innerHTML =
      "Số dương nhỏ nhất: " + minPlus;
    document.getElementById("result4").className = "info";
  } else {
    document.getElementById("result4").innerHTML =
      "Không có số dương trong mảng!";
    document.getElementById("result4").className = "info";
  }
}

function ex5() {
  var numCheck = -1;
  var count = 0;
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 === 0) {
      count++;
      break;
    }
  }
  if (count != 0) {
    numCheck = numArray[i];
    for (i = i + 1; i < numArray.length; i++) {
      if (numArray[i] % 2 === 0) {
        numCheck = numArray[i];
      }
    }
    document.getElementById("result5").innerHTML = "Số chẵn cuối: " + numCheck;
    document.getElementById("result5").className = "info";
  } else {
    document.getElementById("result5").innerHTML = +numCheck;
    document.getElementById("result5").className = "info";
  }
}

function ex7() {
  var up = "";
  let upArr = [];
  for (i = 0; i < numArray.length - 1; i++) {
    for (j = i + 1; j < numArray.length; j++) {
      if (numArray[i] > numArray[j]) {
        up = numArray[i];
        numArray[i] = numArray[j];
        numArray[j] = up;
      }
    }
  }
  for (i = 0; i < numArray.length; i++) {
    upArr.push(numArray[i]);
  }
  document.getElementById("result7").innerHTML = "Mảng tăng dần: " + upArr;
  document.getElementById("result7").className = "info";
}

function checkPrime(a) {
  let flag = true;
  if (a < 2) {
    flag = false;
  } else if (a === 2) {
    return flag = true;
  } else if (a % 2 === 0) {
    flag = false;
  } else {
    for (var i = 3; i < a - 1; i += 2) {
      if (a % i == 0) {
        flag = false;
      }
    }
    return flag;
  }
}

function ex8() {
  var arrPrime = [];
  for (let i = 0; i < numArray.length; i++) {
    if (checkPrime(numArray[i]) === true) {
      arrPrime.push(numArray[i]);
    }
  }
  document.getElementById("result8").innerHTML =
    "Số nguyên tố đầu tiên: " + arrPrime[0];
  document.getElementById("result8").className = "info";
}


function ex9() {
  let positiveNum = [];
  let negativeNum = [];
  for (i = 0; i < numArray.length; i++) {
    if (numArray[i] % 2 < 0) {
      negativeNum.push(numArray[i]);
    } else {
      positiveNum.push(numArray[i]);
    }
  }

  if (negativeNum.length < positiveNum.length) {
    document.getElementById("result9").innerHTML = "Số dương nhiều hơn số âm!";
    document.getElementById("result9").className = "info";
  } else if (negativeNum.length > positiveNum.length) {
    document.getElementById("result9").innerHTML = "Số âm nhiều hơn số dương!";
    document.getElementById("result9").className = "info";
  } else {
    document.getElementById("result9").innerHTML =
      "Số âm và số dương bằng nhau!";
    document.getElementById("result9").className = "info";
  }
}

