// Задание 1

function getArrayParams(arr) {
  let min, max, sum, avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = Number((sum/arr.length).toFixed(2));
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };
  }
  return { min: min, max: max, avg: avg };
}


// Задание 2

function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function makeWork(arrOfArr, func) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arrOfArr.length; i++) {
    sum = (func(arrOfArr[i]));
     if (sum > max) {
      max = sum;
     }
  };
  return max;
}


// Задание 3
function worker2(arr) {
  let min, max, diff;
  min = arr[0];
  max = arr[0];
  diff = 0;
  for(i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    };
    diff = Math.abs(max - min);
  }
  return diff;
}
