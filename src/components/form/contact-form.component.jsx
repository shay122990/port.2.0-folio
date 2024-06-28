import "./contact-form.styles.css";
const ContactForm = ({ formData, handleChange, handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <span id="name-label">Name</span>
        <input
          type="text"
          id="user_name"
          name="user_name"
          aria-labelledby="name-label"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <span id="email-label">Email</span>
        <input
          type="email"
          id="user_email"
          name="user_email"
          aria-labelledby="email-label"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <span id="message-label">Message</span>
        <textarea
          id="message"
          name="message"
          aria-labelledby="message-label"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button value="Send" type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
