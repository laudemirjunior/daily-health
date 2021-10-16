import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const CardCreateGroup = ({ createHabit, open, showCard }) => {
  const formSchema = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
    category: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    createHabit(data);
  };

  const notify = () => toast.error("Here is your toast.");

  return (
    <StyleCardCreate open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Criar Grupo</h1>
        <AiOutlineCloseCircle onClick={showCard} />
        <TextField {...register("title")} label="Title" type="text"></TextField>
        <TextField {...register("name")} label="Name" type="text"></TextField>
        <TextField
          {...register("description")}
          label="Description"
          type="text"
        ></TextField>
        <TextField
          {...register("category")}
          label="Category"
          type="text"
        ></TextField>
        <Button onClick={notify} type="submit">
          Criar Grupo
        </Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreateGroup;
