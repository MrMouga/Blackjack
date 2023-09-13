let playerScoreValue = 0;
let bankScoreValue = 0;
let hit=document.querySelector(".hit")
let stand=document.querySelector(".stand")
let reset=document.querySelector(".reset")
let bankScore=document.querySelector(".bankScore")
let playerScore=document.querySelector(".playerScore")
let resultText=document.querySelector(".resultText")


const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

const ranks = [
    { name: 'Ace', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'Jack', value: 10 },
    { name: 'Queen', value: 10 },
    { name: 'King', value: 10 }
];

function newGame(){

    playerScoreValue = 0;
    bankScoreValue = 0;
    resultText.textContent="Hit or Stand you choose!";


    let bankCards = document.querySelectorAll('.bankboard .card');
    bankCards.forEach((bankCard) => 
    {
        bankCard.classList.add('bankCard');
    }
);


    let playerCards = document.querySelectorAll('.playerCard');
    playerCards.forEach((playerCard) => 
        {
            playerCard.classList.add('inactive');
            playerCard.style.backgroundImage = `url('/img/bottom.png')`
        }
        
    );


   

    playerScore.textContent = `Player: 0`;

    bankCard()

 


}



function bankCard() {


    for (let i = 0; i < 2; i++){

    let randomSuits = Math.floor(Math.random() * suits.length);
    let randomRanks = Math.floor(Math.random() * ranks.length);
        let cardDrawn = suits[randomSuits] + ranks[randomRanks].name;
        let cardValue = ranks[randomRanks].value;
        console.log(cardDrawn);
        console.log(cardValue);
       bankScoreValue+=cardValue;

       let bankCard = document.querySelector('.bankCard');

       if(bankCard) {
              
           bankCard.style.backgroundImage = `url('/img/${cardDrawn}.png')`;
           bankCard.classList.remove('bankCard');
       }
        
    }
    console.log(bankScoreValue)
    bankScore.textContent = `Bank: ${bankScoreValue}`
   
}

function drawCard() {
    let randomSuits = Math.floor(Math.random() * suits.length);
    let randomRanks = Math.floor(Math.random() * ranks.length);

    let cardDrawn = suits[randomSuits] + ranks[randomRanks].name;
    let cardValue = ranks[randomRanks].value;
    console.log(cardDrawn);
    console.log(cardValue);
    playerScoreValue+=cardValue;
    console.log(playerScoreValue)


   playerScore.textContent = `Player: ${playerScoreValue}`


    let firstInactive = document.querySelector('.wrapper .inactive');

    if(firstInactive) {
           
        firstInactive.style.backgroundImage = `url('/img/${cardDrawn}.png')`;
        firstInactive.classList.remove('inactive');
    }
}

function resultGame(){
    if (playerScoreValue==21 && bankScoreValue !=21){
        resultText.textContent="Blackjack! Congratulations!"
       
    }

    else if (playerScoreValue>21){
        resultText.textContent="You aimed a little bit too high my friend... You lost, try again!"
    }

    else if (playerScoreValue>bankScoreValue){
        resultText.textContent="Your score is higher thank the Bank! You've won! Congratulations!"
    }

    else if (playerScoreValue<bankScoreValue){
        resultText.textContent="Your score is lower than the Bank... You've lost, try again!"
    }

    else {
        resultText.textContent="It's a tie! No winners, no losers, try again!"
    }

  
   
}


hit.addEventListener("click", function() {
   drawCard();
  });


reset.addEventListener("click",function(){
    newGame()
})

stand.addEventListener("click",function(){
    resultGame()
})


bankCard();