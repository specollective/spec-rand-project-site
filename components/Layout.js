import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <MobileNav />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
