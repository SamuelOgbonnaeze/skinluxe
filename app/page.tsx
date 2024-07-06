import Banner from "@/components/banner";
import CeoFeedback from "@/components/ceofeedback";
import ClientFeedback from "@/components/client-feedback";
import Consult from "@/components/consult";
import NewSection from "@/components/new-section";



export default function Home() {
  return (
    <>
      Hello world
      <Consult />
      <NewSection />
      <Banner />
      <CeoFeedback />
      <ClientFeedback />
    </>
  );
}
