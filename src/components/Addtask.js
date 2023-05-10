import React from "react";
import { useState } from "react";

const Addtask = ({ onAdd }) => {
  const [id, setId] = useState("");
  const [txt, setTxt] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!txt) {
      alert("Add Task");
      return;
    }

    onAdd({ id, txt, day, reminder });

    setId("");
    setTxt("");
    setDay("");
    setReminder(false);
  };

  return (
    <div>
      <form className="form-style" onSubmit={onSubmit}>
        <div>
          <label htmlFor="fname">ID:</label>

          <input
            type="text"
            value={id}
            onChange={(ev) => setId(ev.target.value)}
          />
        </div>

        <br />

        <div>
          <label htmlFor="fname">Task:</label>

          <input
            type="text"
            value={txt}
            onChange={(ev) => setTxt(ev.target.value)}
          />
        </div>

        <br />
        <div>
          <label htmlFor="lname">Day & Time:</label>

          <input
            type="text"
            value={day}
            onChange={(ev) => setDay(ev.target.value)}
          />
        </div>

        <br />
        <div>
          <label htmlFor="lname">Reminder:</label>

          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(ev) => setReminder(ev.currentTarget.checked)}
          />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Addtask;
