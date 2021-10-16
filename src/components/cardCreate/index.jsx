import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const CardCreate = ({ createHabit, open }) => {
  const formSchema = yup.object().shape({
    category: yup.string(),
    difficulty: yup.string(),
    frequency: yup.string(),
    how_much_achieved: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("Hábitos criado com sucesso!");

  const onSubmit = (data) => {
    createHabit(data);
    open();
    notify();
  };

  return (
    <StyleCardCreate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Criar hábito</h1>
        <AiOutlineCloseCircle onClick={open} />
        <TextField {...register("title")} label="Title" type="text"></TextField>
        <TextField
          {...register("category")}
          label="Category"
          type="text"
        ></TextField>
        <TextField
          {...register("difficulty")}
          label="Difficulty"
          type="text"
        ></TextField>
        <TextField
          {...register("frequency")}
          label="Frequency"
          type="text"
        ></TextField>
        <TextField
          {...register("how_much_achieved")}
          label="How much achieved"
          type="number"
        ></TextField>
        <Button type="submit">Criar hábito</Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreate;
