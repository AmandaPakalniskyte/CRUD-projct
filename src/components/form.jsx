import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button } from '@mui/material';
// import HousesService from 'services/house-service';

const FormCard = ({
  onSubmit,
//   formTitle,
//   submitText,
//   color,
//   initValues,
}) => {
//   const [categories, setCategories] = React.useState([]);
  const [title, setTitle] = React.useState('');
  //   const [category, setCategory] = React.useState();
  const [price, setPrice] = React.useState('');
  const [img, setImg] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      title,
      //   categoryId: category,
      price: Number(price),
      img,
      description,
    });
  };

  //   React.useEffect(() => {
  //     (async () => {
  //       const fethedCategories = await HousesService.fetchCategories();
  //       setCategories(fethedCategories);
  //     })();
  //   }, []);

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      width="30%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      border="solid 1px black"
      height="700px"
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
        {/* <TextField
          required
          id="outlined-required"
          label="Kategorija"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {categories.map(({ id, title: categoryTitle }) => (
            <MenuItem key={id} value={id}>{categoryTitle}</MenuItem>
          ))}
        </TextField> */}
        <TextField
          label="Aprašymas"
          multiline
          rows={7}
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
