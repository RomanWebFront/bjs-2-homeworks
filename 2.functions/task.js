function getArrayParams(...arr) {
  let max = -Infinity;
  let min = Infinity;
  let sum = 0;
  for (const a of arr) {
    if (a > max) {
      max = a;
    }
    if (a < min) {
      min = a;
    }
    sum += a;
  }
  let avg = Math.round(sum / arr.length * 100) * 0.01;
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (const a of arr) {
    sum += a;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let max = -Infinity;
  let min = Infinity;
  for (const a of arr) {
    if (a > max) {
      max = a;
    }
    if (a < min) {
      min = a;
    }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (const a of arr) {
    if (a % 2 === 0) {
      sumEvenElement += a;
    } else {
      sumOddElement += a;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const a of arr)
    if (a % 2 === 0) {
      sumEvenElement += a;
      countEvenElement++;
    }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (const a of arrOfArr) {
    let sum = func(...a);
    if (sum > maxWorkerResult) {
      maxWorkerResult = sum;
    }
  }
  return maxWorkerResult;
}
