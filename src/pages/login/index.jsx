
import { Button} from "@material-ui/core"
import { Countainer } from "./styles"
import FormLogin from "../../components/formLogin"

const Login = () => {

  return (
    <Countainer >
          <FormLogin />
            <div className='buttons'>
                <Button size="large" type='submit' variant='contained' color='primary'>
                    Login
                </Button>
            </div>
    </Countainer >
  )
};

export default Login;
