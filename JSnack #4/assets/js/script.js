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
const container     = document.querySelector('.container');

const students      = [
    {
        fullName:   'Marco della Rovere',
        id:         213,
        grades:     78,
    },
    {
        fullName:   'Paola Cortellesa',
        id:         110,
        grades:     96,
    },
    {
        fullName:   'Andrea Mantegna',
        id:         250,
        grades:     48,
    },
    {
        fullName:   'Gaia Borromini',
        id:         145,
        grades:     74,
    },
    {
        fullName:   'Luigi Grimaldello',
        id:         196,
        grades:     68,
    },
    {
        fullName:   'Piero della Francesca',
        id:         102,
        grades:     50,
    },
    {
        fullName:   'Francesca da Polenta',
        id:         102,
        grades:     84,
    },
]

/////////////////////////////////////////////////////////////////////////////////
// con map viene generato un nuovo array (newStudentList) al cui interno si 
// destruttura la chiave "fullName" e si aggiunge il toUpperCase per avere il 
// nome in stampatello
const newStudentList = students.map((student) => {

    const studentUpper = {
        fullName : student.fullName.toUpperCase()
    }

    return studentUpper;
})

    console.log('nomi studenti in stampatello -->', newStudentList);
////////////////////////////////////////////////////////////////////////////////
