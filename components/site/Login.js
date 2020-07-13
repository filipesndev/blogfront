import Head from 'next/head'
import Link from 'next/link'
import styles from './Login.module.css'
import { useState } from 'react'
import axios from 'axios'
import { URL_API } from '../../utils/config'
import { Cookies } from 'react-cookie'
import Router from 'next/router'

export default () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const cookies = new Cookies()
    
    function onChange (e) {
        const {name, value} = e.target
        setUser({ ...user, [name]:value  })
    }

    async function onSubmit (e) {
        e.preventDefault()
        try {
            const response = await axios.post(URL_API + '/login', user)
            cookies.set('token', response.data.token)
            Router.push('/admin')
        } catch (error) {
            alert('Insira Login Válido!')
        }
    }

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>TecAtlas Login</title>
            </Head>
            <div className={styles["pagina"]}>
                    <div className="box" id={styles["caixa"]}>
                        <h1 className={styles["title"]}>Login:</h1>

                        <form className="has-icons-left" onSubmit={onSubmit}>
                            <h2 className={styles["title2"]}>Email:</h2>
                                <input className="input" type="email" name="email" value={user.email} onChange={onChange} placeholder="ex: filipedeveloper@gmail.com"/>
                            <h2 className={styles["title2"]}>Password:</h2>
                                <input className="input" type="password" name="password" value={user.password} onChange={onChange}/>
                            <button className="button is-info" id={styles["botao"]} type="submit" >Entrar</button>
                        </form>

                        <Link href="/index"><a className={styles["link"]}>Voltar para o inicio</a></Link>
                    </div>
            </div>
        </>
    )
}