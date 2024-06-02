// pages/_app.js
import '../styles/global.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Analytics } from "@vercel/analytics/react"

config.autoAddCss = false
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;