import { Link } from "react-router-dom";

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailboxlist</h2>
      <ul>
        {mailboxes.map((mailbox) => (
          <Link
          key={mailbox._id}
          to={`/mailboxes/${mailbox._id}`}
          >
            <li>mailbox {mailbox._id}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
