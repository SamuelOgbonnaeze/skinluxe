import Banner from "@/components/banner";
import BestSellers from "@/components/best-sellers";
import Carousel from "@/components/carousel";
import CeoFeedback from "@/components/ceofeedback";
import ClientFeedback from "@/components/client-feedback";
import FaceOil from "@/components/face-oil";
import Footer from "@/components/footer";
import Moisturizer from "@/components/moisturizer";
import Navbar from "@/components/navbar";
import NewSection from "@/components/new-section";
import Overview from "@/components/overview";



export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Overview />
      <BestSellers />
     
      <NewSection />
      <Banner />
      <Moisturizer />
      <FaceOil />
      <ClientFeedback />
      <Footer />
    </>
  );
}
