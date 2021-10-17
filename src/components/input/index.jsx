import { TextField } from "@material-ui/core";

const Input = () => {
  return (
    <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </div>
  );
};

export default Input;
