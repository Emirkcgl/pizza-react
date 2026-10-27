import { useState } from "react";
import Button from "../../UI/Button";

import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
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
          <Button type="primary">
            Siparişe başla
            <span aria-hidden="true">→</span>
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateUser;
