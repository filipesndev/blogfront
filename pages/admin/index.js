import Header from '../../components/admin/Headeradm'
import Footer from '../../components/site/Footer'
import ListGerenciar from '../../components/admin/ListGerenciar'
import styles from '../../components/admin/Gerenciar.module.css'
import { handleAuthSSR } from '../../utils/auth'

export default function Index() {
    return (
        <>
            <Header/>
                <div className="container">
                    <h1 className={styles["title"]}>Postagens feitas:</h1>
                    <ListGerenciar />
                </div>
            <Footer/>
        </>
    )
}

Index.getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)
    return {sucesso: true}
}