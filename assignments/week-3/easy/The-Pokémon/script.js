document.getElementById('generate').addEventListener('click', async () => {
    const numCards = document.getElementById('numCards').value;
    const category = document.getElementById('category').value;
    const cardsContainer = document.getElementById('cardsContainer');
    cardsContainer.innerHTML = ''; // Clear previous cards

    if (numCards < 1 || numCards > 20) {
        alert('Please enter a number between 1 and 20.');
        return;
    }

    const promises = [];
    for (let i = 1; i <= numCards; i++) {
        const randomId = Math.floor(Math.random() * 898) + 1; // PokeAPI has 898 Pokémon
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`));
    }

    try {
        const responses = await Promise.all(promises);
        const pokemons = await Promise.all(responses.map(res => res.json()));
        renderCards(pokemons);
    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
    }
});

function renderCards(pokemons) {
    const cardsContainer = document.getElementById('cardsContainer');
    pokemons.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        `;
        cardsContainer.appendChild(card);
    });
}