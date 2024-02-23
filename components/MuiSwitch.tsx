import {Box, FormControlLabel, Switch} from '@mui/material'
import {useState} from 'react'

export const MuiSwitch = () => {
    const [checked, setchecked] = useState(false)
    console.log({checked})

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setchecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel 
        label='Dark mode'
        control={<Switch 
        checked={checked} 
        onChange={handleChange} 
        size='small' 
        color='success'/>
        
        }/>
    </Box>
  )
}
