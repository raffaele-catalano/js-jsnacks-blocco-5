/*
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...

1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);

2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120.

Questo è l’elenco degli studenti:
Id      Name                              Grades
213     Marco della Rovere                  78
110     Paola Cortellessa                   96
250     Andrea Mantegna 	                48
145     Gaia Borromini                      74
196     Luigi Grimaldello 	                68
102     Piero della Francesca               50
120     Francesca da Polenta                84
*/
const container         = document.querySelector('.container');
const containerOver70   = document.querySelector('.container_over70');
const containerOver120  = document.querySelector('.container_over120');


const students      = [
    {
        fullName:   'Marco della Rovere',
        id:         213,
        grades:     78,
        image:      'marco_della_rovere.jpg'

    },
    {
        fullName:   'Paola Cortellesa',
        id:         110,
        grades:     96,
        image:      'paola_cortellesa.jpg'
    },
    {
        fullName:   'Andrea Mantegna',
        id:         250,
        grades:     48,
        image:      'andrea_mantegna.jpg'
    },
    {
        fullName:   'Gaia Borromini',
        id:         145,
        grades:     74,
        image:      'gaia_borromini.jpg'
    },
    {
        fullName:   'Luigi Grimaldello',
        id:         196,
        grades:     68,
        image:      'luigi_grimaldello.jpg'
    },
    {
        fullName:   'Piero della Francesca',
        id:         102,
        grades:     50,
        image:      'piero_della_francesca.jpg'
    },
    {
        fullName:   'Francesca da Polenta',
        id:         120,
        grades:     84,
        image:      'francesca_da_polenta.jpg'
    },
]
    console.log('array originale', students);
//////////////////////////////////////////////////////////////////////////////////
// con map viene generato un nuovo array (newStudentList) al cui interno si 
// destruttura la chiave "fullName" e si aggiunge il toUpperCase per avere il 
// nome in maiuscolo
const newStudentList = students.map((student) => {

    const studentUpper = {
        fullName    : student.fullName.toUpperCase(),
        id          : student.id,
        grades      : student.grades,
        image       : student.image
    }

    return studentUpper;
})

    console.log('nomi studenti in maiuscolo in nuovo array -->', newStudentList);
/////////////////////////////////////////////////////////////////////////////////
// con filter si estrapolano gli studenti la cui media voti è superiore a 70
const studentOver70grades = students.filter((student) => {
    
    if (student.grades > 70) return true;

    return false;
})

    console.log('studenti con più di 70', studentOver70grades);
/////////////////////////////////////////////////////////////////////////////////
// con filter si estrapolano gli studenti il cui id superiore al numero a 120
const studentOver120Id = studentOver70grades.filter((student) => {

    if (student.id > 120) return true;

    return false
})

    console.log('studenti con id superiore a 120', studentOver120Id);
/////////////////////////////////////////////////////////////////////////////////
// stampare in pagina in .container le card degli studenti con il nome in
// maiuscolo utilizzando il for-of per prendere solo i valori senza indice
for (let student of newStudentList) {

    container.innerHTML += `
        <div class="card" style="width: 20rem;">
            <div class="card-img-wrapper">
                <img src="assets/img/${student.image}" class="card-img-top">
            </div>
            <div class="card-body">
                <h5 class="card-title fs-5 text-center text_dark_rc fw-bold">${student.fullName}</h5>
                <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">ID:</span> ${student.id}</p>
                <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Grades:</span> ${student.grades}</p>
            </div>
        </div>
    `
}
/////////////////////////////////////////////////////////////////////////////////
// stampare in pagina in .container le card degli studenti che hanno media voti
// superiore a 70 utilizzando il for-of per prendere solo i valori senza indice
for (let student of studentOver70grades) {

    containerOver70.innerHTML += `
        <div class="card" style="width: 20rem;">
            <div class="card-img-wrapper">
                <img src="assets/img/${student.image}" class="card-img-top">
            </div>
            <div class="card-body">
                <h5 class="card-title fs-5 text-center text_dark_rc fw-bold">${student.fullName}</h5>
                <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">ID:</span> ${student.id}</p>
                <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Grades:</span> ${student.grades}</p>
            </div>
        </div>
    `
}
/////////////////////////////////////////////////////////////////////////////////
// stampare in pagina in .container le card degli studenti che hanno media voti
// superiore a 70 e id superiore 120 utilizzando il for-of per prendere solo i
// valori senza indice
for (let student of studentOver120Id) {

    containerOver120.innerHTML += `
        <div class="card" style="width: 20rem;">
            <div class="card-img-wrapper">
                <img src="assets/img/${student.image}" class="card-img-top">
            </div>
            <div class="card-body" >
                <h5 class="card-title fs-5 text-center text_dark_rc fw-bold">${student.fullName}</h5>
                <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">ID:</span> ${student.id}</p>
                <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Grades:</span> ${student.grades}</p>
            </div>
        </div>
    `
}
