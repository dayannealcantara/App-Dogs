import { NavLink, useLocation } from 'react-router-dom';
import styles from './UserHeader.module.css';
import { ReactComponent as MinhasFotos } from '../../Assets/feed.svg';
import { ReactComponent as Estatistica } from '../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../Assets/sair.svg';
import { useState, useContext } from 'react';
import { UserContext } from '../../UserContext';
import UseMedia from '../../Hooks/UseMedia';
import { useEffect } from 'react';

 const UserHeaderNav = () => {
   const [mobileMenu, setMobileMenu] = useState(false)
   const {userLogout} = useContext(UserContext)
   const mobile = UseMedia('(max-width: 40rem)')

   const {pathname} = useLocation()
   useEffect(() => {
     setMobileMenu(false);
   }, [pathname])

  return (
    <>
    {mobile && (
      <button
      aria-label='Menu'
      className={`${styles.mobileButton}`}
      ></button>
    )}
    
   
   <nav className={styles.nav}>
     <NavLink to="/conta" end>
       <MinhasFotos/>
       {mobile && 'Minhas Fotos'}
     </NavLink>
     <NavLink to="/conta/estatistica">
       <Estatistica/>
       {mobile && 'Estatísticas'}
     </NavLink>
     <NavLink to="/conta/postar">
       <AdicionarFoto/>
       {mobile && 'Adicionar foto'}
     </NavLink>
     <button onClick={userLogout}>
       <Sair/>
       {mobile && 'Sair'}
     </button>
   </nav>
   </>
  )
}
export default UserHeaderNav