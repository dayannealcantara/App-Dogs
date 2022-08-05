import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'


import styles from './Login.module.css';

import Input from '../../Components/Form/Input'
import Button from '../../Components/Form/Button'
import Error from '../../Components/Helper/Error'
import useForm from '../../Hooks/useForms'

 const LoginForm = () => {
   const username = useForm();
   const password = useForm();

   const {userLogin, error, loading} = useContext(UserContext);

   async function handleSubmit(e) {
     e.preventDefault();
     if(username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
   } 
 

  return (
    <section className='animeLeft'>
      <h1 className='title'>Login</h1>
      <form className={styles.form} onSubmit={handleSubmit} >
        <Input type="text" label="Usuário" name='username' {...username}/>
        <Input type="text" label="Senha" name='password' {...password}/>
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to='/login/perdeu'>Perdeu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastra-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link className={styles.button} to='/login/criar'>Cadastro</Link>
      </div>
    
    </section>
  )
}
export default LoginForm