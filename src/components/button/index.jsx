<<<<<<< HEAD
import { StyleButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return <StyleButton {...rest}>{children}</StyleButton>;
=======

import {StyleButton} from "./styles";

const Button = () => {
  return <>
    <StyleButton>
      <span className="login">Login</span>

      <div className="ou">
        <span>ou</span>
      </div>
    </StyleButton>
    
    <StyleButton><span>Sign Up</span></StyleButton>
  </>

>>>>>>> origin/feature/pagehome
};

export default Button;
