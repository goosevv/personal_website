const pokemonElement = document.querySelector('.pokemon');
const pokeball = document.querySelector('.pokeball');
// Масив URL-адрес правильних спрайтів покемонів
const pokemonSprites = [
  "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif",
  "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif",
  "https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif",
  "https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif"
];

// Функція для зміни покемона кожні 5 секунд
function changePokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonSprites.length);
  pokemonElement.src = pokemonSprites[randomIndex];
}

// Змінювати покемона кожні 5 секунд
setInterval(changePokemon, 3000);

function teleportPokemon() {
    const pokemon = document.querySelector('.pokemon');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
  
    pokemon.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
  
  setInterval(teleportPokemon, 3000);
  

const pokemon = document.querySelector('.pokemon');

pokeball.addEventListener('click', () => {
    // Запускаємо анімацію кидка
    pokeball.style.animation = 'throwPokeball 1s forwards';
  
    setTimeout(() => {
      // Робимо покемона невидимим після "захоплення"
      pokemon.style.opacity = '0';
  
      // Повертаємо покебол назад
      pokeball.style.animation = 'returnPokeball 1s forwards';
    }, 1000);
  });
