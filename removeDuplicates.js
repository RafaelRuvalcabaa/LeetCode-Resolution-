var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {

        // [4,3,2,8,2,9,5]
        // temp = 4
        // nums[j] = 4 = nums[4+ unaPosicion(3)]
        // nums j+1 [3] = temp (3)

        // [3,4,2,8,2,9,5]
        // temp = 4
        // nums[j] = 4 = nums[4+ unaPosicion(2)]
        // nums j+1 [2] = temp (2)
        // [3,2,4,8,2,9,5]

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


// Con funciones de JavaScript 


function burbleSort(arr) {
  // Primero ordenamos el arreglo
  let arregloOrdenado = arr.sort((a, b) => a - b);
  // Luego eliminamos los duplicados usando Set
  return [...new Set(arregloOrdenado)];
}
let arr = [3, 3, 5, 3, 1, 4, 6, 7, 8, 5, 3, 2, 1, 4, 5];
console.log(burbleSort(arr));  // [1, 2, 3, 4, 5, 6, 7, 8]
