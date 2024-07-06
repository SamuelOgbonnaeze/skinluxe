import Banner from "@/components/banner";
import CeoFeedback from "@/components/ceofeedback";
import ClientFeedback from "@/components/client-feedback";
import NewSection from "@/components/new-section";



export default function Home() {
  return (
    <>
      Hello world
      <NewSection />
      <Banner />
      <CeoFeedback />
      <ClientFeedback />
    </>
  );
}
