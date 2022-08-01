import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Form/Button'




 const LoginForm = () => {
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')

  function handleSubmit(e){
    e.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({ username, password})
    })
    .then((response) =>{
      // console.log(response);
      return response.json();
    })
    .then((json) => {
      // console.log(json)
    })

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