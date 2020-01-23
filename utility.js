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