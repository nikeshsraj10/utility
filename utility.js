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
    if(inputNumber < 2 || inputNumber % 2 == 0)
        return false;
    if(inputNumber == 2)
        return true;
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