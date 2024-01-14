import { useEffect, useState } from "react";

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
    // handleSaveEdit();
    setEdit(true);
  };
  const handleSaveEdit = () => {
    let otherNotes = savedNotes.filter((item) => {
      return item.id != id;
    });
    const newNote = { note, priority, id };

    setSavedNotes([...otherNotes, newNote]);
    setNote("");
    setPriority("normal");
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
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        backgroundColor: "black",
        padding: "1%",
      }}
    >
      {/* <div>
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
      </div> */}
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <div
          style={{
            width: "19%",
            // height: "99%",
            padding: "1%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px",
              // width: "100px",
              color: "whitesmoke",
              fontWeight: "bolder",
              fontFamily: "sans-serif",
              fontSize: "24px",
              borderRadius: "8px",
              backgroundColor: "rgba(0,30,8,.8)",
            }}
          >
            <input
              placeholder="note"
              value={note}
              onChange={handleNoteChange}
            />
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
            width: "79%",
            // height: "99%",
            backgroundColor: "#111111",
            padding: "1%",
            margin: "5% 0",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {savedNotes.map(({ note, priority, id }) => {
            return (
              <div
                style={{
                  // width: "100%",
                  padding: "2% 4%",
                  backgroundColor:
                    priority == "important" ? "tomato" : "#000000",
                  display: "flex",
                  borderRadius: "16px",
                  flexDirection: "row",
                  marginBottom: "10px",
                  color: "whitesmoke",
                  fontWeight: "bold",
                  alignItems: "center",
                }}
                key={id}
              >
                <div style={{ width: "90%" }}>
                  <span style={{}}>{note}</span>
                </div>
                <span
                  style={{
                    backgroundColor: "navy",
                    borderRadius: "18px",
                    marginRight: "10px",
                    padding: "10px 20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleEdit(note, priority, id)}
                >
                  Edit
                </span>
                <span
                  style={{
                    backgroundColor: "rgba(80,0,0,.8)",
                    borderRadius: "100px",
                    width: "20px",
                    height: "20px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onClick={() => handleDelete(id)}
                >
                  X
                </span>
              </div>
            );
          })}
          {/* <div
            style={{
              // width: "100%",
              padding: "2% 4%",
              backgroundColor: "#000000",
              display: "flex",
              borderRadius: "16px",
              flexDirection: "row",
              marginBottom: "10px",
              color: "whitesmoke",
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <div style={{ width: "90%" }}>
              <span style={{}}>Note</span>
            </div>
            <span
              style={{
                backgroundColor: "navy",
                borderRadius: "18px",
                marginRight: "10px",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Edit
            </span>
            <span
              style={{
                backgroundColor: "rgba(80,0,0,.8)",
                borderRadius: "100px",
                width: "20px",
                height: "20px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              X
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
