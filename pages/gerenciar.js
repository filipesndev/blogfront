import Header from '../components/admin/Headeradm'
import Footer from '../components/site/Footer'
import Post from '../components/admin/Postboxadm'
import styles from '../components/admin/Gerenciar.module.css'

export default () => {
    return (
        <>
            <Header/>
                <div className="container">
                    <h1 className={styles["title"]}>Postagens feitas:</h1>

                    <div className={styles["posts"]}>
                        <Post src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                        <Post src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                        <Post src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                        <Post src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                        <Post src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                        <Post src="../assets/img/minibanner1.png" title="Câmera do Iphone 11 impressiona!" description="Alto desempenho, fotos rapidas, foco dinamico e preciso, alta resolução aliada ao processador potente do aparelho são alguns dos pontos que fazem dele uma otima pedida para quem quer registrar seus momentos." />
                    </div>
                </div>
            <Footer/>
        </>
    )
}