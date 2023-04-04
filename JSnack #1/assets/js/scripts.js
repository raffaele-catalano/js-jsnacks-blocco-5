const container         = document.querySelector('.container');
const containerUnder    = document.querySelector('.container_under');
const containerOver     = document.querySelector('.container_over');

const actors = [
    {
        firstName:  'Tom',
        lastName:   'Holland',
        age:         27,
        image:      'tom_holland.jpg'
    },
    {
        firstName:  'Jennifer',
        lastName:   'Aniston',
        age:         54,
        image:      'jennifer_aniston.jpg'
    },
    {
        firstName:  'Millie Bobby',
        lastName:   'Brown',
        age:         17,
        image:      'millie_bobby_brown.jpg'
    },
    {
        firstName:  'Richard',
        lastName:   'Gere',
        age:         72,
        image:      'richard_gere.jpg'
    },
    {
        firstName:  'Helen',
        lastName:   'Mirren',
        age:         78,
        image:      'helen_mirren.jpg'
    },
    {
        firstName:  'Noah',
        lastName:   'Jupe',
        age:         15,
        image:      'noah_jupe.jpg'
    }
]
///////////////////////////////////////////////////////////////////////////////////////////////////////
actors.forEach(actor => {

    const {firstName, lastName, age, image} = actor;

    const card = `
        <div class="card" style="width: calc(100% / 4);">
            <div class="card-img-wrapper">
                <img src="assets/img/${image}" class="card-img-top">
            </div>
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <p class="card-title fs-3 fw-bold">${firstName} ${lastName}</p>
                <p class="card-text fs-4">Age: ${age}</p>
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
        <div class="card" style="width: 350px;">
            <div class="card-img-wrapper">
                <img src="assets/img/${actor.image}" class="card-img-top">
            </div>
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <p class="card-title fs-3 fw-bold">${actor.firstName} ${actor.lastName}</p>
                <p class="card-text fs-4">Age: ${actor.age}</p>
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
        <div class="card" style="width: 350px;">
            <div class="card-img-wrapper">
                <img src="assets/img/${actor.image}" class="card-img-top">
            </div>
            <div class="card-body d-flex justify-content-center align-items-center flex-column">
                <p class="card-title fs-3 fw-bold">${actor.firstName} ${actor.lastName}</p>
                <p class="card-text fs-4">Age: ${actor.age}</p>
            </div>
        </div>
    `
    containerOver.innerHTML += card;

    return actor;
    }
})

        console.log('over65 -->', over65);