import Header from '../components/admin/Headeradm'
import Footer from '../components/site/Footer'
import styles from '../components/admin/Postar.module.css'

export default () => {
    return (
        <>
            <Header/>
            <div className="container box" id={styles["formpost"]}>
                <form>
                    <h1>Insira os dados da postagem:</h1>
                    
                    <div className={styles["itens"]}>
                        <div className={styles["titulo"]}>
                            <h2>Titulo:</h2>
                            <input className="input" type="text"/>
                        </div>
                        
                        <div className={styles["descrição"]}>
                            <h2>Descrição <small>(Resumo da matéria para os resultados da pesquisa.)</small> :</h2>
                            <input className="input" type="text"/>
                        </div>
                        
                        <div className={styles["banner"]}>
                            <h2>Banner <small>(1920 x 620)</small> :</h2>
                            <input type="file"/> inserir o banner (resolução:)
                        </div>
                        
                        <div className={styles["materia"]}>
                            <h2>Matéria:</h2>
                            <input className="input" type="text" placeholder="input de html com tags e 2 imagens"/>
                        </div>
                        
                        <div className={styles["categoria"]}>
                            <h2>Categoria:</h2>
                            <input type="radio" name="gender" value="mobile"/>
                            <label htmlFor="male">Mobile</label><br/>
                            <input type="radio" name="gender" value="pc"/>
                            <label htmlFor="female">Pc</label><br/>
                            <input type="radio" name="gender" value="games"/>
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