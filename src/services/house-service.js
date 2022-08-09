const serverAddress = 'http://localhost:8005';

const formatHouse = ({
  id,
  title,
  description,
  price,
  img,
  city,
  condition,
}) => ({
  id,
  title,
  description,
  price,
  img,
  city: city.title,
  condition: condition.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/houses?_expand=city`);
  const houses = await response.json();

  return houses.map(formatHouse);
};

const fetchAllFormated = async () => {
  const response = await fetch(`${serverAddress}/houses?_expand=condition`);
  const houses = await response.json();

  return houses.map(formatHouse);
};

const remove = async (id) => {
  await fetch(`http://localhost:8005/houses/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const HousesService = {
  fetchAll,
  fetchAllFormated,
  remove,
};

export default HousesService;
