//Rotate the String 
//Positive argument represents Right Rotate and Negative represents Left Rotate
function rotate(str, numOfRotation){
    let rotations = numOfRotation % str.length;
    let splitIndex;
    if(rotations > 0)
        splitIndex = str.length - rotations;
    else
        splitIndex = -rotations;
    return str.substr(splitIndex, str.length) + str.substr(0, splitIndex);
}


//Check if the given number is prime
function checkIfPrime(inputNumber = 0){
    if(inputNumber == 2)
        return true;
    if(inputNumber < 2 || inputNumber % 2 == 0)
        return false;
    else{
        let counter = Math.floor(Math.sqrt(inputNumber));
        while(counter > 2){
            if(inputNumber % counter == 0)
                return false;
            counter--;
        }
        return true;
    }
}

//Check if the given input is a palindrome or not

function checkPalindrome(inputVal){
    if(!inputVal)
        return false;
    return String(inputVal).split("").reverse().join("") === inputVal;
}