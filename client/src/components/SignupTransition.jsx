import { useState } from 'react';
import { Box, Button, Grid } from '@mui/material';
import BusinessSignupForm from './BusinessSignupForm';
import IndividualSignupForm from './IndividualSignupForm';

const SignupTransition = () => {
  const [isBusiness, setIsBusiness] = useState(true);

  const handleBusinessClick = () => {
    setIsBusiness(true);
  };

  const handleIndividualClick = () => {
    setIsBusiness(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box sx={{
        display: 'flex',
        width: '64%',
      }}>
        <Button
          variant={isBusiness ? 'contained' : 'outlined'}
          sx={{
            width: '100%',
            marginTop: 3,
            marginBottom: 2,
            marginRight: '2%'
          }}
          onClick={handleBusinessClick}
        >
          Business Account
        </Button>
        <Button
          variant={isBusiness ? 'outlined' : 'contained'}
          sx={{
            width: '100%',
            marginTop: 3,
            marginBottom: 2,
            marginLeft: '2%'
          }}
          onClick={handleIndividualClick}
        >
          Individual Account
        </Button>
      </Box>

      <Grid item xs={12} md={6}>
        {isBusiness ? <BusinessSignupForm /> : <IndividualSignupForm />}
      </Grid>
    </Box>
  );
};

export default SignupTransition;
