import Register from '../../components/admin/Register'
import Header from '../../components/admin/Headeradm'
import { handleAuthSSR } from '../../utils/auth'

export default function Registrar(props) {
    return (
        <div className="pagina">
            <Header/>
            <Register/>
        </div>
    )
}

Registrar.getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)
    return {sucesso: true}
}