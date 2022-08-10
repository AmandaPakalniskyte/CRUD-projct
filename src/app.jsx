import * as React from 'react';
import { Box } from '@mui/material';
import HousesService from 'services/house-service';
import { CupCard } from './components';

const App = () => {
  const [houses, setHouses] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedHouses = await HousesService.fetchAll();
      setHouses(fetchedHouses);
    })();
  }, []);

  const deleteItem = async (id) => {
    const itemDeleted = await HousesService.remove(id);
    if (itemDeleted) {
      const fetchedHouses = await HousesService.fetchAll();
      setHouses(fetchedHouses);
    }
  };

  return (
    <Box display="flex">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: 2,
        px: 2,
      }}
      >
        <Box>
          {houses.map(({
            id,
            title,
            description,
            city,
            condition,
            price,
            img,
          }) => (
            <Box key={id} item mb={5}>
              <CupCard
                title={title}
                description={description}
                img={img}
                city={city}
                condition={condition}
                price={price}
                onDelete={() => deleteItem(id)}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box>hahah</Box>
    </Box>
  );
};

export default App;
