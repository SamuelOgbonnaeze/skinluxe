import toast from 'react-hot-toast';
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";

// Define the product type
type Product = {
  id: string;
  title: string;
  price: string;
  supplier: string;
  reviewno: string | null;
  imageString: string;
};

// Define the state type
type CartStore = {
  items: Product[];
  addToCart: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
};

const useCart = create(
  persist<CartStore>(
    (set, get) => (
      {
        items: [],
        addToCart: (data: Product) => {
          const currentItems = get().items;
          const isItemInCart = currentItems.find((item) => item.id === data.id);

          if (isItemInCart) {
            return toast.error("Item is already in cart");
          }

          set({ items: [...get().items, data] });
          toast.success("Item is added to cart");
        },
        removeItem: (id: string) =>
          set((state) => ({
            items: state.items.filter((item) => item.id !== id),
          })),
        removeAll: () => set({ items: [] }),
      }),

    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useCart;
