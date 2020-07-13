import axios from 'axios'
import Router from 'next/router'
import { Cookies } from 'react-cookie'
import { URL_API }from './config'

const cookies = new Cookies()

export async function handleAuthSSR(ctx) {

    let token = null
    let user = null
    if(ctx?.req?.headers?.cookie) {
        token = ctx.req.headers.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    } else {
        token = cookies.get('token')
    }
    try {
        const config = { headers: { Authorization: `Bearer ${token}` } }
        const resp = await axios.get(URL_API + '/admin/users', config)
        user = resp.data
    } catch (err) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/login' })
            ctx.res.end()
        } else {
            Router.push('/login')
        }
    }

    return user
}