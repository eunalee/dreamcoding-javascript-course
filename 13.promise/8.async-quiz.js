function getChicken() {
    return Promise.resolve('🌱 => 🐓')
}

function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

async function cookFriedEgg() {
    const chicken = await getChicken();
    const egg = await fetchEgg(chicken);
    const friedEgg = await fryEgg(egg);

    return friedEgg
}

cookFriedEgg()
    .then(console.log);

// sol.
async function makeFriedEgg() {
    let chicken;
    try {
        chicken = await getChicken();
    } catch {
        chicken = '🐔';
    }

    const egg = await fetchEgg(chicken);

    return fryEgg(egg);
}

makeFriedEgg()
    .then(console.log);