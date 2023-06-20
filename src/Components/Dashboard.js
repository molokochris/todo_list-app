import { useState } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";

export default function Dashboard() {
  const [cards, updateCard] = useState([]);
  const [title, updateTitle] = useState("");
  const [subtitle, updateSub] = useState("");
  const [innerText, updateInnerText] = useState("");
  const [cardColor, updateCardColor] = useState("");

  const handleClick = () => {
    const card = {
      id: cards.length + 1,
      title: title,
      subtitle: subtitle,
      p: innerText,
      color: cardColor,
    };

    updateCard([...cards, card]);
    handleClose();
  };

  const handleDelete = (e) => {
    const updatedCards = cards.filter((card) => card.id != e);
    updateCard(updatedCards)
  };

  const handleTitleChange = (e) => {
    updateTitle(e.target.value);
  };
  const handleSubChange = (e) => {
    updateSub(e.target.value);
  };
  const handleTextChange = (e) => {
    updateInnerText(e.target.value);
  };
  const handleColorChange = (e) => {
    // updateCardColor(e.target.value);
    updateCardColor(e)
    console.log(e)
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashboard-container">
      <div className="search-bar">
        <input type="text" placeholder="search" />
      </div>
      <div className="list-container">
        <div className="list">
          {cards.map((card) => {
            return (
              <div
                className={`${card.color} card custom-card`}
                style={{ width: "30%", height: "20%", margin: "1%" }}
              >
                <div className="delete-card" onClick={() => handleDelete(card.id)}>
                  <img
                    src="/delete-card.svg"
                    style={{ width: "20px", height: "auto" }}
                    alt=""
                  />
                </div>
                <div className="card-body">
                  <input
                    className="card-title custom-title"
                    type="text"
                    placeholder={card.title}
                    max-length="10"
                    onChange={handleTitleChange}
                    value={card.title}
                  />
                  <input
                    className="card-subtitle mb-2 text-body-secondary custom-card-subtitle"
                    type="text"
                    placeholder={card.subtitle}
                    onChange={handleSubChange}
                    value={card.subtitle}
                    max-length="10"
                  />
                  <input
                    className="card-text custom-card-text"
                    type="text"
                    placeholder={card.p}
                    onChange={handleTextChange}
                    value={innerText}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="add" variant="primary" onClick={handleShow}>
          <span className="add-icon">+</span>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="card-title custom-title"
              type="text"
              placeholder=" Enter To-do Item "
              max-length="10"
              onChange={handleTitleChange}
              value={title}
            />
            <input
              className="card-subtitle mb-2 text-body-secondary custom-card-subtitle"
              type="text"
              placeholder="Enter Subtext"
              onChange={handleSubChange}
              value={subtitle}
              max-length="10"
            />
            <input
              className="card-text custom-card-text"
              type="text"
              placeholder="Enter More Info"
              onChange={handleTextChange}
              value={innerText}
            />
            <Dropdown className="d-flex justify-content-center">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Choose Priority
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item value={cardColor} onClick={() => handleColorChange("bg-danger")}>
                  High
                </Dropdown.Item>
                <Dropdown.Item
                   value={cardColor}
                  onClick={() => handleColorChange("bg-primary")}
                >
                  Mid
                </Dropdown.Item>
                <Dropdown.Item value={cardColor} onClick={() => handleColorChange("bg-secondary")}>
                  Low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClick}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
