import { useState } from "react";
import { TextField } from "@material-ui/core";
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

const Login = () => {
  const [error, setError] = useState("");

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required(""),
    password: yup.string().required(""),
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
        <Bar />
        <h1> Login </h1>
        <Form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              label="Username"
              type="text"
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("username")}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          </div>
          <div>
            <TextField
              label="Senha"
              type="password"
              margin="normal"
              variant="outlined"
              color="primary"
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>
          <Button text="Entrar"></Button>
          <p>
            {" "}
            Nao tem cadastro? Crie uma conta <Link to={"/signup"}>aqui</Link>
          </p>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          style={{ marginBottom: "500px" }}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="colored"
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Countainer>
    </div>
  );
};

export default Login;
