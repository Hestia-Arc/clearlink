import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ItemBox = () => {
    return (
<Stack>
<img alt='icon' />
    <Typography variant="h4" ></Typography>
    <Typography variant="h4" ></Typography>

</Stack>
    )
}
function About() {
  return (
    <Box>
        <Stack spacing={2}>
            <Typography>The ClearLink Advantage</Typography>
            <Typography variant='heading2'>Why choose ClearLink?</Typography>
            <Typography variant='text1'>In a world where connection is everything, ClearLink takes the lead. Our cutting-edge video conferencing app offers:</Typography>

        </Stack>

        {/* --------- */}
        <Stack direction='row' spacing={2}>
    <Box>

    </Box>

</Stack>
    </Box>
  )
}

export default About