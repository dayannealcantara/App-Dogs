import {Link} from 'react-router-dom'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Form/Button'
import useForm from '../../Hooks/useForms'
import { useEffect } from 'react'
import { TOKEN_POST, USER_GET } from '../../api';


 const LoginForm = () => {
   const username = useForm();
   const password = useForm();

   useEffect(()=>{
     const token = window.localStorage.getItem('token')
     if(token) {
       getUser(token);
     }
   },[])

   async function getUser(token) {
     const {url, options}= USER_GET(token);
     const response = await fetch(url, options);
     const json = await response.json()
   }
   async function handleSubmit(e){
    e.preventDefault();

   if(username.validate() && password.validate()){   
     const { url, options} = TOKEN_POST ({
       username: username.value,
       password: password.value,
     });

     const response = await fetch(url, options)
     const json = await response.json();
     window.localStorage.setItem('token', json.token);
     getUser(json.token)      
    }
   }
 

  return (

    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit} >
        <Input 
        type="text"
        label="Usuário"
        name='username'   
        {...username}        
        />
         <Input 
        type="text"
        label="Senha"
        name='password' 
        {...password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastrar</Link>
    </section>
  )
}
export default LoginForm