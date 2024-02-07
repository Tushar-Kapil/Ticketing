import { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  const { doRequest, errors } = useRequest({
    url: "/api/payments",
    method: "post",
    body: {
      orderId: order.id,
    },
    onSuccess: (payment) => Router.push("/orders"),
  });
  useEffect(() => {
    const findTimeLeft = () => {
      const time = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(time / 1000));
    };
    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  if (timeLeft < 0) {
    return (
      <div className="container text-center text-muted">
        <h3>Uh oh 😕. Order expired. Please Try Again.</h3>
      </div>
    );
  }

  return (
    <div className="container text-center text-muted">
      <h3>{timeLeft} seconds left to pay for the order</h3>

      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51N7iYVSH9NxsVFg1YR2SXNR66dYGPuABI9ra009PWaTFDtg5gIj6Jo2PoWcCHpnHXuSPSCShY7jjDTEIYIoijFpl00FeIcJQFl"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
