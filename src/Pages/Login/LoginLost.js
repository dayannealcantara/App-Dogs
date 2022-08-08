import React from 'react'
import Button from '../../Components/Form/Button'
import Input from '../../Components/Form/Input'
import Error from '../../Components/Helper/Error'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForms'
import { PASSWORD_LOST } from '../../api'

 const LoginPassword = () => {
   const login = useForm();
   const { data, loading, error, request} = useFetch()

   async function handleSubmit(e){
     e.preventDefault();
     if(login.validate()){
       const{url, options} = PASSWORD_LOST({
         login: login.value,
         url:window.location.href.replace('perdeu', 'resetar')
       });
       const { json}= await request(url, options);
       console.log(json)
     }
   }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{color:'#4c1'}}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login}/>
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      <Error error={error}/>
    </section>
  )
}
export default LoginPassword