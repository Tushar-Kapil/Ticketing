import useRequest from "../../hooks/use-request";
import Router from "next/router";

const TicketShow = ({ ticket }) => {
  const { doRequest, errors } = useRequest({
    url: "/api/orders",
    method: "post",
    body: {
      ticketId: ticket.id,
    },
    onSuccess: (order) =>
      Router.push("/orders/[orderId]", `/orders/${order.id}`),
  });
  return (
    <div className="container text-center">
      <h1 className="text-center">{ticket.title}</h1>
      <h4 className="text-center mt-3">Price: ${ticket.price}</h4>
      <button
        className="btn btn-outline-dark text-center mt-3 btn-lg"
        onClick={() => doRequest()}
      >
        Purchase
      </button>
      {errors}
    </div>
  );
};

TicketShow.getInitialProps = async (context, client) => {
  const { ticketId } = context.query;

  const { data } = await client.get(`/api/tickets/${ticketId}`);

  return { ticket: data };
};

export default TicketShow;
