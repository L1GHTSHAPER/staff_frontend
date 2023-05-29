import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { TicketService } from "../../../services/ticket.service";
import TicketItem from "../home/ticket-item/TicketItem";

const TicketDetail = () => {
  const { _id } = useParams();
  const [ticket, setTicket] = useState({});

  useEffect(() => {
    if (!_id) return;

    const fetchData = async () => {
      const data = await TicketService.getById(_id);
    //   console.log(data);

      setTicket(data);
    };

    fetchData();
  }, [_id]);
  if (!ticket?.description)
    return (
      <div>
        <p>Ticket not found</p>
        <Link to="/">Back</Link>
      </div>
    );

  return (
    <div>
      <Link to="/">Back</Link>
      <TicketItem ticket={ticket} />
    </div>
  );
};

export default TicketDetail;
