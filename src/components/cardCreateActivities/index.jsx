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
    title: yup.string(),
    date: yup.string(),
    time: yup.string(),
  });

  const { createActivity } = useContext(ActivitiesContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
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
  };

  return (
    <StyleCardCreate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title">Criar atividade</h1>
        <AiOutlineCloseCircle onClick={openShowActivities} />
        <TextField {...register("title")} label="Title" type="text"></TextField>
        <TextField {...register("date")} type="date"></TextField>
        <TextField {...register("time")} type="time"></TextField>
        <Button onClick={notify} type="submit">
          Criar Atividade
        </Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreateActivities;
