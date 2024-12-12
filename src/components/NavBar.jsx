import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/mailboxes">
          <li>MailboxList</li>
        </Link>
        <Link to="/new-mailbox">
          <li>MailboxForm</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
