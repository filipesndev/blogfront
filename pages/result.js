import Link from 'next/link'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import Resultbox from '../components/site/Resultbox'
import styles from '../components/site/Result.module.css'

export default (props) => {
    return (
        <>
            <Header/>
            <div className="container" id={styles["content"]}>
                <div className={styles["results"]}>
                    <div className={styles["titulo"]}>
                        <img className={styles["icontitle"]} src="./assets/icons/mobile.svg"/>
                        <h1>Resultados:</h1>
                    </div>
                    <Resultbox src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                    <Resultbox src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                    <Resultbox src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                    <Resultbox src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                    <Resultbox src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                    <Resultbox src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                </div>

                <div className={styles["ads"]}>
                    <img src="./assets/img/imgads.png"/>
                    <img src="./assets/img/imgads.png"/>
                </div>
            </div>
            <Footer/>
        </>
    )
}