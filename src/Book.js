const authorStyles = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

const Book = ({ book_details, getBook }) => {
  // const getBook = book_details.getBook;
  const getSingleBook = () => {
    getBook(book_details.id);
  };
  return (
    <article className="book">
      <img src={book_details.image} alt={book_details.title} />
      <h2>{book_details.title}</h2>
      <button onClick={getSingleBook}>click me</button>
      <h4 style={authorStyles}> {book_details.author} </h4>
      <span className="number">#{book_details.id}</span>
    </article>
  );
};
export default Book;
