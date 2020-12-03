import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
