import { Link } from 'react-router-dom';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Akdeniz',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Sebzeli',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Ispanaklı ve Mantarlı',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div>
      <Link to="/menu">&larr; Menüye dön</Link>

      <h2>%NAME%, sepetin</h2>

      <div>
        <Link to="/order/new">Pizzaları sipariş et</Link>
        <button>Sepeti temizle</button>
      </div>
    </div>
  );
}

export default Cart;
