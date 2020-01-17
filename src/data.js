
const filterData = (database, condition) => {
  return database.filter(item => item.includes(condition));
};

const orderNames = (order, database) => {
  if (order === "A-Z") {
    return database.sort((a, b) => a.championName > b.championName ? 1 : -1);
  } else {
    return database.sort((a, b) => a.championName > b.championName ? -1 : 1)
  }
}

window.app = {
  filterData,
  orderNames
}

