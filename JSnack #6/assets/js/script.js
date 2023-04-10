const ulFull      = document.querySelector('.fullTeams');
const ulGoal      = document.querySelector('.goalScored');

const leagueTable = [
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
leagueTable.forEach(team => {
    team.punti          = getRandomNumber (0, 90);
    team.goalFatti      = getRandomNumber (0, 60);
    team.goalSubiti     = getRandomNumber (0, 50);
})

    console.log('array della lega -->',leagueTable);
//////////////////////////////////////////////////////////////////////////
// con .map si va a creare un nuovo array in cui inserire solo 
// la *squadra*, i goalFatti ed il logo
const newLeagueTable = leagueTable.map((goalFattiTable) => {

    const {nome, goalFatti} = goalFattiTable;

    goalFattiTable = {
        nome,
        goalFatti,
    }

    return goalFattiTable;
})
    console.log('new array della lega -->', newLeagueTable);
//////////////////////////////////////////////////////////////////////////
// con un ciclo for-of dapprima viene stampata in pagina, la classifica
// con tutte le squadre che compongono la lega e tutte le relative *keys*
for (let team of leagueTable) {

    ulFull.innerHTML += `
        <li class="list-group-item border border-dark">
            <div class="row justify-content-center">
                <div class="col-auto d-flex align-items-center"></div>
                <div class="col-4 d-flex fw-bold text-uppercase fs-3 align-items-center text-dark">${team.nome}</div>
                <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-info">${team.punti}</div>
                <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-success">${team.goalFatti}</div>
                <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-danger">${team.goalSubiti}</div>
            </div>
        </li>
    `
}
//////////////////////////////////////////////////////////////////////////
// con un ciclo for-of viene stampata in pagina, la classifica delle 
// squadre ma esclusivamente con il nome, il logo e i goalFatti
for (let team of newLeagueTable) {

    ulGoal.innerHTML += `
    <li class="list-group-item border border-dark">
        <div class="row justify-content-center">
            <div class="col-auto d-flex align-items-center"></div>
            <div class="col-4 d-flex fw-bold text-uppercase fs-3 align-items-center text-dark">${team.nome}</div>
            <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-success">${team.goalFatti}</div>
        </div>
    </li>
`
}
//-------------------------------FUNCTIONS---------------------------------
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
