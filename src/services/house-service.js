const serverAddress = 'http://localhost:8005';

const formatHouse = ({
  id,
  title,
  description,
  price,
  img,
  city,
}) => ({
  id,
  title,
  description,
  price,
  img,
  city: city.title,
});

const fetchAll = async () => {
  const response = await fetch(`${serverAddress}/houses?_expand=city`);
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
  remove,
};

export default HousesService;
