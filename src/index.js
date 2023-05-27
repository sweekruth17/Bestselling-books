import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

const authorStyles = {
  color: "#617d98",
  fontSize: "0.75rem",
  marginTop: "0.5rem",
};

export const BookList = () => {
  const getBook = (id) => {
    let found = books.find((i) => i.id === id);
    return console.log(found.title);
  };
  return (
    <div>
      <h1>Amazon Best sellers</h1>
      <section className="booklist">
        {books.map((obj) => {
          return <Book book_details={obj} getBook={getBook} />;
        })}
      </section>
    </div>
  );
};

export const EventExamples = () => {
  const handleFormInputed = (e) => {
    console.log("handle form input.");
  };

  const handleButtonClick = () => {
    console.log("button clicked");
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("form submitted......");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInputed}
          style={{ margin: "1rem" }}
        />
      </form>
      <button style={{ margin: "1rem" }} onClick={handleButtonClick}>
        click me
      </button>
    </section>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<BookList />);
// export default Greeting;
