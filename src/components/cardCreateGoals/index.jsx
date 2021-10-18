import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useContext } from "react";
import { useParams } from "react-router";
import { GoalsContext } from "../../Providers/goals";

const CardCreateGoals = ({ openShowGoals }) => {
  const { id } = useParams();
  const { createGoals } = useContext(GoalsContext);
  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório!"),
    difficulty: yup.string().required("Dificuldade obrigatória!"),
    achieved: yup.number().required("Quanto para alcançar obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("Sua atividade criada com sucesso!");

  const onSubmit = ({ title, difficulty, how_much_achieved }) => {
    createGoals({
      title,
      difficulty,
      how_much_achieved,
      group: id,
    });
    openShowGoals();
    notify();
  };

  return (
    <StyleCardCreate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Criar atividade</h2>
        <AiOutlineCloseCircle onClick={openShowGoals} />
        <TextField
          label="Título"
          type="text"
          {...register("title")}
          helperText={errors.title?.message}
          error={!!errors.title}
        />
        <TextField
          {...register("difficulty")}
          label="Dificuldade"
          type="text"
          helperText={errors.difficulty?.message}
          error={!!errors.difficulty}
        />
        <TextField
          {...register("how_much_achieved")}
          label="Quanto para alcançar"
          type="text"
          helperText={errors.achieved?.message}
          error={!!errors.achieved}
        />
        <Button type="submit">Criar Atividade</Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreateGoals;
