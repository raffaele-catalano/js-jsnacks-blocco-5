const container = document.querySelector('.container');
const container2 = document.querySelector('.container-filter');

const actors = [
    {
        firstName: 'Tom',
        lastName: 'Holland',
        age: 27
    },
    {
        firstName: 'Jennifer',
        lastName: 'Aniston',
        age: 54
    },
    {
        firstName: 'Millie Bobby',
        lastName: 'Brown',
        age: 17
    },
    {
        firstName: 'Richard',
        lastName: 'Gere',
        age: 72
    },
    {
        firstName: 'Helen',
        lastName: 'Mirren',
        age: 78
    },
    {
        firstName: 'Noah',
        lastName: 'Jupe',
        age: 15
    }
]

//////////////////////////////////////////////////////////////

    // const {firstName, lastName, age} = actor;
    // console.log(listActors);


actors.forEach(actor => {

    const {firstName, lastName, age} = actor;

    const card = `
        <div class="card bg-primary text-light" style="width: 20rem; height: 10rem;">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <p class="card-title fs-3">${firstName} ${lastName}</p>
                <p class="card-text fs-4">${age}</p>
            </div>
        </div>
    `
    container.innerHTML += card;
}); 

