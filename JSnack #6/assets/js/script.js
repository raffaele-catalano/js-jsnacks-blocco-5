const ulFull      = document.querySelector('.fullTeams');
const ulGoal      = document.querySelector('.goalScored');

const leagueTable = [
    {
        nome        : 'Napoli',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'napoli.png'
    },
    {
        nome        : 'Inter',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'inter.png'
    },
    {
        nome        : 'Milan',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'milan.png'
    },
    {
        nome        : 'Roma',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'roma.png'
    },
    {
        nome        : 'Lazio',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'lazio.png'
    },
    {
        nome        : 'Juventus',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'juventus.png'
    },
    {
        nome        : 'Fiorentina',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'fiorentina.png'
    },
    {
        nome        : 'Atalanta',
        punti       : 0,
        goalFatti   : 0,
        goalSubiti  : 0,
        logo        : 'atalanta.png'
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
// con .sort applicato su *punti* si va ad ordinare in ordine 
// decrescente la classifica in base alla key
leagueTable.sort(function(a, b){
    
    return b.punti - a.punti
});
//////////////////////////////////////////////////////////////////////////
// con .map si va a creare un nuovo array in cui inserire solo 
// la *squadra*, i goalFatti ed il logo
const newLeagueTable = leagueTable.map((goalFattiTable) => {

    const {nome, goalFatti, logo} = goalFattiTable;

    goalFattiTable = {
        nome,
        goalFatti,
        logo,
    }

    return goalFattiTable;
})
    console.log('new array della lega -->', newLeagueTable);
//////////////////////////////////////////////////////////////////////////
// con .sort applicato su *goalFatti* si va ad ordinare in ordine 
// decrescente la classifica in base alla key
newLeagueTable.sort(function(a, b){
    
    return b.goalFatti - a.goalFatti
});
//////////////////////////////////////////////////////////////////////////
// con un ciclo for-of dapprima viene stampata in pagina, la classifica
// con tutte le squadre che compongono la lega e tutte le relative *keys*
for (let team of leagueTable) 

    ulFull.innerHTML += `
        <li class="list-group-item border border-dark">
            <div class="row justify-content-center">
                <div class="col-1 d-flex align-items-center"><img src="assets/img/${team.logo}"></div>
                <div class="col-3 d-flex fw-bold text-uppercase fs-3 align-items-center text-dark">${team.nome}</div>
                <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-info">${team.punti}</div>
                <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-success">${team.goalFatti}</div>
                <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-danger">${team.goalSubiti}</div>
            </div>
        </li>
    `

//////////////////////////////////////////////////////////////////////////
// con un ciclo for-of viene stampata in pagina, la classifica delle 
// squadre ma esclusivamente con il nome, il logo e i goalFatti
for (let team of newLeagueTable) {

    ulGoal.innerHTML += `
    <li class="list-group-item border border-dark">
        <div class="row justify-content-center">
            <div class="col-1 d-flex align-items-center"><img src="assets/img/${team.logo}"></div>
            <div class="col-3 d-flex fw-bold text-uppercase fs-3 align-items-center text-dark">${team.nome}</div>
            <div class="col-2 d-flex fw-bold text-uppercase fs-3 align-items-center justify-content-center text-success">${team.goalFatti}</div>
        </div>
    </li>
`
}
//-------------------------------FUNCTIONS---------------------------------
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
