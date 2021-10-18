import { StyleCardCreate } from "./styles";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import Button from "../button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const CardCreateSettings = ({ open, handleNewUserName }) => {
  const formSchema = yup.object().shape({
    userName: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("UserName alterado com sucesso!");

  const onSubmit = (id) => {
    handleNewUserName(id);
    open();
    notify();
  };
  return (
    <>
      <StyleCardCreate>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="title">Mudar Nome de Usuario</h1>
          <AiOutlineCloseCircle onClick={open} />
          <TextField
            {...register("userName")}
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
