import toast from 'react-hot-toast';
import { create } from 'zustand';

// Define the product type
type Product = {
  id: string;
  title: string;
  price: number;
  supplier: string;
  reviewno: number | null;
  imageString: string;
};

// Define the state type
type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const cart = get().cart;
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      set({ cart: [...cart, product] });
      toast.success("Product added to cart");
    } else {
      console.log("Product already in cart");
      toast.error("Product already in cart");
    }
  },
  removeItem: (id) => set((state) => ({
    cart: state.cart.filter((product) => product.id !== id),
  })),
  removeAll: () => set({ cart: [] }),
}));

export default useCartStore;
