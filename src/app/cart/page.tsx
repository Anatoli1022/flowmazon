import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";

export const metadata = {
  title: "Your Cart - Flowmazon",
};

export async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1 className="text-3xl font-bold"> Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry cartItem={cartItem} key={cartItem.id} />
      ))}
    </div>
  );
}
