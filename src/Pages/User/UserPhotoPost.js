import styles from './UserPhoto.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForms'
import useFetch from '../../Hooks/useFetch'
import Input from '../../Components/Form/Input'
import Button from '../../Components/Form/Button'
import Error from '../../Components/Helper/Error'
import { PHOTO_POST } from '../../api';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso= useForm('number')
  const idade = useForm('mumber')
  const [img, setImg] = useState({})
  const { data, error, loading, request} = useFetch()
  const navigate = useNavigate()

  useEffect(()=> {
    if(data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(e) {
    e.preventDefault();
    const formData= new FormData();
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)

    const token = window.localStorage.getItem('token')
    const { url, options}= PHOTO_POST(formData, token)
    request(url, options)
  }

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw:target.files[0]
    })
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
       <Input type="text" name="nome" label="Nome" {...nome} />
       <Input type="number" name="peso" label="Peso" {...peso} />
       <Input type="number" name="idade" label="Idade" {...idade} />
       <input 
       type="file"
       className={styles.file}
       name='img'
       id="img"
       onChange={handleImgChange} 
       />
       {loading ? (
         <Button disabled>Enviando...</Button>
       ) : (
         <Button>Enviar</Button>
       )}
       <Error  error={error}/>
      </form>
      <div>
        {img.preview && (
          <div
          className={styles.preview}
          style={{ backgroundImage: `url('${img.preview}')`}}
          ></div>
        )}
      </div>
    </section>
  )
}
export default UserPhotoPost