import Template from '../components/site/Template'
import Header from '../components/site/Header'
import Footer from '../components/site/Footer'
import Banner from '../components/site/Bannerpost'
import styles from '../components/site/Templatepost.module.css'

export default (props) => {
    return (
        <>
            <Header/>
            <Banner src="./assets/img/bannermateria1.png"/>
            <div className={styles["pagina"]}>
                <div className="container" id={styles["indexdoconteudo"]}>

                    <div className="texto">
                        <Template titulo="Titulo Fake Padrão" conteudo={
                            <>
                                <p>O preço do PlayStation 5 (PS5) continua um mistério. O console tem lançamento marcado para o final de 2020, porém muitas dúvidas ainda rondam o videogame, em especial sobre seu valor. Alguns rumores foram reportados pelo site de análise de dados financeiros Bloomberg: a publicação afirma que o preço de produção do próximo aparelho da Sony seria de US$ 450 (aproximadamente R$ 2.010, segundo a cotação atual da moeda americana, sem impostos). De acordo com a informação, o PS5 poderia chegar ao mercado por entre US$ 399 (o mesmo do PS4, em torno de R$ 1.783) e US$ 499 (cerca de R$ 2.230). Ainda não há, porém, especulações sobre anúncios para o Brasil.</p>

                                <p>Atualmente, há alguns dados disponíveis sobre o PlayStation 5, como seu processador AMD baseado na arquitetura do Zen 2 e placa de vídeo com suporte à tecnologia Ray Tracing. Esses elementos permitem estimar um valor geral de produção do console. No entanto, ainda segundo os rumores da Bloomberg, a Sony estaria com problemas para obter sua memória RAM e memória flash. Segundo os relatos, as peças utilizadas no PlayStation 5 são componentes disputados usados na produção de smartphones como o Samsung Galaxy S20.

Alguns nomes da Sony, como o diretor financeiro Hiroki Totoki e o arquiteto chefe do PS5 Mark Cerny, já comentaram que o preço do console estará de acordo com o lançamento de produtos PlayStation anteriores. Provavelmente, a fabricante pretende evitar o estigma do PlayStation 3, lançado em 2006 com um preço acima dos concorrentes em versões de US$ 499 e US$ 599 (em torno de R$ 2.695). A maioria dos analistas também concorda que haverá apenas uma versão do PS5 no lançamento, sem um PS5 Pro.</p>

                                <p>O site de tecnologia CNET lembrou que o próprio PlayStation 4 (com o qual o PS5 terá retrocompatibilidade) tinha um preço de produção de US$ 450 e foi subsidiado pela Sony para ser lançado por US$ 399. Não é incomum empresas lançarem seus consoles um pouco abaixo do preço de produção para construir uma boa base de jogadores e recuperarem seu investimento em games e acessórios. Tarefa que seria bem fácil se rumores de GTA 6 em seu lançamento se concretizassem ou fosse revelado um trailer de gameplay.</p>

                                <p>Já o analista da empresa de consultoria Niko Partners, Daniel Ahmad, comentou que serviços de assinatura, como a PS Plus, Xbox Live Gold e Xbox Game Pass, criaram um fluxo constante de capital para as fabricantes. Segundo ele, isso poderia permitir que as empresas experimentassem mais com seus preços nessa geração.</p>

                                <p>
Vale lembrar que até agora ainda não há imagens oficiais do design do PlayStation 5 e de seu controle, supostamente chamado DualShock 5, apenas de seu Dev Kit. Uma das fotos que tem circulado na internet junto com rumores do console é do Development Kit, uma unidade feita para desenvolvedores que não necessariamente reflete o design final.</p>
                            </>
                        }/>

                    </div>

                    <div className={styles["ads"]}>
                        <img src="./assets/img/imgads.png"/>
                        <img src="./assets/img/imgads.png"/>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}