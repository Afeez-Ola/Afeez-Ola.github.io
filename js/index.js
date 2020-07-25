diceChallenge = () => {
    var diceNum1;
    var diceNum2;
    diceFaces1 = () => {

        // ****Player1 Die Faces *****//
        var dice1 = [
            '/images/dice1.png',
            '/images/dice2.png',
            '/images/dice3.png',
            '/images/dice4.png',
            '/images/dice5.png',
            '/images/dice6.png',
        ];

        var num1 = parseInt(dice1[0].charAt(12)),
            num2 = parseInt(dice1[1].charAt(12)),
            num3 = parseInt(dice1[2].charAt(12)),
            num4 = parseInt(dice1[3].charAt(12)),
            num5 = parseInt(dice1[4].charAt(12)),
            num6 = parseInt(dice1[5].charAt(12));
        var diceFaces = Math.floor(Math.random() * dice1.length);

        var Face = dice1[diceFaces];

        if (Face == dice1[0]) {
            diceNum1 = num1;
        } else if (Face == dice1[1]) {
            diceNum1 = num2;
        } else if (Face == dice1[2]) {
            diceNum1 = num3;
        } else if (Face == dice1[3]) {
            diceNum1 = num4;
        } else if (Face == dice1[4]) {
            diceNum1 = num5;
        } else {
            diceNum1 = num6;
        }
        return diceNum1, Face;

    };

    diceFaces2 = () => {
        // ****Player2 Die Faces *****//
        var dice2 = [
            '/images/dice1.png',
            '/images/dice2.png',
            '/images/dice3.png',
            '/images/dice4.png',
            '/images/dice5.png',
            '/images/dice6.png',
        ];

        var num1 = parseInt(dice2[0].charAt(12)),
            num2 = parseInt(dice2[1].charAt(12)),
            num3 = parseInt(dice2[2].charAt(12)),
            num4 = parseInt(dice2[3].charAt(12)),
            num5 = parseInt(dice2[4].charAt(12)),
            num6 = parseInt(dice2[5].charAt(12));



        var diceFaces = Math.floor(Math.random() * dice2.length);

        var Face = dice2[diceFaces];

        if (Face == dice2[0]) {
            diceNum2 = num1;
        } else if (Face == dice2[1]) {
            diceNum2 = num2;
        } else if (Face == dice2[2]) {
            diceNum2 = num3;
        } else if (Face == dice2[3]) {
            diceNum2 = num4;
        } else if (Face == dice2[4]) {
            diceNum2 = num5;
        } else {
            diceNum2 = num6;
        }
        return diceNum2, Face;
    };


    duel = () => {
        document.querySelector('.player1 img').setAttribute('src', diceFaces1());
        document.querySelector('.player2 img').setAttribute('src', diceFaces2());

        if (diceNum1 > diceNum2) {
            document.querySelector('button h1').innerText = '🚩 Player1 Wins!';
        } else if (diceNum1 < diceNum2) {
            document.querySelector('button h1').innerText = 'Player2 Wins! 🚩';
        } else {
            document.querySelector('button h1').innerText = 'Draw!';
        }


    };
    duel();
}

diceChallenge();