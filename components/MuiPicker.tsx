/* import {Stack, TextField} from'@mui/material'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab';
import { SetStateAction, useState } from 'react';

export const MuiPicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState <Date | null> (null)
  const [selectedDateTime, setSelectedDateTime] = useState <Date | null> (null)
  console.log({ selectedDateTime })

  return (
    <Stack spacing={4} sx={{ width:'250px' }}>
      <DatePicker
        label='Date Picker' 
        renderInput={(params) => <TextField {...params} />}
        value={selectedDate}
        onChange={(newValue) => {

         setSelectedDate(newValue)
        }}
      />

<TimePicker
        label='Time Picker' 
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue: SetStateAction<Date | null>) => {

         setSelectedTime(newValue)
        }}
      />

<DateTimePicker
        label='Date Time Picker' 
        renderInput={(params) => <TextField {...params} />}
        value={selectedDateTime}
        onChange={(newValue) => {

         setSelectedDateTime(newValue)
        }}
      />

    </Stack>

  )
}
 */