// https://dev.to/mikhaelesa/dependency-inversion-principle-in-react-5287#:~:text=Dependency%20Inversion%20in%20React%20involves,allows%20for%20easier%20code%20maintenance.

const Form = ({ onSubmit }: { onSubmit: any }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="pwd" />
      <input type="password" name="pwd" />
      <input type="submit" />
    </form>
  );
};

export default Form;
