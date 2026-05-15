import { useProfileReducer, setField, resetProfile } from "../../../hooks/useUserReducer.js";
import StateInspector from "./StateInspector.jsx";

function UserFormDemo() {
  const [profile, dispatch] = useProfileReducer();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setField(name, value));
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "320px" }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
          />
        </label>
        <label>
          Role
          <select
            name="role"
            value={profile.role}
            onChange={handleChange}
            style={{ display: "block", width: "100%", marginTop: "0.25rem" }}
          >
            <option value="guest">Guest</option>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
          </select>
        </label>
        <button type="button" onClick={() => dispatch(resetProfile())}>
          Reset form
        </button>
      </form>
      <StateInspector state={profile} />
    </div>
  );
}

export default UserFormDemo;
