//hàm tính điểm trung bình
var dolphinsScores = [];
var koalasScores = [];
function calculateAverage (scores) {
    var sum = 0;
    for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
    return sum / scores.length;
  }

  //hàm xác định đội win
function winner1(dolphinsScores, koalasScores){
    const dolphinsAVG = calculateAverage(dolphinsScores);
    console.log('Dolphins AVG score: '+ dolphinsAVG);
    const koalasAVG = calculateAverage(koalasScores);
    console.log('Koalas AVG score: '+ koalasAVG);

    if(dolphinsAVG > koalasAVG){
        console.log('2. Dolphins win with AVG score: '+ dolphinsAVG);
    } else if(dolphinsAVG < koalasAVG){
        console.log('2. Koalas win with AVG score: '+ koalasAVG);
    } else{
        console.log('It\'s a draw!');
    }
}
function winner2(dolphinsScores, koalasScores) {
    const dolphinsAVG = calculateAverage(dolphinsScores);
    console.log('Dolphins AVG score: '+ dolphinsAVG);
    const koalasAVG = calculateAverage(koalasScores);
    console.log('Koalas AVG score: '+ koalasAVG);

    if(dolphinsAVG>= 100 || koalasAVG >= 100){
        if(dolphinsAVG > koalasAVG){
            console.log('Dolphins Win with AVG scores: ' + dolphinsAVG);
        } else if(dolphinsAVG < koalasAVG ){
            console.log('Koalas Win with AVG scores: ' + koalasAVG);
        } else{
            console.log('It\'s a draw!');
        }
    } else{
        console.log('One of the 2 teams must have a score of at least 100 to win !')
}}
function winner3(dolphinsScores, koalasScores){
    const dolphinsAVG = calculateAverage(dolphinsScores);
    console.log('Dolphins AVG score: '+ dolphinsAVG);
    const koalasAVG = calculateAverage(koalasScores);
    console.log('Koalas AVG score: '+ koalasAVG);

    if(dolphinsAVG>= 100 && koalasAVG >= 100){
        if(dolphinsAVG > koalasAVG){
            console.log('Dolphins Win with AVG scores: ' + dolphinsAVG);
        } else if(dolphinsAVG < koalasAVG ){
            console.log('Koalas Win with AVG scores: ' + koalasAVG);
        } else{
            console.log('It\'s a draw!');
        }
    } else{
        console.log('Both teams must have a score of at least 100 to win !')
}}
  


  function inputScores(){
 
    
    //Nhập điểm cho đội Dolphins
    for (let i = 1; i < 4; i++) {
        const score = parseFloat(prompt('Score '+ i +' for Dolphins: '));
        dolphinsScores.push(score);

    }
    //Nhập điểm cho đội Koalas
    for (let i = 1; i < 4; i++) {
        const score = parseFloat(prompt('Score '+ i +' for Koalas: '));
        koalasScores.push(score);

    }
    // var result = winner(dolphinsScores, koalasScores);
    // console.log(result);
  }
  function result() {
    var luaChon;
  
    luaChon = prompt("Hãy chọn task:\n 1. Data 1\n 2.Data bonus 1\n 3.Data bonus 2");

    if (luaChon === null) {
        return; //break out of the function early
    }
    inputScores();
    switch (luaChon) {
        
        case "1":{
            winner1(dolphinsScores, koalasScores);
            break;
        }
        case "2":{
            winner2(dolphinsScores, koalasScores);
            break
        }
        case "3":{
            winner3(dolphinsScores, koalasScores);
            break;
        }
 
        default:
        
            break;
    }
    
  }

//   inputScores();
