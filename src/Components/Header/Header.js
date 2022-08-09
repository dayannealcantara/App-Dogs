import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { ReactComponent as Dogs } from '../../Assets/dogs.svg'
import { useContext } from 'react'
import { UserContext } from '../../UserContext'

 const Header = () => {
   const {data} = useContext(UserContext)
  return (
    <div className={styles.header}>
      <nav className={ `${styles.nav} container`}>
        <Link to='/' className={styles.logo}><Dogs/></Link>
        {data ? (
           <Link className={styles.login} to="/conta">
           {data.nome}
         </Link>
        ) : (
          <Link to='/login' className={styles.login}>Login / Criar</Link>
        )}      
      </nav>
    </div>
  )
}
export default Header