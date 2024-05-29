//1.1
function findMinLengthOfThreeWords(word1, word2, word3){
    const length1 = word1.length;
    const length2 = word2.length;
    const length3 = word3.length;
    let minLength;
 
    if (length1 <= length2 && length1 <= length3) {
        minLength = length1;
    } else if (length2 <= length1 && length2 <= length3) {
        minLength = length2;
    } else {
        minLength = length3;
    }
    //minLength = Math.min(length1, length2, length3);
    return minLength;
 }
 
 var output = findMinLengthOfThreeWords('a', 'be', 'see');
 console.log(output);
 
 //1.2
 function filterOddElements(arr) {
    const oddElements = [];
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddElements.push(arr[i]);
        }
    }
    //інший варіант
    /*
    for (let i = 0; i < arr.length; i++) {
         switch (arr[i] % 2) {
             case 0:
                 // Якщо число парне, переходимо до наступної ітерації циклу
                 continue;
             case 1:
             case -1:
                 // Якщо число непарне, додаємо його до масиву
                 oddElements.push(arr[i]);
                 break;
         }
     }
    */
    return oddElements;
 }
 
 var output = filterOddElements([1, 2, 3, 4, 5]);
 console.log(output);
 
 //1.3
 function getLengthOfShortestElement(arr){
    let shortestLength = arr[0].length;
    for (let i = 0; i < arr.length; i++){
       const currentLength = arr[i].length;
       if (currentLength < shortestLength) {
           shortestLength = currentLength;
       }
    }
    return shortestLength;
 }
 
 var output = getLengthOfShortestElement(["one", "two", "three"]);
 console.log(output);
 
 //1.4
 function joinArrayOfArrays(arr){
    return [].concat(...arr);
 }
 
 var output = joinArrayOfArrays([[1, 4], [true, false], ["x", "y"]]);
 console.log(output);
 
 //1.5
 function findSmallestNumberAmongMixedElements(arr){
    if (arr.length === 0){
       return 0;
    };
    let smallestNumber = Infinity;
 
    for(let i = 0; i < arr.length; i++){
       if(typeof arr[i] === 'number'){
          if(arr[i] < smallestNumber){
             smallestNumber = arr[i];
          }
       }
    }
 
    if(smallestNumber === Infinity){
       smallestNumber = 0;
    }
 
    return smallestNumber;
 }
 
 var output = findSmallestNumberAmongMixedElements([4, "lincoln", 9, "octopus"]);
 console.log(output);
 
 //1.6
 function computeSummationToN(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
       sum += i;
    }
    /*
    let i = 1;
    while (i <= n) {
       sum += i;
       i++;
    }
    */
    return sum;
 }
 var output = computeSummationToN(6);
 console.log(output);
 
 //1.7
 function convertScoreToGrade(score){
    if (score < 0 || score > 100) {
       return 'INVALID SCORE';
   } else if (score >= 90) {
       return 'A';
   } else if (score >= 80) {
       return 'B';
   } else if (score >= 70) {
       return 'C';
   } else if (score >= 60) {
       return 'D';
   } else if (score >= 50) {
       return 'E';
   } else {
       return 'F';
   }
 }
 var output = convertScoreToGrade(91);
 console.log(output);
 
 //1.8
 function getLongestOfThreeWords(word1, word2, word3) {
    const length1 = word1.length;
    const length2 = word2.length;
    const length3 = word3.length;
 
    if (length1 >= length2 && length1 >= length3) {
        return word1;
    } else if (length2 >= length1 && length2 >= length3) {
        return word2;
    } else {
        return word3;
    }
 }
 
 var output = getLongestOfThreeWords('these', 'three', 'words');
 console.log(output);
 
 //1.9
 function multiply (num1, num2){
    let result = 0;
    for(let i = 0; i < num2; i++){
       result += num1;
    }
    return result;
 }
 var output = multiply(4, 7);
 console.log(output);
 
 //1.10
 function computeSumBetween (num1, num2){
    let sum = 0;
    if (num2 < num1){return 0;};
    for(let i = num1; i <num2; i++){
       sum += i;
    }
    return sum;
 }
 
 var output = computeSumBetween(2, 5);
 console.log(output);