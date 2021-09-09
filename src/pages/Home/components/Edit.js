import { useState } from "react";
import { v4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }

  // TODO del
  console.log(note, date, time);

  function addItem() {
    submittingStatus.current = true
    add(function (prevData) {
      return [       
        {
          id: v4(),
          note,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }

  return (
    <div>
      <h1>Reminder</h1>
      <p>Note：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>Date：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>Time：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        Add
      </button>
    </div>
  );
};

export default Edit;