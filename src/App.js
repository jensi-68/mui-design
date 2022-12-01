import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
// import Box from '@mui/material/Box';
// import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// import LoadingButton from '@mui/lab/LoadingButton';
// import SaveIcon from '@mui/icons-material/Save';
// import { Autocomplete } from '@mui/material';
// import TextField from '@mui/material';

// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   {
//     label: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   }
// ]

function App() {
  return (
    <>
       <Button variant="contained">Hello World</Button> 
       <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>
<Button variant="contained">Contained</Button>
<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>
<Button color="secondary">Secondary</Button>
<Button variant="contained" color="success">
  Success
</Button>
<Button variant="outlined" color="error">
  Error
</Button>
<Stack direction="row" alignItems="center" spacing={2}>
<Button variant="contained" component="label">
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>
<IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
</Stack>
<Button variant="outlined" startIcon={<DeleteIcon />}>
  Delete
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
<IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>
<IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
<IconButton aria-label="fingerprint" color="success">
  <Fingerprint />
</IconButton>
{/* <LoadingButton loading variant="outlined">
  Submit
</LoadingButton>
<LoadingButton loading loadingIndicator="Loading…" variant="outlined">
  Fetch data
</LoadingButton>
<LoadingButton
  loading
  loadingPosition="start"
  startIcon={<SaveIcon />}
  variant="outlined"
>
  Save
</LoadingButton> */}
<Checkbox {...label} defaultChecked />
<Checkbox {...label} />
<Checkbox {...label} disabled />
<Checkbox {...label} disabled checked />
       {/* <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={top100Films}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Movie" />}
/> */}
<Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
  {...label}
  defaultChecked
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/>

<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
<Checkbox
  {...label}
  icon={<BookmarkBorderIcon />}
  checkedIcon={<BookmarkIcon />}
/>

{/* <FormControlLabel
  label="Parent"
  control={
    <Checkbox
      checked={checked[0] && checked[1]}
      indeterminate={checked[0] !== checked[1]}
      onChange={handleChange1}
    />
  }
/>
{children} */}


<Fab color="primary" aria-label="add">
  <AddIcon />
</Fab>
<Fab color="secondary" aria-label="edit">
  <EditIcon />
</Fab>
<Fab variant="extended">
  <NavigationIcon sx={{ mr: 1 }} />
  Navigate
</Fab>
<Fab disabled aria-label="like">
  <FavoriteIcon />
</Fab>



    </>
  );
}

export default App;
