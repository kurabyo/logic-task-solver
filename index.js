const allGenins = [1, 2, 3, 4, 5, 6, 7, 8]

function permutator(inputArr) {
    let results = [];
  
    function permute(arr, memo) {
      var cur, memo = memo || [];
  
      for (let i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        permute(arr.slice(), memo.concat(cur));
        arr.splice(i, 0, cur[0]);
      }
  
      return results;
    }
  
    return permute(inputArr);
  }

const geninsPermutations = permutator(allGenins)

const numberOfCases = geninsPermutations.length


const numbersOfElementOnRight = (arr) => {
    let num = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === 8 || arr[i][1] === 8 || arr[i][2] === 8 || arr[i][3] === 8) {
            if (arr[i][0] === 7 || arr[i][1] === 7 || arr[i][2] === 7 || arr[i][3] === 7) num++
        }
    }

    return num * 2
}

console.log(numberOfCases + ` - загальна кількість всіх можливих унікальних випадків`)
console.log(numbersOfElementOnRight(geninsPermutations) + ' - кількість випадків коли 8 та 7 на одній із сторін разом' )
console.log(100 - (numbersOfElementOnRight(geninsPermutations)/numberOfCases * 100) + ' - ймовірність того, що 7 отримає друге місце')
