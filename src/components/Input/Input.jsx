const Input = () => {


  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="What needs to be done?"></input>
    </form>
  );
};

export default Input;
