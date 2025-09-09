import Content from "../components/start/Content";
import Footer from "../components/start/Footer";
import Navbar from "../components/start/Navbar";

export const metadata = {
  title: "Better Mortgage",
};

export default function StartPage() {
  return (
    <>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
