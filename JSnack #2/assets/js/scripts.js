const container = document.querySelector('.container');

const students = [
    {
        firstName:  'Maria',
        lastName:   'Rossi',
        materie:    [
            html       = 25,
            css        = 28,
            javascript = 18,
        ],
        image:      'maria_rossi.jpg'
    },
    {
        firstName:  'Giuseppe',
        lastName:   'Verdi',
        materie:    [
            html       = 21,
            css        = 24,
            javascript = 29,
        ],
        image:      'giuseppe_verdi.jpg'
    },
    {
        firstName:  'Luca',
        lastName:   'Giordano',
        materie:    [
            html       = 27,
            css        = 25,
            javascript = 25
        ],
        image:      'luca_giordano.jpg'
    },
    {
        firstName:  'Guido',
        lastName:   'Guidi',
        materie: [
            html       = 30,
            css        = 28,
            javascript = 25,
        ],
        image:      'guido_guidi.jpg'
    },
    {
        firstName:  'Ludovica',
        lastName:   'Bruni',
        materie:    [
            html       = 18,
            css        = 18,
            javascript = 25,
        ],
        image:      'ludovica_bruni.jpg'

    },
    {
        firstName:  'Giovanna',
        lastName:   'Ferrara',
        materie:    [
            html       = 25,
            css        = 28,
            javascript = 18,
        ],
        image:      'giovanna_ferrara.jpg'
    }
]

const newStudents = [];
/////////////////////////////////////////////////////////////////////////////////////
const getRandomMatricola = () => Math.floor(Math.random()* (9999 - 1000 + 1) + 1000);

students.forEach (student => {

    let sum = 0;

    student.materie.forEach (materia => sum += materia);
    newStudents.push({

        fullName:   `${student.firstName} ${student.lastName}`,
        matricola:  getRandomMatricola(),
        media:      (sum / student.materie.length).toFixed(1),
        image:      student.image
    })
})

for (let student of newStudents) {

    container.innerHTML += `
    <div class="card" style="width: calc(100% / 4);">
        <div class="card-img-wrapper">
            <img src="assets/img/${student.image}" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title fs-4 text-center fw-bold">${student.fullName}</h5>
            <p class="card-text fs-6 text-center">Matricola: ${getRandomMatricola()}</p>
            <p class="card-text fs-5 text-center">Media Voti: ${student.media}</p>
        </div>
    </div>
`
} 

console.log(newStudents);
