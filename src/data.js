const filterData = (database, condition, key) => {
  return database.filter(item => item[key].includes(condition));
};

const orderNames = (database, sortBy, order) => {
  if (order === "A-Z") {  
    return database.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : -1);
  } else {
    return database.sort((a, b) => a[sortBy] > b[sortBy] ? -1 : 1)
  }
}

app = {
  filterData,
  orderNames
}

