import Header from '../../components/admin/Headeradm'
import Footer from '../../components/site/Footer'
import styles from '../../components/admin/Postar.module.css'
import { handleAuthSSR } from '../../utils/auth'
import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import { useState, useRef } from 'react'
import Link from 'next/link'

export default function Postar(props) {
    
    const [post, setPost] = useState({
        title : '',
        description: '',
        banner: '',
        minibanner: '',
        content: '',
        category_id: 1
    })

    const [fileBanner, setFileBanner] = useState(null)
    const [fileMiniBanner, setFileMiniBanner] = useState(null)

    const cookie = new Cookies()

    function onFileChange(e) {
        if(e.target.name === 'banner') {
            setFileBanner(e.target.files[0])
        }else{
            setFileMiniBanner(e.target.files[0])
        }
    }

    function onChange(e) {
        const {name, value} = e.target
        setPost({ ...post, [name]:value  })
    }

    async function onSubmit(e) {
        try{
            e.preventDefault()
            const token = cookie.get('token')
            axios.defaults.headers.Authorization = 'Bearer ' + token 
            let resp = await axios.post(URL_API + '/admin/posts', post)
            
            const formData = new FormData()
            formData.append('image', fileBanner, fileBanner.name)
            formData.append('image', fileMiniBanner, fileMiniBanner.name)
            const config = {
                headers: {
                    'content-type' : "multipart/form-data",
                    Authorization: 'Bearer ' + token
                }
            }
            resp = await axios.post(
                URL_API + '/admin/posts/' + resp.data.id + '/images',
                formData,
                config
            )

            console.log(resp)
            alert('Postado com sucesso!')
        } catch (error) {
            console.log(error)
            alert('Erro no Post!')
        }
    }

    return (
        <>
            <Header/>
            <div className="container box" id={styles["formpost"]}>
                <form onSubmit={onSubmit}>
                    <h1>Insira os dados da postagem:</h1>
                    
                    <div className={styles["itens"]}>
                        <div className={styles["titulo"]}>
                            <h2>Titulo:</h2>
                            <input className="input" name="title" type="text" onChange={onChange}/>
                        </div>
                        
                        <div className={styles["descrição"]}>
                            <h2>Descrição <small>(Resumo da matéria para os resultados da pesquisa.)</small> :</h2>
                            <input className="input" name="description" type="text" onChange={onChange}/>
                        </div>
                        
                        <div className={styles["banner"]}>
                            <h2>Banner | <small>Tamanho Recomendado (1920 x 620)</small> :</h2>
                            <input type="file" name="banner" onChange={onFileChange} /> 
                        </div>

                        <div className={styles["banner"]}>
                            <h2>Mini Banner | <small>Tamanho Recomendado (1280 × 960)</small> :</h2>
                            <input type="file" name="minibanner" onChange={onFileChange}/> 
                        </div>
                        
                        <div className={styles["materia"]}>
                            <h2>Matéria:</h2>
                            <textarea className="textarea is-medium" name="content" rows="15" placeholder="Digite Utilizando Tags HTML" onChange={onChange}/>
                            <Link href="#"><a>Tutorial</a></Link>
                        </div>
                        
                        <div className={styles["categoria"]}>
                            <h2>Categoria:</h2>
                            <input type="radio" name="category_id" value={1} onChange={onChange}/>
                            <label htmlFor="male">Mobile</label><br/>
                            <input type="radio" name="category_id" value={2} onChange={onChange}/>
                            <label htmlFor="female">Pc</label><br/>
                            <input type="radio" name="category_id" value={3} onChange={onChange}/>
                            <label htmlFor="other">Games</label><br/>
                        </div>

                    </div>

                    <button type="submit" id={styles["btnpost"]} className="button is-info">Postar</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

/*Postar.getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)
    return {sucesso: true}
}*/