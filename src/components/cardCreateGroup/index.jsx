import { StyleCardCreate } from "./styles";
import { useForm } from "react-hook-form";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineCloseCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const CardCreateGroup = ({ open }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    description: yup.string().required("Descrição obrigatória!"),
    category: yup.string().required("Categoria obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const notify = () => toast.success("Grupo criado com sucesso!");

  const onSubmit = (data) => {
    open();
    notify();
  };

  return (
    <StyleCardCreate>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="title">Criar Grupo</h2>
        <AiOutlineCloseCircle onClick={open} />
        <TextField
          {...register("name")}
          label="Name"
          type="text"
          helperText={errors.name?.message}
          error={!!errors.name}
        />
        <TextField
          {...register("description")}
          label="Description"
          type="text"
          helperText={errors.description?.message}
          error={!!errors.description}
        />
        <TextField
          {...register("category")}
          label="Category"
          type="text"
          helperText={errors.category?.message}
          error={!!errors.category}
        />
        <Button onClick={notify} type="submit">
          Criar Grupo
        </Button>
      </form>
    </StyleCardCreate>
  );
};

export default CardCreateGroup;
