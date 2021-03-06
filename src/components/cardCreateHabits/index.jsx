import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { MenuItem, TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";

const CardCreateHabits = ({ createHabit, open }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório!"),
    category: yup.string().required("Categoria obrigatória!"),
    difficulty: yup.string().required("Dificuldade obrigatória!"),
    frequency: yup.string().required("Frequência obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("Seu habito foi criado com sucesso!");

  const onSubmit = (data) => {
    createHabit(data);
    open();
    notify();
  };

  return (
    <StyleCardCreate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Criar hábito</h2>
        <AiOutlineCloseCircle onClick={open} />
        <TextField
          {...register("title")}
          label="Titulo"
          type="text"
          helperText={errors.title?.message}
          error={!!errors.title}
        />
        <TextField
          {...register("category")}
          label="Categoria"
          type="text"
          helperText={errors.category?.message}
          error={!!errors.category}
        />
        <TextField
          select
          style={{
            width: "230px",
          }}
          {...register("difficulty")}
          label="Dificuldade"
          helperText={errors.difficulty?.message}
          error={!!errors.difficulty}
        >
          <MenuItem value={"Fácil"}>Fácil</MenuItem>
          <MenuItem value={"Médio"}>Médio</MenuItem>
          <MenuItem value={"Difícil"}>Difícil</MenuItem>
        </TextField>
        <TextField
          select
          style={{
            width: "230px",
          }}
          {...register("frequency")}
          label="Frequência"
          type="text"
          helperText={errors.frequency?.message}
          error={!!errors.frequency}
        >
          <MenuItem value={"Diária"}>Diária</MenuItem>
          <MenuItem value={"Semanal"}>Semanal</MenuItem>
          <MenuItem value={"Mensal"}>Mensal</MenuItem>
        </TextField>
        <Button type="submit">Criar hábito</Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreateHabits;
