import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const [mailbox, setMailbox] = useState({});
  useEffect(() => {
    const selectedMailbox = mailboxes.find((mabox) => mabox._id == mailboxId);
    setMailbox(selectedMailbox);
    console.log(selectedMailbox,mailbox);
  }, []);
  return (
    <>
      <h2>Mailbox {mailbox._id}</h2>
      <p>Details</p>
      <p>Boxholder: {mailbox.boxholder}</p>
      <p>Box Size: {mailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
