import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { Footer, Navbar } from '../components';
// Css global variables
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className="dark:bg-nft-dark bg-white min-h-screen">
      <Navbar />
      <div className="pt-65">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    {/* Font Awesome */}
    <Script src="https://kit.fontawesome.com/8a40a6fca5.js" crossOrigin="anonymous" />
  </ThemeProvider>
);
export default MyApp;
