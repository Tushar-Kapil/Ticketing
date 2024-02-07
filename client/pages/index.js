import Link from "next/link";

const LandingPage = ({ currentUser, tickets }) => {
  const ticketList = tickets.map((ticket) => {
    return (
      <tr key={ticket.id}>
        <td>{ticket.title}</td>
        <td>{ticket.price}</td>
        <td>
          <Link
            href="/tickets/[ticketId]"
            as={`/tickets/${ticket.id}`}
            className="text-decoration-none text-white btn btn-dark btn-sm"
          >
            View
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h1 className="text-center mt-5">Tickets</h1>
      <table className="table table-hover container w-50 mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>{ticketList}</tbody>
      </table>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client, currentUser) => {
  const { data } = await client.get("/api/tickets");

  return { tickets: data };
};

export default LandingPage;
