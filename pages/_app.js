import '../styles/globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <div className='flex flex-col min-h-screen'>
    <Header />
    <main className='flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16'>
      <Component {...pageProps} />
    </main>
    <Footer />
  </div>
  )
}

export default MyApp
