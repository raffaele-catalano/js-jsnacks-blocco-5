const league = [
    {
        nome        : 'Napoli',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Inter',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Milan',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Roma',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Lazio',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Juventus',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Fiorentina',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    },
    {
        nome        : 'Atalanta',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        // logo        :
    }
]
//////////////////////////////////////////////////////////////////////////
// attraverso l'utilizzo di forEach si vengono assegnati valori randomici
// per *punti*, *goalFatti*, *goalSubiti* utilizzando la funzione 
// getRandomNumber
league.forEach(team => {
    team.punti          = getRandomNumber (0, 90);
    team.goalFatti      = getRandomNumber (0, 60);
    team.goalSubiti     = getRandomNumber (0, 50);
})

    console.log('array della lega -->',league);








//-------------------------------FUNCTIONS---------------------------------
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} 