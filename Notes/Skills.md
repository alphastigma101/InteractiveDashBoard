# Basic

### String manipulation
# JavaScript
```cpp
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    
    // Extract the AM/PM part
    const period = s.substring(s.length - 2);
    let hour = s.substring(0, 2);
    const rest = s.substring(2, s.length - 2);
    if (period === 'AM') {
        if (hour === '12') {
            hour = '00';
        }
    } 
    else {
        
        if (hour !== '12') {
            
            // Whole number, so the base is 10. The base for hour is 10 and you should add 12
            
            hour = String(parseInt(hour, 10) + 12);
        }
    }

    return hour + rest;
}```

* Study up on strings in mozilla.org

## Math Concepts

```Your code has a few issues. Let me explain and correct them.

### Problems:

1. **Sorting Method**: You're using `Array.prototype.sort` incorrectly. You should call `sort()` on the array instance (`arr.sort(...)`), not on the prototype.

2. **Sorting Numerically**: While your sorting function `(a, b) => a - b` is correct for numerical sorting, it's not being applied properly.

3. **Median Calculation**: Your median calculation is incorrect. For an array of length `n`:
   - If `n` is odd: median = middle element at index `(n-1)/2`
   - If `n` is even: median = average of two middle elements at indices `n/2 - 1` and `n/2`

### Corrected Code:

```javascript
function findMedian(arr) {
    // Sort the array numerically
    arr.sort((a, b) => a - b);
    
    const n = arr.length;
    const mid = Math.floor(n / 2);
    
    // If array length is odd, return middle element
    if (n % 2 === 1) {
        return arr[mid];
    }
    // If array length is even, return average of two middle elements
    else {
        return (arr[mid - 1] + arr[mid]) / 2;
    }
}
```

### Examples:
- `findMedian([1, 2, 3, 4, 5])` → Sorted: `[1, 2, 3, 4, 5]`, length = 5 (odd) → median = `arr[2]` = `3`
- `findMedian([1, 2, 3, 4])` → Sorted: `[1, 2, 3, 4]`, length = 4 (even) → median = `(arr[1] + arr[2]) / 2` = `(2 + 3) / 2` = `2.5`

### Key Improvements:
1. **Proper sorting**: `arr.sort((a, b) => a - b)` sorts the array numerically
2. **Correct median calculation**: Handles both even and odd length arrays
3. **Uses `Math.floor()`**: To get integer indices for array access

The function now correctly finds the median for any array of numbers.```

## Arrays
```/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    
    // Create frequency array with 100 zeros
    const frequency = new Array(100).fill(0);
    
    // Count occurrences of each number
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        frequency[num]++;
    }
    
    return frequency;
}```

## Matrixes 

```function diagonalDifference(arr) {
    let left = 0;
    let right = 0;
    const n = arr.length;
    
    for (let i = 0; i < n; i++) {
        
        left += arr[i][i];          // Left diagonal: row = column
        right += arr[i][n - 1 - i]; // Right diagonal: row + column = n-1
        
    }
    
    return Math.abs(left - right);
}```

```/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
    
    const n = matrix.length / 2;
    let total = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            
            // Get the 4 symmetric positions
            const topLeft = matrix[i][j];
            const topRight = matrix[i][2 * n - 1 - j];
            const bottomLeft = matrix[2 * n - 1 - i][j];
            const bottomRight = matrix[2 * n - 1 - i][2 * n - 1 - j];
            
            // Add the maximum of these 4 values
            total += Math.max(topLeft, topRight, bottomLeft, bottomRight);
        }
    }
    
    return total;
}```




