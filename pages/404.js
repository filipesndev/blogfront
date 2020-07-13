import styles from '../components/site/404.module.css'
import Link from 'next/link'
import Img404 from '../components/site/Img404'

export default function Erro () {
    return (
        <div id={styles["div"]} className="container">
            <h1>404</h1>
            <h2>Lamento, sua página não foi encontrada! ;-;</h2>
            <Img404 />
            <Link href="/"><a>Voltar para o início</a></Link>
        </div>
    )
}