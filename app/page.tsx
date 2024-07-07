import Banner from "@/components/banner";
import BestSellers from "@/components/best-sellers";
import CeoFeedback from "@/components/ceofeedback";
import ClientFeedback from "@/components/client-feedback";
import Consult from "@/components/consult";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewSection from "@/components/new-section";
import Overview from "@/components/overview";



export default function Home() {
  return (
    <>
      <Navbar />
      Hello world
      <Overview />
      <BestSellers />
      <Consult />
      <NewSection />
      <Banner />
      <CeoFeedback />
      <ClientFeedback />
      <Footer />
    </>
  );
}
