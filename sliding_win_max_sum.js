
function maxSum(arr, len, winSize) {
    if (len < winSize) 
    { 
        return -1; 
    } 
  
    let maxSum = 0; 
    for(let i = 0; i < winSize; i++) 
    	maxSum += arr[i]; 
  
    let winSum = maxSum; 
    for (i = winSize; i < len; i++) 
    { 
        winSum += arr[i] - arr[i - winSize]; 
        maxSum = Math.max(maxSum, winSum); 
    } 
  
    return maxSum; 
}

function main() {
	let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]; 
    let winSize = 4; 
    let len = arr.length; 
    let out = maxSum(arr, len, winSize);
	console.log(out);
}

main();
