import { useState } from "react";
import { TextField, InputAdornment, IconButton} from "@material-ui/core";
import { Countainer, Form, Animate_div, Poligon } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Button from "../../components/button";
import axios from "axios";
import * as yup from "yup";
import Lottie from "react-lottie";
import animationData from "../../animation/animate-login";
import Bar from "../../components/bar";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState('password');
  
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Ensira seu username*"),
    password: yup.string().required("Ensira sua senha*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", data)
      .then((response) => {
        console.log(response.data);
        const { access } = response.data;

        localStorage.setItem("@Doit:token", JSON.stringify(access));

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Username / senha inválidos!"));
  };

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
     <Bar />
    <div style={{ display: "flex" }}>
      <Animate_div>
        <Lottie
          options={defaultOptions}
          height={"27vw"}
          width={"50vw"}
          speed={0.5}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </Animate_div>
      <Poligon></Poligon>
      <Countainer>
        <h1> Login </h1>
        <Form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              label="Username"
              className='input'
              type="text"
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("username")}
              helperText={errors.username?.message}
              error={!!errors.username}
            />
          </div>
          <div>
            <TextField
              label="Senha"
              className='input'
              type={showPassword}
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("password")}
              helperText={errors.password?.message}
              error={!!errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                      className='visibilityButton' 
                      onClick={() => showPassword === 'password' ? setShowPassword('text') 
                        : setShowPassword('password')
                      }
                      aria-label="toggle password visibility"
                      >
                        {showPassword === 'password' ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
            />
          </div>
          
          <Button>entrar</Button> 
          <span>
            {" "}
            Nao tem cadastro? Crie uma conta <Link to={"/signup"}>aqui</Link>
          </span>
        </Form>
      </Countainer>
    </div>
  </>
  );
};

export default Login;
