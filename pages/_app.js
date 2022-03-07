import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: '#F3595E'
})


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
