const Contact = () => {
  return (
    <>
      <form method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
