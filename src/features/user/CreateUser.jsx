import { useState } from "react";

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
        className="w-72"
      />

      {username !== "" && (
        <div>
          <button>Sipariş vermeye başla</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
