import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input placeholder="Search order #" value={query} onChange={(e) => setQuery(e.target.value)} />
    </Form>
  );
}

export default SearchOrder;
