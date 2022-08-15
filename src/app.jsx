import * as React from 'react';
import { Box } from '@mui/material';
import HousesService from 'services/house-service';
import FormCard from 'components/form-card';
import HouseCard from 'components/house-card';

const App = () => {
  const [houses, setHouses] = React.useState([]);

  const fetchAllHouses = async () => {
    const fetchedHouses = await HousesService.fetchAll();
    setHouses(fetchedHouses);
  };

  const createHouse = async (houseProps) => {
    await HousesService.create(houseProps);
    await fetchAllHouses();
  };

  const deleteHouse = async (id) => {
    await HousesService.remove(id);
    fetchAllHouses();
  };

  React.useEffect(() => {
    fetchAllHouses();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={10}
      py={5}
      sx={{
        backgroundColor: '#181a1a',
      }}
    >
      <FormCard onSubmit={createHouse} />
      <Box sx={{
        width: '60%',
        display: 'flex',
        flexDirection: 'column',

      }}
      >
        <Box>
          {houses.map(({
            id,
            title,
            description,
            city,
            price,
            img,
          }) => (
            <Box key={id} mb={5}>
              <HouseCard
                title={title}
                description={description}
                img={img}
                city={city}
                price={price}
                onDelete={() => deleteHouse(id)}
              />
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default App;
