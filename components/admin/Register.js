import Link from 'next/link'
import styles from '../site/Login.module.css'
import { useState } from 'react'
import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'

export default () => {

    const [user, setUser] = useState({
        username : '',
        email: '',
        password: '',
        is_admin: 1
    })

    const cookie = new Cookies()

    function onChange (e) {
        const {name, value} = e.target
        setUser({ ...user, [name]:value  })
    }

    async function onSubmit (e) {
        try{
            e.preventDefault()
            const token = cookie.get('token')
            axios.defaults.headers.Authorization = 'Bearer ' + token 
            const resp = await axios.post(URL_API + '/admin/users', user)
            console.log(resp)
            alert('Registrado com sucesso!')
        } catch (error) {
            console.log(error)
            alert('Insira um registro válido!')
        }
    }

    return (
        <div className={styles["pagina"]}>
                <div className="box" id={styles["caixa2"]}>
                    <h1 className={styles["title"]}>Register:</h1>
                    <form className="has-icons-left" onSubmit={onSubmit}>
                        <h2 className={styles["title2"]}>Nome:</h2>
                            <input className="input" name="username" type="text" onChange={onChange} placeholder="ex: Filipe Eduardo"/>
                        <h2 className={styles["title2"]}>Email:</h2>
                            <input className="input" name="email" type="email" onChange={onChange} placeholder="ex: filipedeveloper@gmail.com"/>
                        <h2 className={styles["title2"]}>Password:</h2>
                            <input className="input" name="password" onChange={onChange} type="password"/>
                        <button className="button is-info" id={styles["botao"]} type="submit" >Registrar</button>
                    </form>
                    <Link href="/gerenciar"><a className={styles["link"]}>Voltar para o inicio</a></Link>
                </div>
        </div>
    )
}