const container         = document.querySelector('.container');
const containerLight    = document.querySelector('.container_light');

const bikeShop          = [
    {
        model:  'Cross',
        name:   'Crosshill 3.0',
        weight:  1800,
        price:   12,
        image:  'cross.jpg',
    },
    {
        model:  'Electric',
        name:   'e-Xelius 600',
        weight:  14,
        price:   5000,
        image:  'electric.jpg',
    },
    {
        model:  'Mountain',
        name:   'Overvolt HT',
        weight:  24,
        price:   3000,
        image:  'overvolt.jpg',
    },
    {
        model:  'Trekking',
        name:   'TreK 3.0',
        weight:  16,
        price:   7600,
        image:  'trekking.jpg',
    },
    {
        model:  'Road',
        name:   'Xelius SL',
        weight:  3,
        price:   11000,
        image:  'road.jpg',
    },
    {
        model:  'Fixed',
        name:   'Aerostorm DRS',
        weight:  5,
        price:   8000,
        image:  'fixed.jpg',
    }
]
////////////////////////////////////////////////////////////////////////////////
    console.log('array originale bikeShop -->',bikeShop);
// con .map viene generato e destrutturato un nuovo array (bikeList) aggiungendo
// il .toUpperCase() per il parametro 'model'
const bikeList = bikeShop.map((bikes) => {

    const bike = {
        model   : bikes.model.toUpperCase(),
        name    : bikes.name,
        weight  : bikes.weight,
        price   : bikes.price,
        image   : bikes.image,
    }

    return bike;
})
    console.log('nuovo array bikeList -->',bikeList);
////////////////////////////////////////////////////////////////////////////////
// il contentuto viene stampato in pagina con un ciclo for-of
for (let bikes of bikeList) {

    container.innerHTML += `
    <div class="card" style="width: 20rem;">
        <div class="card-img-wrapper">
            <img src="assets/img/${bikes.image}" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title fs-5 text-center text_dark_rc fw-bold"><span class="fw-bold">Modello:</span> ${bikes.model}</h5>
            <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Nome:</span> ${bikes.name}</p>
            <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Peso:</span> ${bikes.weight} Kg</p>
            <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Prezzo:</span> ${bikes.price} €</p>
        </div>
    </div>
`
}
////////////////////////////////////////////////////////////////////////////////
// con .reduce confronto il valore di una specifica key dell'array di oggetti
const lightWeight = bikeList.reduce(function(a, b) {
    if (a.weight < b.weight) {
        return a
    } else {
        return b
    }
})

    console.log('la più leggera', lightWeight);

containerLight.innerHTML = `
    <div class="card" style="width: 20rem;">
        <div class="card-img-wrapper">
            <img src="assets/img/${lightWeight.image}" class="card-img-top">
        </div>
        <div class="card-body">
            <h5 class="card-title fs-5 text-center text_dark_rc fw-bold"><span>Modello:</span> ${lightWeight.model}</h5>
            <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Nome:</span> ${lightWeight.name}</p>
            <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Peso:</span> ${lightWeight.weight} Kg</p>
            <p class="card-text fs-6 text-center text_dark_rc"><span class="fw-bold">Prezzo:</span> ${lightWeight.price} €</p>
        </div>
    </div>
`
