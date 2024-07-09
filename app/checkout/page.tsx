
import CheckoutItem from "@/components/checkout-items";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";




export default function Checkout() {
  return (
    <>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="flex md:hidden">
        <MobileNav />
      </div>
      <CheckoutItem />
      <Footer />
    </>
  );
}
