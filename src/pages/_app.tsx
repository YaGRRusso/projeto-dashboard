import 'tailwindcss/tailwind.css'
import AppContext, { AppProvider } from '../data/context/appContext'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp