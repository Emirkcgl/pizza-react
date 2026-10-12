import { useState } from "react";
import Button from "../../UI/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">👋 Hoş geldin! Önce bize adını söyler misin?</p>

      <input
        type="text"
        placeholder="Adın ve soyadın"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-8 w-72 rounded-full border border-stone-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-400 md:px-6 md:py-3"
      />

      {username !== "" && (
        <div>
          <Button>Sipariş vermeye başla</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
