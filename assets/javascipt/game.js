console.log("hi")

const resetButton = document.getElementById('reset-button');
const teamOneShootButton = document.getElementById('teamone-shoot-button');
const teamTwoShootButton = document.getElementById('teamtwo-shoot-button');
let numResets = document.getElementById('num-resets');
let teamOneShotsDisplay = document.getElementById('teamone-numshots');
let teamOneGoal = document.getElementById('teamone-numgoals')
let teamTwoShotsDisplay = document.getElementById('teamtwo-numshots');
let teamTwoGoal = document.getElementById('teamtwo-numgoals');
let resetcounter = 0;

class Scoreboard {
    constructor(shots, goals, team) {
        this.shots = shots;
        this.goals = goals;
        this.score = 0;
        this.team = team;
    }
    shoot() {
        this.shots += 1;
        this.team.innerHTML = this.shots
        if (Math.random() * 100 < 30) {
            this.score += 1;
            this.goals.innerHTML = this.score;
        }
    }
    reset() {
        this.shots = 0;
        this.team.innerHTML = this.shots;
        this.score = 0
        this.goals.innerHTML = this.score;
    }
}

let teamOne = new Scoreboard(0, teamOneGoal, teamOneShotsDisplay)
let teamTwo = new Scoreboard(0, teamTwoGoal, teamTwoShotsDisplay)

let reset = function (){
    if (teamOne.score > teamTwo.score) {
        alert('Team One Wins!');
    } else if (teamOne.score < teamTwo.score) {
        alert('Team Two Wins!')
    }
    if (teamOne.score === teamTwo.score) {
        alert(`It's a draw!`)
    }
    resetcounter += 1
    numResets.innerHTML = resetcounter
}

teamOneShootButton.addEventListener("click", function(){
    teamOne.shoot()

})

teamTwoShootButton.addEventListener("click", function(){
    teamTwo.shoot()

})

resetButton.addEventListener("click", function (){
    reset()
    teamOne.reset();
    teamTwo.reset();
})