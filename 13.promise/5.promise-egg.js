function getChicken() {
    // return Promise.resolve('🌱 => 🐓')
    return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
}

function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}

// getChicken()
//     .catch((error) => {
//         console.log(error.name);
//         return '🐔';
//     })
//     .then((chicken) => {
//         return fetchEgg(chicken);
//     })
//     .then((egg) => {
//         return fryEgg(egg);
//     })
//     .then((friedEgg) => {
//         console.log(friedEgg);
//     });

getChicken()
    .catch(() => '🐔')
    .then(fetchEgg)
    .then(fryEgg)
    .then(console.log)