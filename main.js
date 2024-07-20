function sumOfDifferences(arr) {
    let total = 0
    arr.sort((a,b) => b-a)
    for (let i = 0 ; i < arr.length - 1 ; i++){
      total += arr[i] - arr[i + 1]
    }
    return total
  }