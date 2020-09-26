console.log("hi")

// var shotCount1 = 0;
// var teamOneNumshots = document.querySelector("#teamone-numshots");
// var teamOneShootButton = document.getElementById("#teamone-shoot-button");
//     teamOneShootButton.addEventListener("click", function() {

//     let shotCount1 = Number(teamOneNumshots.innerHTML) + 1;
//     teamOneNumshots.innerHTML = shotCount1;

// })

// TEAM 1
// var button1 = document.getElementById("teamone-shoot-button");
// var shots1 = document.getElementById("teamone-numshots");
// count1 = 0;

// button1.onclick = function () {
//     count1 += 1;
//     shots1.innerHTML = " " + count1;
// }




// // TEAM 2

// var teamTwoShoot = document.getElementById("teamtwo-shoot-button");
// var teamTwoShots = document.getElementById("teamtwo-numshots");
// teamTwoGoal = document.getElementById("teamtwo-numgoals");
// teamTwoGoal = 0;
// teamTwoShotss = 0;

// teamTwoShoot.onclick = function () {
//     teamTwoShotss += 1;
//     teamTwoShots.innerHTML = " " + teamTwoShotss;
//     // let teamTwoGoal = Math.random(teamTwoGoal.innerHTML)
//     var chanceHit2 = Math.ceil(Math.random() * 5)
//     console.log(chanceHit2)
//     if (chanceHit2 === 5) {
//         teamTwoGoal += 1;
//         teamTwoGoal.innerHTML = " " + teamTwoGoal;
//         console.log(teamTwoGoal.innerHTML)

//     }

// }


// TEAM 1

let teamOneShootButton = document.getElementById("teamone-shoot-button");
let teamOneGoal = document.getElementById("teamone-numgoals");
let teamOneNumshots = document.getElementById("teamone-numshots")


teamOneShootButton.addEventListener("click", function () {
    teamOneShootUp = Number(teamOneNumshots.innerHTML) + 1;
    teamOneNumshots.innerHTML = teamOneShootUp;
    if (Math.random() * 100 < 40) {

        teamOneGoalUp = Number(teamOneGoal.innerHTML) + 1;
        teamOneGoal.innerHTML = teamOneGoalUp

    //         var canvas = document.getElementById("myCanvas");
    // var ctx = canvas.getContext("2d");
    // var ballRadius = 10;
    // var x = canvas.width/2;
    // var y = canvas.height-30;
    // var dx = 2;
    // var dy = -2;

    // function drawBall() {
    //     ctx.beginPath();
    //     ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    //     ctx.fillStyle = "#0095DD";
    //     ctx.fill();
    //     ctx.closePath();
    // }

    // function draw() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     drawBall();
        
    //     if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    //         dx = -dx;
    //     }
    //     if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    //         dy = -dy;
    //     }
        
    //     x += dx;
    //     y += dy;
    }

    // setInterval(draw, 10);
    })


// TEAM 2

let teamTwoShootButton = document.getElementById("teamtwo-shoot-button");
let teamTwoGoal = document.getElementById("teamtwo-numgoals");
let teamTwoNumshots = document.getElementById("teamtwo-numshots")

teamTwoShootButton.addEventListener("click", function () {
    teamTwoShootUp = Number(teamTwoNumshots.innerHTML) + 1;
    teamTwoNumshots.innerHTML = teamTwoShootUp;
    if (Math.random() * 100 < 40) {

        teamTwoGoalUp = Number(teamTwoGoal.innerHTML) + 1;
        teamTwoGoal.innerHTML = teamTwoGoalUp
    }
})


// RESET COUNTER

let resetButton = document.getElementById("reset-button");
let resetNum = document.getElementById("num-resets");

resetButton.addEventListener("click", function () {
    document.getElementById("teamtwo-numshots").innerHTML = 0;
    document.getElementById("teamtwo-numgoals").innerHTML = 0;
    document.getElementById("teamone-numshots").innerHTML = 0;
    document.getElementById("teamone-numgoals").innerHTML = 0;
    resetNumAdd = Number(resetNum.innerHTML) + 1;
    resetNum.innerHTML = resetNumAdd;

    if(teamOneGoalUp > teamTwoGoalUp) {
    alert("Team One WINS!!!");
    } else {
        alert("Team Two WINS!!!");
    }
    
})








