import styles from './Postboxadm.module.css'
import Link from 'next/link'
import { Cookies } from 'react-cookie'
import axios from 'axios'
import { URL_API } from '../../utils/config'

export default (props) => {

    async function deletePost(id) {
        const cookie = new Cookies()
        const token = cookie.get('token')
        axios.defaults.headers.Authorization = 'Bearer ' + token
        try {
            await axios.delete(URL_API + '/admin/posts/' + id) 
            props.load()
        } catch (e) {
            alert('Não foi possivel deletar o post!')
        }
    }

    return (
        <div className="box" id={styles["box"]}>
            <Link href={props.link}>
                <a className={styles["link"]}>

                    <div className={styles["content"]}>

                        <div className={styles["resultimg"]}>
                            <img className={styles["minibanner"]} src={props.src}/>
                        </div>

                        <div className={styles["text"]}>
                            <div>
                                <h1 className={styles["titulo"]}>{props.title}</h1>
                                <p>
                                    {props.description}
                                </p>
                            </div>
                        </div>

                    </div>
                </a>
            </Link>

            <button 
                id={styles["btndelete"]} 
                onClick={() => {
                    deletePost(props.id)
                }}
                className="button is-danger">
                    <img id={styles["iconlixo"]} src="./assets/icons/lixo.svg"/>
            </button>
        </div>
    )
}