<<<<<<< HEAD
import { StyleButton } from "./styles";

const Button = ({ children, ...rest }) => {
  return <StyleButton {...rest}>{children}</StyleButton>;
=======
import {StyleButton} from "./styles";

const Button = ({text}) => {
  return <StyleButton>{text}</StyleButton>;
>>>>>>> origin/feature/page_login
};

export default Button;
