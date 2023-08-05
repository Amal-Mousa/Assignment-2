import { useState } from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Autocomplete,
  CssBaseline
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import countries from '../constants';

const IndividualSignupForm = () => {
  const theme = createTheme();
  const [value, setValue] = useState(dayjs('2022-04-17'));

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='sm'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            borderRadius: 2,
            px: 2,
            py: 1
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  autoComplete='family-name'
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  id='country-select-demo'
                  sx={{ width: '100' }}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <Box
                      component='li'
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img
                        loading='lazy'
                        width='20'
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=''
                      />
                      {option.label} ({option.code}) +{option.phone}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Choose a country'
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password' // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Phone [start with +972]'
                  name='phone'
                  autoComplete='number'
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Confirm Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  id='gender-select-demo'
                  sx={{ width: '100%' }}
                  options={['male', 'female', 'other']}
                  autoHighlight
                  renderOption={(props, option) => (
                    <Box component='li' {...props}>
                      {option}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Gender'
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: 'gender'
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateField', 'DateField']}>
                    <DateField
                      label='Birth Date'
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      sx={{ width: '100%' }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default IndividualSignupForm;
