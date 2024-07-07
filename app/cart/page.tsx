import CartItems from "@/components/cart-items";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Related from "@/components/related";



export default function Cart() {
  return (
    <>
      <Navbar />
      <CartItems />
      <Related />
      <Footer />
    </>
  );
}
