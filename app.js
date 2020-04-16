document.addEventListener('DOMContentLoaded', () => {

    //card option   
    const cardArray = [{
            name: 'P1',
            img: 'images/P1.jpg'
        },
        {
            name: 'P1',
            img: 'images/P1.jpg'
        },
        {
            name: 'P2',
            img: 'images/P2.jpg'
        },
        {
            name: 'P2',
            img: 'images/P2.jpg'
        },
        {
            name: 'P3',
            img: 'images/P3.jpg'
        },
        {
            name: 'P3',
            img: 'images/P3.jpg'
        },
        {
            name: 'P4',
            img: 'images/P4.jpg'
        },
        {
            name: 'P4',
            img: 'images/P4.jpg'
        },
        {
            name: 'P5',
            img: 'images/P5.jpg'
        },
        {
            name: 'P5',
            img: 'images/P5.jpg'
        },
        {
            name: 'P6',
            img: 'images/P6.jpg'
        },
        {
            name: 'P6',
            img: 'images/P6.jpg'

        }
    ]

    // cardArray.sort(() => 0.5 - Math.random())
    //chose different kind of shuffle function
    cardArray.sort(() => Math.floor(Math.random() * 12))


    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result');
    const showMatching = document.querySelector('#matching');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/einhorn.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        showMatching.textContent = "";
        if (cardsChosen[0] === cardsChosen[1]) {
            // alert("You found a match")
            showMatching.textContent = "You found a match!";
            cards[optionOneId].setAttribute('src', 'images/white.jpg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/einhorn.jpg')
            cards[optionTwoId].setAttribute('src', 'images/einhorn.jpg')
            // alert('Sorry, try again')
            showMatching.textContent = "Sorry, try again!"
        }

        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congrationlations! You found them all.'
            showMatching.textContent = "";
        }
    }


    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        showMatching.textContent = "";
        if (cardsChosenId.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})