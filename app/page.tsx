import Footer from "./components/Footer";
import FooterTop from "./components/FooterTop";
import Trustpilot from "./components/home/Trustpilot";
// import Question from "./components/home/question";
import HomePage from "./components/home/home";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Trustpilot />
      {/* <Question /> */}
      <FooterTop />
      <Footer />
    </>
  );
}
