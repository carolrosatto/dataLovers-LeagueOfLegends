const database = LOL.data;
const printTag = document.getElementById("cards-div");
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

const addCard = (arr) => {
  let card = "";
  card += curiosity()
  arr.forEach((char) => {
    card += `<div class ="cards">
      <div class="img-container"><img class="char-img" src="${char.img}"/></div>
      <div class="title-container">
      <h4>${char.championName}</h4>
      <h5>${char.title}</h5></div>
      <section class="char-properties">
          <p>Função: ${char.position}</p>
          <p>HP: ${char.hp}</p>
          <p>Armadura: ${char.armor}</p>
          <p>Ataque: ${char.attack}</p>
          <p>Defesa: ${char.defense}</p>
      </section>
      </div>`
  })
  printTag.innerHTML = card;
};
const curiosity = () => {
  return `<div class ="card-best">
  <p class='curios-title'>Curiosidades:</p>
    <ul class="list-best">
    <li>Maior ataque: ${bestAttack}</li>
    <li>Maior defesa: ${bestDefense}</li>
    <li>Maior HP: ${bestHP}</li>
    <li>Maior armadura: ${bestArmor}</li>
    </ul>
    </div>`
}

onload = () => addCard(champCardInfo);

orderInput.addEventListener("change", (e) => {
  let orderValue = e.target.value;
  let ordered = app.orderNames(champCardInfo, "championName", orderValue);
  addCard(ordered);
  return ordered;
})

filterChampion.addEventListener("change", (e) => {
  let positionValue = e.target.value;
  let filterPosition = app.filterData(champCardInfo, positionValue, "position")
  addCard(filterPosition);
});

const name = champCardInfo.map(champ => champ.championName);

const allAttack = champCardInfo.map((char) => char.attack);
const bestAttack = name[(allAttack.indexOf(Math.max.apply(Math, allAttack)))]
const allHP = champCardInfo.map((char) => char.hp);
const bestHP = name[(allHP.indexOf(Math.max.apply(Math, allHP)))]
const allArmor = champCardInfo.map((char) => char.armor);
const bestArmor = name[(allArmor.indexOf(Math.max.apply(Math, allArmor)))]
const allDefense = champCardInfo.map((char) => char.defense);
const bestDefense = name[(allDefense.indexOf(Math.max.apply(Math, allDefense)))]
