import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

interface SelectProps {}

export default function SelectItem({
  options,
  label,
  value,
  setValue,
}: {
  options: any[]
  label: string
  value: any
  setValue: any
}) {
  const [age, setAge] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {options?.map((option, i) => (
            <MenuItem key={i} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}
