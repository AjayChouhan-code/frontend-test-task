import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";
import { customStylesSearchInput } from "../../constants/styles";

interface SearchInputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  value: string;
}

const SearchInput = ({ value, error, onChange }: SearchInputProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search here..."
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
      sx={customStylesSearchInput(error)}
    />
  );
};

export default SearchInput;
