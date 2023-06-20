import { Modal, Dropdown, Button } from "react-bootstrap";

export default function ModalTempate(props) {

  let show = props.show;
  const title = props.title;
  const handleTitleChange = props.handleTitleChange;
  const handleSubChange = props.handleSubChange;
  const handleTextChange = props.handleTextChange;
  const subtitle = props.subtitle;
  const innerText = props.innerText;
  const cardColor = props.cardColor;
  const handleColorChange = props.handleColorChange;
  const handleClick = props.handleClick;
  const handleClose = props.handleClose;
  
  return (
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
            <Dropdown.Item
              value={cardColor}
              onClick={() => handleColorChange("bg-danger")}
            >
              High
            </Dropdown.Item>
            <Dropdown.Item
              value={cardColor}
              onClick={() => handleColorChange("bg-primary")}
            >
              Mid
            </Dropdown.Item>
            <Dropdown.Item
              value={cardColor}
              onClick={() => handleColorChange("bg-secondary")}
            >
              Low
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Add</Button>
      </Modal.Footer>
    </Modal>
  );


}
