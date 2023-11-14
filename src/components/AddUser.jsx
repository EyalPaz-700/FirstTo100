import React, { useState } from "react";

export default function AddUser({ addNewPlayer, onDisplay, closeDisplay }) {
  const [newUserName, setNewUserName] = useState("new user");

  return (
    <div className={onDisplay ? "show-new-player-div" : "hide-new-player-div"}>
      <form
        className="add-user-form"
        onSubmit={(e) => {
          e.preventDefault();
          addNewPlayer(newUserName);
          closeDisplay();
        }}
      >
        <span onClick={closeDisplay} className="close">
          &times;
        </span>
        <h2>add a new user:</h2>
        <label htmlFor="username">Username:</label>
        <input
          onChange={(e) => {
            setNewUserName(e.target.value);
          }}
          id="username"
          name="username"
          type="text"
        />
        <input className="add-user-button" type="submit" value="Add" />
      </form>
    </div>
  );
}
