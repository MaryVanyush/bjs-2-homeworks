function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every((e, i) => e === arr2[i]) && arr1.length === arr2.length;

  return result; 
}

function advancedFilter(arr) {
  let resultArr = arr.filter(number => number % 3 === 0 && number > 0).map(item => item*10);
  console.log(resultArr);
  return resultArr; 
}
