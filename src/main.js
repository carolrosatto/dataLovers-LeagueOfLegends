// Printar todos os champions na tela
const database = LOL.data;
const printTag = document.getElementById('cards-div');
const champCardInfo = [];
const orderInput = document.getElementById("order");
const filterChampion = document.getElementById("position")

Object.keys(database).forEach((championName) => {
    let img = database[championName].img;
    let attack = database[championName].info.attack;
    let defense = database[championName].info.defense;
    let position = (database[championName].tags).toString();
    let title = database[championName].title;
    let armor = database[championName].stats.armor;
    let hp = database[championName].stats.hp;
    champCardInfo.push({ championName, img, attack, defense, position, title, armor, hp })
    return champCardInfo;
})

let card = "";
const addCard = (arr) => {
    arr.forEach((char) => {
        printTag.innerHTML = 
        card += `<div class ="cards">
        <div class="img-container"><img class="char-img" src="${char.img}"/></div>
        <div class="title-container">
        <h4>${char.championName}</h4>
        <h5>${char.title}</h5></div>
        <section class="char-properties">
            <p>Função: ${char.position}</p>
            <p>Vida: ${char.hp}</p>
            <p>Armadura: ${char.armor}</p>
            <p>Ataque: ${char.attack}</p>
            <p>Defesa: ${char.defense}</p>
        </section>
        </div>`
    })
};

onload = () => addCard(champCardInfo);
console.log(champCardInfo);

//Botão que ordena por A-Z Z-A
orderInput.addEventListener("change", (e) => {
    let orderValue = e.target.value;
    let ordered = app.orderNames(champCardInfo, orderValue);
    addCard(ordered);
    return ordered;
})

//Botão que filtra por função [Assassin, Tank, Support, Mage, Fighter, Marksman]
// filterChampion.addEventListener("change", () => {
//     addCard(app.filterData( champCardInfo, filterChampion.value))
// })
// console.log(filterChampion.value);

//Botão "Curiosidades" que traz o maior ataque, maior dano, maior vida (um de cada printado na tela)
