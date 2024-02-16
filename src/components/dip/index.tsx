import Form from "./form";

// const CreateBookForm = () => {
//   const handleCreateBook = async (e: FormEvent<HTMLFormElement>) => {
//     try {
//       const formData = new FormData(e.currentTarget);
//       await axios.post("https://myapi.com/books", formData);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   return <BookForm onSubmit={handleCreateBook} />;
// };

const DependencyInversion = () => {
  const handleSubmit = (e: any) => {
    const formData = new FormData(e.currentTarget);
    console.log(formData);

    alert(formData);
  };
  return (
    <div>
      <h2> Dependency Inversion </h2>

      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default DependencyInversion;
