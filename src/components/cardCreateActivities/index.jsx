import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";
import { useContext } from "react";
import { ActivitiesContext } from "../../Providers/activities";
import { useParams } from "react-router";

const CardCreateActivities = ({ openShowActivities }) => {
  const { id } = useParams();

  const formSchema = yup.object().shape({
    title: yup.string().required("Título obrigatório!"),
    date: yup.string().required("Data obrigatório!"),
    time: yup.string().required("Horário obrigatório!"),
  });

  const { createActivity, searchActivities } = useContext(ActivitiesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("Grupo criado com sucesso!");

  const onSubmit = ({ title, date, time }) => {
    createActivity({
      title,
      group: id,
      realization_time: `${date}T${time}:00Z`,
    });
    openShowActivities();
    notify();
    searchActivities(id);
  };

  return (
    <StyleCardCreate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Criar atividade</h2>
        <AiOutlineCloseCircle onClick={openShowActivities} />
        <TextField
          {...register("title")}
          type="text"
          label="Título"
          helperText={errors.title?.message}
          error={!!errors.title}
        />
        <TextField
          {...register("date")}
          type="date"
          helperText={errors.date?.message}
          error={!!errors.date}
        />
        <TextField
          {...register("time")}
          type="time"
          helperText={errors.time?.message}
          error={!!errors.time}
        />
        <Button onClick={notify} type="submit">
          Criar atividade
        </Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreateActivities;
