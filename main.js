const game= {
    name: "Rock, Papers, Scissors Game",
    picks:[
        {choice: "Rock", value: 2},
        {choice: "Paper", value: 1},
        {choice: "Scissors", value: 0},
    ],
    rockFunction(){
        if (Math.floor(Math.random()*3) == 2){
            alert(`The Computer chose Rock`);
            alert(`It's a Tie -_-`);
        }
        else if (Math.floor(Math.random()*3) == 1){
            alert(`The Computer chose Paper`);
            alert(`You lose :(`);
        }
        else {
            alert(`The Computer chose Scissors`);
            alert(`You win :)`);
        }
    },
    paperFunction(){
        if (Math.floor(Math.random()*3) == 2){
            alert(`The Computer chose Rock`);
            alert(`You win :)`);
        }
        else if (Math.floor(Math.random()*3) == 1){
            alert(`The Computer chose Paper`);
            alert(`It's a Tie -_-`);
        }
        else {
            alert(`The Computer chose Scissors`);
            alert(`You lose :(`);
        }
        
    },
    scissorFunction(){
        if (Math.floor(Math.random()*3) == 2){
            alert(`The Computer chose Rock`);
            alert(`You lose :(`);
        }
        else if (Math.floor(Math.random()*3) == 1){
            alert(`The Computer chose Paper`);
            alert(`You win :)`);
        }
        else {
            alert(`The Computer chose Scissors`);
            alert(`It's a Tie -_-`);
        }
    },

}