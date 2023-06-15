import { useState } from "react";

export default function Dashboard() {
  const [doneCards, setDoneCards] = useState([]);

  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Title 1",
      body: "Body 1",
      color: "bg-primary",
      isChecked: false,
    },
  ]);

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: "New Title",
      body: "New Body",
      color: "bg-primary",
      isChecked: false,
    };
    setCards([...cards, newCard]);
  };

  const handleClick = (id) => {
    setCards(
      cards.map((card) => {
        if (card.id === id) {
          let newColor = "bg-danger";
          if (card.color === "bg-danger") {
            newColor = "bg-primary";
          } else if (card.color === "bg-primary") {
            newColor = "bg-success";
          } else if (card.color === "bg-success") {
            newColor = "bg-danger";
          }
          return {
            ...card,
            color: newColor,
          };
        }
        return card;
      })
    );
  };

  const handleCheckboxChange = (id) => {
  setCards((prevCards) => {
    const updatedCards = prevCards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          isChecked: !card.isChecked,
        };
      }
      return card;
    });
    const checkedCard = updatedCards.find((card) => card.id === id);
    if (checkedCard.isChecked) {
      setDoneCards((prevDoneCards) => [...prevDoneCards, checkedCard]);
      return updatedCards.filter((card) => card.id !== id);
    }
    return updatedCards;
  });
};


  return (
    <div
      className="dashboard-container"
      style={{ backgroundColor: "rgb(245,245,245)" }}
    >
      <div className="search-container">{/* ... */}</div>

      <div
        className="dashboard card text-center"
        style={{ height: "90%", overflowY: "auto", overflowX: "hidden" }}
      >
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                To-do
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Done
              </a>
            </li>
          </ul>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {cards.map((card) => (
            <div
              className="col"
              key={card.id}
              onClick={() => handleClick(card.id)}
            >
              <div
                className={`card ${card.color} card-min d-flex flex-column justify-content-between`}
              >
                <div className="card-body">
                  <div className="form-check">
                    <label className="form-check-label">{card.title}</label>
                  </div>
                  {card.body}
                </div>
                <div className="d-flex justify-content-end">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={card.isChecked}
                    onChange={() => handleCheckboxChange(card.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="add" onClick={handleAddCard}>
        <a href="#" className="add-link">
          <span className="add-icon">+</span>
        </a>
      </div>
    </div>
  );
}