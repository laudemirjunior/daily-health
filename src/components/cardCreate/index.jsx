import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ShowCardsContext } from "../../Providers/showCards";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const CardCreate = ({ createHabit }) => {
  const { open, showCard } = useContext(ShowCardsContext);

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

  const onSubmit = (data) => {
    createHabit(data);
  };

  const notify = () => toast.error("Here is your toast.");

  return (
    <StyleCardCreate open={open}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Criar hábito</h1>
        <AiOutlineCloseCircle onClick={showCard} />
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
        <Button onClick={notify} type="submit">
          Criar hábito
        </Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreate;
