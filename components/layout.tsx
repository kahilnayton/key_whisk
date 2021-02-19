import Footer from "./Footer";
import Nav from "../components/Nav";
import Header from '../components/Header'

export default function Layout({ preview, children }) {
  return (
    <>
      <Nav />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
