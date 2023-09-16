import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export const Raiting = ({rate}: {rate:number}) => {
    const [value, setValue] = React.useState<number | null>(rate/2);

  return (
    <div>
        <Box sx={{ '& > legend': { mt: 1 }}}>
       {/* <Rating name="read-only" value={value} readOnly /> */}
      <Rating name="full-rating-read" defaultValue={value!} precision={0.1} readOnly />
      
    </Box>
    </div>
    
  );
}