import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react'

type Props = {
    setSearchValue: any, 
    borderColor: string,
    inputColor: string,
    labelColor: string,
    focusedBorderColor: string,
    focusedInputColor: string,
    textValue: string,
}

const SearchBar = ({setSearchValue,
  borderColor,
  inputColor,
  labelColor,
  focusedBorderColor,
  focusedInputColor,
  textValue}: Props) => {
      const [value, setValue] = useState(textValue);
      const searchBarChanged = (e: any) => setValue(e.target.value.toLowerCase());
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
        <TextField
          onKeyDown={(e) => {e.key === 'Enter' && setSearchValue(value)}}
          label={textValue}
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiInputLabel-root": { color: inputColor }, //styles the label
            "& .MuiInputLabel-root.Mui-focused": { color: focusedInputColor },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": { borderColor: borderColor },
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              "& > fieldset": {
                borderColor: focusedBorderColor,
              },
            },
            input: { color: inputColor },
            label: { color: labelColor },
          }}
          onChange={searchBarChanged}
        />
      </Grid>
    </Grid>
  )
}

export default SearchBar