import { Routes, Route, Navigate} from 'react-router-dom'
import styles from "./Login.module.css"
import LoginCreate from '../../Pages/Login/LoginCreate'
import LoginForm from '../../Pages/Login/LoginForm'
import LoginLost from '../../Pages/Login/LoginLost'
import LoginReset from '../../Pages/Login/LoginReset'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'


 const Login = () => {
   const  {login} = useContext(UserContext);
   if (login === true) return <Navigate to='/conta'/>
  return (
    <section  className={styles.login} >
      <div className={styles.forms}>
        
        <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='criar' element={<LoginCreate/>} />
          <Route path='perdeu' element={<LoginLost/>} />
          <Route path='resetar' element={<LoginReset/>} />
        </Routes>      
      </div>
    </section>
  )
}
export default Login