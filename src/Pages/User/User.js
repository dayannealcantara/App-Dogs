import { Routes, Route } from 'react-router-dom';
import UserHeader from './UserHeader'
import Feed from '../Feed/Feed'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

 const User = () => {
  return (
   <section className="container">
     <UserHeader/>
     <Routes>
       <Route path='/' element={<Feed/>}/>
       <Route  path='postar' element={<UserPhotoPost/>}/>
       <Route path='estatistica' element={<UserStats/>}/>
     </Routes>
   </section>
  )
}
export default User