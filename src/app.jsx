import * as React from 'react';
import { Box, Grid } from '@mui/material';
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
    <Box sx={{
      display: 'flex',
      gap: { xs: 4, xxl: 0 },
      pt: 11,
      px: 2,
    }}
    >
      <Grid container spacing={2}>
        {houses.map(({
          id,
          title,
          description,
          city,
          condition,
          price,
          img,
        }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <CupCard
              title={title}
              description={description}
              img={img}
              city={city}
              condition={condition}
              price={price}
              onDelete={() => deleteItem(id)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default App;
