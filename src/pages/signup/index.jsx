import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Countainer, Form, Poligon, AnimateDiv } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/button";
import api from "../../services/";
import * as yup from "yup";
import Lottie from "react-lottie";
import animationData from "../../animation/animate-sign-up.json";
import Bar from "../../components/bar";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [showPasswordTwo, setShowPasswordTwo] = useState("password");

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório*"),
    email: yup.string().email("Email inválido*").required("Campo obrigatório*"),
    password: yup
      .string()
      .required("Campo obrigatório*")
      .min(8, "Mínimo de 8 dígitos*"),
    confirm_password: yup
      .string()
      .required("Você deve confirmar sua senha!")
      .oneOf(
        [yup.ref("password")],
        "Senha não confere com a senha criada acima!"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = (data) => {
    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    api
      .post("/users/", newUser)
      .then(() => toast.success("Conta Criada Com Sucesso!"))
      .then((_) => history.push("/login"))
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao Criar a Conta");
      });
  };

  // eslint-disable-next-line no-unused-vars
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
        <AnimateDiv>
          <Lottie
            options={defaultOptions}
            height={"33vw"}
            width={"33vw"}
            speed={0.95}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </AnimateDiv>
        <Poligon></Poligon>
        <Countainer>
          <h1>Cadastro</h1>
          <Form onSubmit={handleSubmit(handleForm)}>
            <TextField
              className="input"
              label="Username"
              type="text"
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("username")}
              helperText={errors.username?.message}
              error={!!errors.username}
            />
            <TextField
              className="input"
              label="E-mail"
              type="text"
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("email")}
              helperText={errors.email?.message}
              error={!!errors.email}
            />
            <TextField
              className="input"
              label="Senha"
              type="password"
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
                      className="visibilityButton"
                      onClick={() =>
                        showPassword === "password"
                          ? setShowPassword("text")
                          : setShowPassword("password")
                      }
                      aria-label="toggle password visibility"
                    >
                      {showPassword === "password" ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              className="input"
              label="Confirmar senha"
              type="password"
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("confirm_password")}
              helperText={errors.confirm_password?.message}
              error={!!errors.confirm_password}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      className="visibilityButton"
                      onClick={() =>
                        showPasswordTwo === "password"
                          ? setShowPasswordTwo("text")
                          : setShowPasswordTwo("password")
                      }
                      aria-label="toggle password visibility"
                    >
                      {showPasswordTwo === "password" ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />{" "}
            <Button>Cadastrar</Button>
          </Form>
        </Countainer>
      </div>
    </>
  );
};

export default SignUp;
