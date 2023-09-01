import { Box, TextField, Button } from '@mui/material';
import useCollection from '../Hooks/useCollection';
import { useState } from 'react';
import Gallery from './Gallery';

const WalletInput = () => {
  const [solanaAddress, setSolanaAddress] = useState<string>('');

  const { imageData, testData } = useCollection(solanaAddress);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newSolanaAddress = formData.get('solanaAddressInput') as string;
    setSolanaAddress(newSolanaAddress);
  };
  return (
    <>
      <div className='flex items-center justify-center mt-3'>
        <Box component='form' autoComplete='off' onSubmit={handleSubmit}>
          <div className='mt-5 '>
            <TextField
              required
              id='solanaAddressInput'
              name='solanaAddressInput'
              label='Enter Solana Address...'
              type='text'
            />
          </div>
          <div className='flex items-center justify-center mt-3'>
            <Button type='submit' variant='outlined'>
              Submit
            </Button>
          </div>
        </Box>
      </div>
      <div className='bg-whitesmoke mt-3'>
        <Gallery imageData={imageData} testData={testData} />
      </div>
    </>
  );
};

export default WalletInput;
