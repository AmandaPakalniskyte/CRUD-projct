import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button, MenuItem } from '@mui/material';
import HousesService from 'services/house-service';

const FormCard = ({
  onSubmit,
//   formTitle,
//   submitText,
//   color,
//   initValues,
}) => {
  const [cities, setCities] = React.useState([]);
  const [title, setTitle] = React.useState('');
  const [city, setCity] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [img, setImg] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title,
      cityId: city,
      price: Number(price),
      img,
      description,
    });
  };

  React.useEffect(() => {
    (async () => {
      const fethedCities = await HousesService.fetchCities();
      setCities(fethedCities);
    })();
  }, []);

  return (
    <Box
      onSubmit={handleSubmit}
      position="sticky"
      top={100}
      component="form"
      width="35%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="solid 1px black"
      height="780px"
      borderRadius={1}
      px={5}
      pt={6}
      sx={{
        backgroundColor: 'white',
      }}
    // sx={{
    //   '& .MuiTextField-root': { m: 1, width: '200px' },
    // }}
    >
      <Typography variant="h4" pb={6}>Namų sąrašo papildymas</Typography>
      <Box display="flex" flexDirection="column" width="100%" gap={3}>
        <TextField
          width="100%"
          label="Pavadinimas"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          type="number"
          label="Kaina"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <TextField
          select
          label="Miestas"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          {cities.map(({ id, title: cityTitle }) => (
            <MenuItem key={id} value={id}>{cityTitle}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Aprašymas"
          multiline
          rows={5}
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          label="Nuotrauka"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
      </Box>
      <Box mt={5}>
        <Button variant="contained" type="submit">Išsaugoti</Button>
      </Box>
    </Box>
  );
};

export default FormCard;
