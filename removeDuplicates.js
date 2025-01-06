var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  let resultado = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      resultado.push(nums[i - 1]);
    }
  }
  return resultado;
};

let list = [2, 34, 5, 3, 2, 43, 5, 43, 2, 3, 5, 6, 6, 6, 4, 34, 23, 12, 1, 1];
let resultado = removeDuplicates(list);

console.log(resultado);
