import CartItems from "@/components/cart-items";
import CheckoutItem from "@/components/checkout-items";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Related from "@/components/related";



export default function Checkout() {
  return (
    <>
      <Navbar />
      <CheckoutItem />
      <Footer />
    </>
  );
}
