import * as React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from './image';
import TypographyLimited from './typography-limited';

const HouseCard = ({
  title,
  img,
  description,
  // city,
  price,
  onDelete,
}) => (
  <Card sx={{
    display: 'flex', height: '250px',
  }}
  >
    <Box sx={{ position: 'relative' }}>
      <Image
        src={img}
      />
    </Box>
    <CardContent sx={{
      p: 2, display: 'flex', flexDirection: 'column', alignItems: 'space-between',
    }}
    >

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      >
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="h6" component="div">{`${price} €`}</Typography>
      </Box>
      {/* <Typography variant="subtitle" component="div" sx={{ mb: 2 }}>{city}</Typography> */}
      <TypographyLimited>{description}</TypographyLimited>
      <Box width="100%" display="flex" justifyContent="center" mt={2}>
        <IconButton
          sx={{

            color: 'black',
          }}
          size="large"
          onClick={onDelete}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

export default HouseCard;
