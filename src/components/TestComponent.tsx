const TestComponent = () => {
  return (
    <div>
      <h1>Soy un titulo</h1>
      <h2>Soy un subtitulo</h2>
      <p>TestComponent</p>
      <label htmlFor="Bio">Bio</label>
      <input type="text" id="Bio" />
      <input type="text" data-testid="custom_testID" />
      <input
        type="text"
        id="name"
        placeholder="Your Name"
        value={"Your Name is:"}
        onChange={() => {
          "hello";
        }}
      />
      <input type="checkbox" name="checkbox_element" id="checkbox_input" />
    </div>
  );
};

export default TestComponent;
