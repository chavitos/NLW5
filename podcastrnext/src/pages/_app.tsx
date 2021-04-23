import { Header } from '../components/Header'
import { Player } from '../components/Player'

import '../style/global.scss'
import styles from '../style/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
