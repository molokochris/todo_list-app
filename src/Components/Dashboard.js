import { useState } from "react";

export default function Dashboard() {
  const [cards, updateCard] = useState([]);
  const [title, updateTitle] = useState("Card Title");
  const [subtitle, updateSub] = useState("Card Subtitle");
  const [innerText, updateInnerText] = useState("Card InnerTitle");
  let note = [];

  console.log(cards);

  const handleClick = () => {
    const card = {
      id: cards.length + 1,
      title: title,
      subtitle: "card subtitle",
      p: "quick text",
    };

    updateCard([...cards, card]);
  };

  const handleDelete = (e) => {};

  const handleTitleChange = (e) => {
    updateTitle(e.target.value);
  };
  const handleSubChange = (e) => {
    updateSub(e.target.value);
  };
  const handleTextChange = (e) => {
    updateInnerText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      note.push(cards);
      console.log("enter pressed");
    }
  };

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
                className="card bg-primary custom-card"
                style={{ width: "30%", height: "20%", margin: "1%" }}
              >
                <div className="delete-card" onClick={handleDelete}>
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
                    onKeyDown={handleKeyDown}
                    value={title}
                  />
                  <input
                    className="card-subtitle mb-2 text-body-secondary custom-card-subtitle"
                    type="text"
                    placeholder={card.subtitle}
                    onChange={handleSubChange}
                    value={subtitle}
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
        <button className="add" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {/* <span className="add-icon">+</span> */}launch
        </button>
        {/* <!-- Modal -- */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
