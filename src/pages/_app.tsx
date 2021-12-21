import '../styles/global.scss'
import Header from "../componentes/Header"

import styles from '../styles/app.module.scss';
import Player from '../componentes/Player';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.apprapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )

}
export default MyApp
