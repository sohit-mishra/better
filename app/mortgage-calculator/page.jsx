import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterTop from "../components/FooterTop";
import HomeBuying from "../components/mortgage-calculator/homebuying";
import MortgageCalculator from "../components/mortgage-calculator/MortgageCalculator";
import Opinions from "../components/mortgage-calculator/opinions";

export const metadata = {
  title: "Mortgage Calculator with PMI & Taxes | Better Mortgage",
};

export default function MortgageCalculatorPage() {
  return (
    <>
      <Navbar />
      <hr className="border-t-2 border-gray-300 w-full mx-auto my-8" />
      <HomeBuying />
      <hr className="border-t-2 border-gray-300 w-full mx-auto my-8" />
      <MortgageCalculator />
      <Opinions />
      <FooterTop />
      <Footer />
    </>
  );
}
