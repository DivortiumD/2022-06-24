const planets = [
    {
        name: "MERCURY",
        img: 'https://buzzpedia.in/wp-content/uploads/2022/01/whatsimporta.jpg',
        mass: 0.330,
        diameter: 4879,
        density: 5429,
        gravity: 3.7
    },
    {
        name: "VENUS",
        img: 'https://astronomy.com/-/media/import/images/c/2/f/venus_500.jpg',
        mass: 4.87,
        diameter: 12104,
        density: 5243,
        gravity: 8.9
    },
    {
        name: "EARTH",
        img: 'https://live.staticflickr.com/5697/30346587551_0ce5282d51_b.jpg',
        mass: 5.97,
        diameter: 12756,
        density: 5514,
        gravity: 9.8
    },
    {
        name: "MOON",
        img: 'https://i.pinimg.com/564x/89/55/70/895570fa3e1d3ffc0818fd4349e926bb.jpg',
        mass: 0.073,
        diameter: 3475,
        density: 3340,
        gravity: 1.6
    },
    {
        name: "MARS",
        img: 'https://www.researchgate.net/profile/Radvan-Bahbouh/publication/341112256/figure/fig14/AS:963196575830016@1606655367764/The-Planet-Mars-and-the-Logo-of-the-Mars-500-Experiment.jpg',
        mass: 0.642,
        diameter: 6792,
        density: 3934,
        gravity: 3.7
    },
    {
        name: "JUPITER",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg/500px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg',
        mass: 1898,
        diameter: 142984,
        density: 1326,
        gravity: 23.1
    },
    {
        name: "SATURN",
        img: 'http://astronomy.com/~/media/8869F96544004BA298FE10708769601D.jpg',
        mass: 568,
        diameter: 120536,
        density: 687,
        gravity: 9.0
    },
    {
        name: "URANUS",
        img: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Uranus.jpg',
        mass: 86.8,
        diameter: 51118,
        density: 1270,
        gravity: 8.7
    },
    {
        name: "NEPTUNE",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Neptune_Dark_Spot_Jr._Hubble.png/500px-Neptune_Dark_Spot_Jr._Hubble.png',
        mass: 102,
        diameter: 49528,
        density: 1638,
        gravity: 11.0
    },
    {
        name: "PLUTO",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Nh-pluto-in-true-color_2x.jpg/800px-Nh-pluto-in-true-color_2x.jpg',
        mass: 0.0130,
        diameter: 2376,
        density: 1850,
        gravity: 0.7
    },
]

const planetsEl = document.querySelector(".planetsdiv");

const renderPlanets = (planets) => {
    planetsEl.innerHTML = '';
    planets.forEach ( (planet) => {
        planetsEl.innerHTML += `
            <div class="item">
                <div class="itemimg">
                    <img src="${planet.img}">
                </div>
                <div class="descr">
                    <h2>${planet.name}</h2>
                    <p>MASS --- ${planet.mass}</p>
                    <p>DIAMETER --- ${planet.diameter}</p>
                    <p>DENSITY --- ${planet.density}</p>
                    <p>GRAVITY --- ${planet.gravity}</p>
                </div>                
            </div>
        `;
    });
};

renderPlanets(planets);

/*
elBtnSRP.addEventListener('click', () => {
    html = '';
    goods.sort((a, b) => {
      return a.raiting - b.raiting;
    } );
    render();
  })
*/

/*
document.querySelector(".sortName").onClick = planets.sort((a,b) => {
    if (a.name < b.name) return -1;
    return 1;
});
*/

document.querySelector(".sortName").addEventListener('click', () => {
    const newPlanets = planets.sort((a,b) => {
        if (a.name < b.name) return -1;
        return 1;
    });
    renderPlanets(newPlanets);
});

document.querySelector(".sortMass").addEventListener('click', () => {
    const newPlanets = planets.sort((a,b) => {
        if(a.mass < b.mass) return -1;
        if(a.mass > b.mass) return 1;
        if(a.mass === b.mass) return 0;
    });
    renderPlanets(newPlanets);
});

document.querySelector(".sortDiameter").addEventListener('click', () => {
    const newPlanets = planets.sort((a,b) => {
        if(a.diameter < b.diameter) return -1;
        if(a.diameter > b.diameter) return 1;
        if(a.diameter === b.diameter) return 0;
    });
    renderPlanets(newPlanets);
});

document.querySelector(".sortDensity").addEventListener('click', () => {
    const newPlanets = planets.sort((a,b) => {
        if(a.density < b.density) return -1;
        if(a.density > b.density) return 1;
        if(a.density === b.density) return 0;
    });
    renderPlanets(newPlanets);
});

document.querySelector(".sortGravity").addEventListener('click', () => {
    const newPlanets = planets.sort((a,b) => {
        if(a.gravity < b.gravity) return -1;
        if(a.gravity > b.gravity) return 1;
        if(a.gravity === b.gravity) return 0;
    });
    renderPlanets(newPlanets);
});


