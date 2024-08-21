

import CartItems from "@/components/cart-items";
import Footer from "@/components/footer";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import Related from "@/components/related";



export default function Cart() {




  return (
    <>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="flex md:hidden">
        <MobileNav />
      </div>
      <CartItems />
      <Related />
      <Footer />
    </>
  );
}
