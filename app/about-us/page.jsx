import Mission from "../components/about/mission";
import FooterTop from "../components/FooterTop";
import Footer from "../components/Footer";
import Status from "../components/about/Status";
import ChangeThing from "../components/about/ChangeThing";
import Backed from "../components/about/Backed";
import Navbar from "../components/Navbar";
import Timeline from "../components/about/timeline";
import Post from "../components/about/Post";

export const metadata = {
  title: "Our Company | Better Mortgage",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <Mission />
      <Status />
      <ChangeThing />
      <Backed />
      <Timeline />
      <Post />
      <FooterTop />
      <Footer />
    </>
  );
}
