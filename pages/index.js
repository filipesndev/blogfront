import Link from 'next/link'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import Banner from '../components/site/Banner'
import Postbox from '../components/site/Postbox'
import styles from '../components/site/Index.module.css'

export default (props) => {

    return (
        <>
            <Header/>
            <Banner/>
            <div className="container" id={styles["content"]}>
                <div className={styles["posts"]}>
                    <div className={styles["titulo"]}>
                        <img className={styles["icontitlemobile"]} src="./assets/icons/mobile.svg"/>
                        <h1>Mobile - Últimas Postagens:</h1>
                    </div>
                    <div className={styles["mobile"]}>
                        <Postbox link="/index" src="./assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Imagens em alta qualidade e grande velocidade de captura!" />
                        <Postbox link="/index" src="./assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Imagens em alta qualidade e grande velocidade de captura!" />
                        <Postbox link="/index" src="./assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Imagens em alta qualidade e grande velocidade de captura!" />
                    </div>

                    <div className={styles["titulo"]}>
                        <img className={styles["icontitle"]} src="./assets/icons/laptop.svg"/>
                        <h1>Notebooks e PCs - Últimas Postagens:</h1>
                    </div>
                    <div className={styles["pc"]}>
                        <Postbox link="/index" src="./assets/img/minibanner2.png" title="Especificações Nvidia GTX 3070!" description="Incrivel velocidade e uso para dia a dia!"/>
                        <Postbox link="/index" src="./assets/img/minibanner2.png" title="Especificações Nvidia GTX 3070!" description="Incrivel velocidade e uso para dia a dia!"/>
                        <Postbox link="/index" src="./assets/img/minibanner2.png" title="Especificações Nvidia GTX 3070!" description="Incrivel velocidade e uso para dia a dia!"/>
                    </div>

                    <div className={styles["titulo"]}>
                        <img className={styles["icontitle"]} src="./assets/icons/game.svg"/>
                        <h1>Games e Consoles - Últimas Postagens:</h1>
                    </div>
                    <div className={styles["games"]}>
                        <Postbox link="/index" src="./assets/img/minibanner3.png" title="Xbox SX vs PS5, poder ou velocidade?" description="Qual será o maior beneficiado na proxima geração?"/>
                        <Postbox link="/index" src="./assets/img/minibanner3.png" title="Xbox SX vs PS5, poder ou velocidade?" description="Qual será o maior beneficiado na proxima geração?"/>
                        <Postbox link="/index" src="./assets/img/minibanner3.png" title="Xbox SX vs PS5, poder ou velocidade?" description="Qual será o maior beneficiado na proxima geração?"/>
                    </div>
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