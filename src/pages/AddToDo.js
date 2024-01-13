import React, { useEffect, useState } from "react";

export default function AddToDo() {
  const [priority, setPriority] = useState("normal");
  const [note, setNote] = useState("");
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(false);
  const [savedNotes, setSavedNotes] = useState([]);

  useEffect(() => {
    console.log(savedNotes);
  }, [savedNotes]);
  const handleSave = () => {
    if (note != "" && edit == false) {
      const newNote = { note, priority, id: Date.now() };
      setSavedNotes([...savedNotes, newNote]); // Add new note to the savedNotes array
      setNote(""); // Clear the input field after saving
      setPriority("normal"); // Reset priority to default
    } else {
      alert("note cant be empty!");
    }
    // console.log(savedNotes);
  };
  const handleDelete = (id) => {
    const newNotes = savedNotes.filter((note) => {
      return note.id != id;
    });
    setSavedNotes(newNotes);
    // console.log(newNotes);
  };
  const handleEdit = (note, priority, id) => {
    setPriority(priority);
    setNote(note);
    setId(id);
    handleSaveEdit(note, priority, id);
    setEdit(true);
  };
  const handleSaveEdit = () => {
    let otherNotes = savedNotes.filter((item) => {
      return item.id != id;
    });
    const newNote = { note, priority, id };

    setSavedNotes([...otherNotes, newNote]);
    setEdit(false);
  };
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        backgroundColor: "red",
      }}
    >
      <div>
        AddToDo
        <div
          style={{
            width: "50%",
            height: "200px",
            border: "1px solid black",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <input placeholder="note" value={note} onChange={handleNoteChange} />
          <select value={priority} onChange={handlePriorityChange}>
            <option value="normal">Normal</option>
            <option value="important">Important</option>
          </select>
          {edit ? (
            <button onClick={handleSaveEdit}>save edit</button>
          ) : (
            <button onClick={handleSave}>save</button>
          )}
        </div>
      </div>
      <div
        style={{
          //   width: "100%",
          height: "400px",
          border: "1px solid black",
          padding: "20px",
        }}
      >
        {savedNotes.map(({ note, priority, id }) => {
          return (
            <div
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              {note}:{id}:{priority}
              <button onClick={() => handleDelete(id)}>delete</button>
              <button onClick={() => handleEdit(note, priority, id)}>
                edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
