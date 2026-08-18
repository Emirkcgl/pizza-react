// Test ID: IIDSAT

import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";

function Order() {
  const order = useLoaderData();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div>
      <div>
        <h2>Durum</h2>

        <div>
          {priority && <span>Öncelikli</span>}
          <span>Sipariş durumu: {status}</span>
        </div>
      </div>

      <div>
        <p>
          {deliveryIn >= 0
            ? `Teslimata yalnızca ${calcMinutesLeft(estimatedDelivery)} dakika kaldı 😃`
            : "Siparişin teslim edilmiş olması gerekiyordu"}
        </p>
        <p>(Tahmini teslimat: {formatDate(estimatedDelivery)})</p>
      </div>

      <div>
        <p>Pizza ücreti: {formatCurrency(orderPrice)}</p>
        {priority && <p>Öncelik ücreti: {formatCurrency(priorityPrice)}</p>}
        <p>Teslimatta ödenecek tutar: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
