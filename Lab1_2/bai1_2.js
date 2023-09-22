var markWeight; 
var markHeight; 
var johnWeight; 
var johnHeight; 
var markBMI; 
var johnBMI;

function BMI() {
  markWeight = prompt('Mark\'s Weight?' );
markHeight = prompt('Mark\'s Height?' );
johnMass = prompt('John\'s Weight?' );
johnHeight = prompt('John\'s Height?' );

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

var markHigherBMI   = markBMI > johnBMI;

console.log(markBMI, johnBMI);

if(markBMI > johnBMI){
  console.log('Mark\'s BMI '+ markBMI + ' is higher than John\'s '+ johnBMI + '!');
}
else {
  console.log('John\'s BMI  '+ johnBMI + ' is higher than Mark\'s '+ markBMI + '!');
}
}