const filterData = (data, searchTerm) => {
  const filteredData = data.filter(item =>
    Object.values(item)
      .join(' ')
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return filteredData;
};

export default filterData;
