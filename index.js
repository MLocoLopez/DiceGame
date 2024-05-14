

      


function randomNumber1() {
    var randmNr = Math.random()*6;
    var randomNumber = Math.floor(randmNr);   
    return randomNumber;
}

function randomNumber2() {
     var randmNr1 = Math.random()*6;
     var randomNumber0 = Math.floor(randmNr1);   
      return randomNumber0;
}

var result1 = randomNumber1();
var result2 = randomNumber2();

document.querySelector(".img1").setAttribute("src","./images/dice" +(result1 + 1)+ ".png");
document.querySelector(".img2").setAttribute("src","./images/dice" +(result2 + 1)+ ".png");



// if (randomNumber1() === 0) {
//         document.querySelector(".img1").setAttribute("src","./images/dice1.png");
//    } else if (randomNumber1() === 1) {
//         document.querySelector(".img1").setAttribute("src","./images/dice2.png");
//    }else if (randomNumber1() === 2) {
//        document.querySelector(".img1").setAttribute("src","./images/dice3.png");
//    }else if (randomNumber1() === 3) {
//         document.querySelector(".img1").setAttribute("src","./images/dice4.png");
//    }else if (randomNumber1() === 4) {
//         document.querySelector(".img1").setAttribute("src","./images/dice5.png");
//    }else {
//         document.querySelector(".img1").setAttribute("src","./images/dice6.png");
// }

        


// if (randomNumber2() === 0) {
//         document.querySelector(".img2").setAttribute("src","./images/dice1.png");
//    } else if (randomNumber2() === 1) {
//         document.querySelector(".img2").setAttribute("src","./images/dice2.png");
//    }else if (randomNumber2() === 2) {
//        document.querySelector(".img2").setAttribute("src","./images/dice3.png");
//    }else if (randomNumber2() === 3) {
//         document.querySelector(".img2").setAttribute("src","./images/dice4.png");
//    }else if (randomNumber2() === 4) {
//         document.querySelector(".img2").setAttribute("src","./images/dice5.png");
//    }else {
//         document.querySelector(".img2").setAttribute("src","./images/dice6.png");
// }


if (result1 === result2) {
    document.querySelector("h1").innerHTML = "Draw!";
} else if (result1 > result2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}

// Player 2 Wins!🚩