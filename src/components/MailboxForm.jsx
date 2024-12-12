import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailboxForm = ({ addBox }) => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    _id: 1,
    boxSize: "small",
    boxholder: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.boxSize && formData.boxholder) {
      addBox(formData);
      navigator("/mailboxes");
    }else{
        alert('please fill the blank');
    }
  };

  return (
    <>
      <p>New Mailbox</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxholder">Enter a Boxholder</label>
        <input
          type="text"
          id="boxholder"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Select a Box Size</label>
        <select
          name="boxSize"
          id="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option value="small">small</option>
          <option value="big">big</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default MailboxForm;
