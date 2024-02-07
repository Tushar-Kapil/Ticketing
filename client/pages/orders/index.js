const OrderIndex = ({ orders }) => {
  console.log(orders);
  return (
    <ul className="container w-25 list-group mt-3">
      {orders.map((order) => {
        return (
          <li key={order.id} className="list-group-item">
            {order.ticket.title} - {order.status}
          </li>
        );
      })}
    </ul>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");

  return { orders: data };
};

export default OrderIndex;
