import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
const fakeCart = [
  {
    pizzaId: 12,
    name: "Akdeniz",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Sebzeli",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Ispanaklı ve Mantarlı",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="">
      <LinkButton to="/menu">&larr; Menüye dön</LinkButton>
      <h2>%NAME%, sepetin</h2>

      <div>
        <Button to="/order/new">Pizzaları sipariş et</Button>
        <button>Sepeti temizle</button>
      </div>
    </div>
  );
}

export default Cart;
