
const filterData = (database, condition) => {
  return database.filter(item => item.includes(condition));
};

const orderNames = (database, order) => {
  if (order === "A-Z") {
    return database.sort((a, b) => a.championName > b.championName ? 1 : -1);
  } else {
    return database.sort((a, b) => a.championName > b.championName ? -1 : 1)
  }
}

app = {
  filterData,
  orderNames
}

