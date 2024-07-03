import { useState } from "react";

const DisplayName = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName !== "" && lastName !== "") {
      setFullName(`${firstName} ${lastName}`);
    } else {
      setFullName("");
    }
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  return (
    <div>
      <h1>FullName Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>{fullName && <h2>Full Name: {fullName}</h2>}</div>
    </div>
  );
};

export default DisplayName;
