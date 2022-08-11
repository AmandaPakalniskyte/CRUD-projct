const serverAddress = 'http://localhost:8005';

const formatHouse = ({
  id,
  title,
  description,
  price,
  img,
  // city,
}) => ({
  id,
  title,
  description,
  price,
  img,
  // city: city.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/houses`);
  const houses = await response.json();

  return houses.map(formatHouse);
};

const create = async (houseProps) => {
  const response = await fetch(`${serverAddress}/houses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(houseProps),
  });

  const house = await response.json();

  return house;
};

const remove = async (id) => {
  await fetch(`http://localhost:8005/houses/${id}`, {
    method: 'DELETE',
  });

  return true;
};

const HousesService = {
  fetchAll,
  create,
  remove,
};

export default HousesService;
