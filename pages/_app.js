import '../global/styleglobal.css'
import '../node_modules/bulma/css/bulma.min.css'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps}){
    return <Component {...pageProps} />
}