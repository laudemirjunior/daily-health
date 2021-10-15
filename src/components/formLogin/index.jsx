import { TextField} from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'

const FormLogin = () => {

    const history = useHistory()

    const schema = yup.object().shape({
      username: yup.string().required(''),
      password: yup.string().required(''),
    })
  
    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({resolver: yupResolver(schema)})
  
    const handleForm = (data) => {
      axios.post('https://kenzie-habits.herokuapp.com/sessions/', data)
        .then((response) => {
            console.log(response.data)
            const{access} = response.data

            localStorage.setItem('@Doit:token', JSON.stringify(access))

            // return history.push('/dashboard')
        })
        .catch((err) => console.log(err.message)) 
      
    }

    return (
           <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField 
                        label='username'
                        margin='normal'
                        variant="outlined"
                        color='primary'
                        {...register('username')}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />                       
                </div>
                <div>
                    <TextField 
                        label='Senha'
                        type='password'
                        margin='normal'
                        variant="outlined"
                        color='primary'
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />          
                </div>
            </form>
    )
  };
  
  export default FormLogin;