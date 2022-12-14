import styles from './FeedPhotos.module.css'

import FeedPhotosItem from './FeedPhotosItem';
import { useEffect } from 'react';
import useFetch from '../../Hooks/useFetch'
import {PHOTOS_GET} from '../../api'
import Error from '../../Components/Helper/Error'
import Loading from '../../Components/Helper/Loading';

 const FeedPhotos = () => {
   const {data, loading, error, request} = useFetch();

   useEffect(() => {
     async function fetchPhotos(){
       const { url, options} = PHOTOS_GET({page:1, total:6, user:0});
       const {json} = await request(url, options)
       console.log(json)
     }
     fetchPhotos();
    }, [request])

    if(error) return <Error  error={error}/>;
    if(loading) return <Loading/>
    if(data)
  return (
   <ul className={`${styles.feed} animeLeft`}>
     {data.map((photo) =>(
       <FeedPhotosItem key={photo.id} photo={photo}/>
     ))}
   </ul>
  );
  else return null
}
export default FeedPhotos