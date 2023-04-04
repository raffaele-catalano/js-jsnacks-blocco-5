const container         = document.querySelector('.container');
const containerUnder    = document.querySelector('.container_under');
const containerOver     = document.querySelector('.container_over');

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
///////////////////////////////////////////////////////////////////////////////////////////////////////
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
    console.log('attori -->', actors);
///////////////////////////////////////////////////////////////////////////////////////////////////////
const under18 = actors.filter((actor) => {
    if (actor.age < 18) {
        
        const card = `
        <div class="card bg-primary text-light" style="width: 20rem; height: 10rem;">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <p class="card-title fs-3">${actor.firstName} ${actor.lastName}</p>
                <p class="card-text fs-4">${actor.age}</p>
            </div>
        </div>
    `
    containerUnder.innerHTML += card;

    return actor;
    }
})
        console.log('under 18-->', under18);
///////////////////////////////////////////////////////////////////////////////////////////////////////
const over65 = actors.filter((actor) => {
    if (actor.age >= 65) {
    
        const card = `
        <div class="card bg-primary text-light" style="width: 20rem; height: 10rem;">
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <p class="card-title fs-3">${actor.firstName} ${actor.lastName}</p>
                <p class="card-text fs-4">${actor.age}</p>
            </div>
        </div>
    `
    containerOver.innerHTML += card;

    return actor;
    }
})

        console.log('over65 -->', over65);