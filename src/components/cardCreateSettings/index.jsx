import { StyleCardCreate } from "./styles";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Button from "../button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { useHistory } from "react-router";

const CardCreateSettings = ({ open, handleNewUserName, userName }) => {
  const formSchema = yup.object().shape({
    username: yup.string().required(),
  });
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("UserName alterado com sucesso!");

  const onSubmit = (data) => {
    handleNewUserName(data);
    open();
    notify();
    userName();
    history.push("/");
    history.push("/settings");
  };
  return (
    <>
      <StyleCardCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Mudar Nome de Usuario</h1>
          <AiOutlineCloseCircle onClick={open} />
          <TextField
            {...register("username")}
            label="New Username"
            type="text"
          ></TextField>
          <Button type="submit">Enviar</Button>
        </form>
      </StyleCardCreate>
    </>
  );
};

export default CardCreateSettings;
