// Printar todos os champions na tela
const database = LOL.data;
const printTag = document.getElementById('cards-div');
const champCardInfo = [];

Object.keys(database).forEach((championName) => {
    let img = database[championName].img;
    let attack = database[championName].info.attack;
    let defense = database[championName].info.defense;
    let position = (database[championName].tags).toString();
    let title = database[championName].title;
    champCardInfo.push({ championName, img, attack, defense, position, title })
    return champCardInfo;
})

let card = "";
const addCard = (arr) => {
    arr.forEach((char) => {
        printTag.innerHTML = 
        card += `<div class ="cards">
        <div class="img-container"><img class="char-img" src="${char.img}"/></div>
        <div class="title-container"><h4>${char.championName}, ${char.title}</h3></div>
        <section class="char-properties">
            <p>Função: ${char.position}</p>
            <p>Ataque: ${char.attack}</p>
            <p>Defesa: ${char.defense}</p>
        </section>
        </div>`
    })
};

onload = () => addCard(champCardInfo);


//Botão que filtra por função [Assassin, Tank, Support, Mage, Fighter, Marksman]

//Botão que ordena por A-Z Z-A

//Botão que ordena por maior ataque
