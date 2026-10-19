import { useState } from "react";
import Button from "../../UI/Button";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="surface-card p-4 sm:p-5">
      <label htmlFor="username" className="mb-3 block text-sm font-semibold text-[#37342F]">
        Hoş geldin — sana nasıl hitap edelim?
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="username"
          type="text"
          autoComplete="name"
          placeholder="Adın ve soyadın"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input flex-1"
        />

        {username !== "" && (
          <Button type="primary" className="shrink-0 sm:px-5">
            Siparişe başla
            <span aria-hidden="true">→</span>
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
