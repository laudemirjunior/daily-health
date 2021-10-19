import { useState } from 'react'
import { TextField, InputAdornment, IconButton } from "@material-ui/core"
import { Countainer, Form, Animate_div,Poligon } from "./styles"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useHistory,Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/button'
import axios from 'axios'
import * as yup from 'yup'
import Lottie from "react-lottie";
import animationData from "../../animation/animate-sign-up.json";
import Bar from "../../components/bar"
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const SignUp = () => {

  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState('password');

  const history = useHistory()

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório*"),
    email: yup.string().email("Email inválido*").required("Campo obrigatório*"),
    password: yup.string().required("Campo obrigatório*").min(8, "Mínimo de 8 dígitos*")
    .matches(
      /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial*"),
    confirm_password: yup.string().required("Você deve confirmar sua senha!").oneOf([yup.ref("Password")], "Senha não confere com a senha criada acima!")
       
  })

  const { 
      register,
      handleSubmit,
      formState: {errors}
  } = useForm({resolver: yupResolver(schema)})


  const handleForm = (data) => {
    
    console.log(data)

    axios.post('https://kenzie-habits.herokuapp.com/users/', data).then((response) => console.log(response))
    .then((_) =>  history.push('/login') ).catch((err) => setError(err) )

    console.log(error)
}

  const [animationState, setAnimationState] = useState({
    isStopped: false,
    isPaused: false,
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
    <Bar />
    <div style={{display:'flex'}}>
      <Animate_div>
        <Lottie
          options={defaultOptions}
          height={'38vw'}
          width={'38vw'}
          speed={0.95}
          isStopped={animationState.isStopped}
          isPaused={animationState.isPaused}
        />
      </Animate_div>
      <Poligon>
            
      </Poligon>
      <Countainer>
        <h1> Cadastro </h1>
        <Form onSubmit={handleSubmit(handleForm)}>
          <div>
            <TextField
              className='input' 
              label='Username'
              type='text'
              margin='normal'
              variant="outlined"
              color='primary'
              {...register('username')}
              error={!!errors.username}
            /> 
          </div>
            <p className='error'>{errors.username?.message}</p>                     
          <div>
            <TextField 
              className='input'
              label='E-mail'
              type='text'
              margin='normal'
              variant="outlined"
              color='primary'
              {...register('email')}
              error={!!errors.email}
              /> 
          </div>
            <p className='error'>{errors.email?.message}</p>                     
          <div>
            <TextField 
              className='input'
              label='Senha'
              type='password'
              margin='normal'
              variant="outlined"
              color='primary'
              {...register('password')}
              error={!!errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                    className='visibilityButton' 
                    onClick={() => showPassword === 'password' ? setShowPassword('text') 
                      : setShowPassword('password')
                    }
                    aria-label="toggle password visibility"
                    >
                      {showPassword === 'password' ? <VisibilityOffIcon /> : <VisibilityIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />      
          </div>
             <p className='error password_error'>{errors.password?.message}</p>
             <div>
            <TextField
              className='input'
              label='Confirmar senha'
              type='password'
              margin='normal'
              variant="outlined"
              color='primary'
              {...register('confirm_password')}
              error={!!errors.confirm_password}
            />      
          </div>
             <p className='error'>{errors.confirm_password?.message}</p>         
            <Button>Cadastrar</Button>
        </Form>
      </Countainer>
    </div>
    </>

  )
};

export default SignUp;
