const pokedex=document.getElementById('pokedex');

const fetchPokemon=()=>{
    const promises =[];
    for(let i=152; i<=251;i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res)=>res.json()));
    }
    Promise.all(promises).then((result)=>{
        const pokemon = result.map((result)=>({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type)=>type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
});
};

const displayPokemon=(pokemon)=>{
    console.log(pokemon);
    const pokemonHTML=pokemon.map((lista)=>`
        <li class="card">
        <img class="card-image" src="${lista.image}"/>
        <h3 class="card-title">${lista.id}. ${lista.name}</h3>
        <p class="card-subtitle">Type: ${lista.type}</p>
        </li>
    `)
    .join('');
    pokedex.innerHTML=pokemonHTML;
}
fetchPokemon();