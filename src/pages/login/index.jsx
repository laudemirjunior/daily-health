import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { Countainer, Form, Poligon, AnimateDiv } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import Button from "../../components/button";
import * as yup from "yup";
import Lottie from "react-lottie";
import animationData from "../../animation/animate-login";
import Bar from "../../components/bar";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Redirect } from "react-router";
import { NameUserContext } from "../../Providers/nameUser";
import { AuthContext } from "../../Providers/auth";
import { HabitListContext } from "../../Providers/habitsList";
import { MyGroupListContext } from "../../Providers/myGroupList";
import { GroupListContext } from "../../Providers/groupList";
import { useContext } from "react";
import api from "../../services";
import { toast } from "react-toastify";
import { GoalsContext } from "../../Providers/goals";
import { ActivitiesContext } from "../../Providers/activities";

const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const { setNameUser } = useContext(NameUserContext);
  const { getHabitList } = useContext(HabitListContext);
  const { getMyGroupList } = useContext(MyGroupListContext);
  const { getAllGroups } = useContext(GroupListContext);
  const { searchGoals } = useContext(GoalsContext);
  const { searchActivities } = useContext(ActivitiesContext);
  const { up } = useContext(AuthContext);

  const schema = yup.object().shape({
    username: yup.string().required("Ensira seu username*"),
    password: yup.string().required("Ensira sua senha*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const constLogin = async (data) => {
    await api
      .post("/sessions/", data)
      .then(async (response) => {
        await up(JSON.stringify(response.data.access));
      })
      .then(async () => {
        await getHabitList();
        getMyGroupList();
        getAllGroups();
      })
      .then(async () => {
        setNameUser(data.username);
        await toast.success("Login feito com Sucesso!");
        return <Redirect to={"/dashboard"} />;
      })
      .catch(() => {
        toast.error("Username ou senha inválidos!");
      });
  };
  const handleForm = (data) => {
    constLogin(data);
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

  if (localStorage.getItem("@KenzieHealth:token")) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <Bar />
      <div style={{ display: "flex" }}>
        <AnimateDiv>
          <Lottie
            options={defaultOptions}
            height={"27vw"}
            width={"50vw"}
            speed={0.5}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </AnimateDiv>
        <Poligon></Poligon>
        <Countainer>
          <Form onSubmit={handleSubmit(handleForm)}>
            <h1> Login </h1>
            <div>
              <TextField
                label="Username"
                className="input"
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
                className="input"
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
            </div>

            <Button>Entrar</Button>
            <span>
              <Link to={"/signup"} className="link">
                Crie uma conta aqui!
              </Link>
            </span>
          </Form>
        </Countainer>
      </div>
    </>
  );
};

export default Login;
