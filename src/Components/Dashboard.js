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

  const handleTitleChange = (e) => {
    updateTitle(e.target.value);
  }
  const handleSubChange = (e) => {
    updateSub(e.target.value);
  }
  const handleTextChange = (e) => {
    updateInnerText(e.target.value);
  }
  const handleKeyDown = (e) => {
    
    if (e.key === "Enter") {
      note.push(cards);
      console.log("enter pressed")
     }
  }
      console.log(note)

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
                <div className="delete-card">
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
        <div className="add" onClick={handleClick}>
          <span className="add-icon">+</span>
        </div>
      </div>
    </div>
  );
}
