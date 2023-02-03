function ContactUs() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Please fill out the form below to contact us:</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
