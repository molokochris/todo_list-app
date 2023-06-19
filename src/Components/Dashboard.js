import { useState } from "react";
import Card from "./Card";

// export default function Dashboard() {
//   const [doneCards, setDoneCards] = useState([]);

//   const [cards, setCards] = useState([
//     {
//       id: 1,
//       title: "Title 1",
//       body: "Body 1",
//       color: "bg-primary",
//       isChecked: false,
//     },
//   ]);

//   const handleAddCard = () => {
//     const newCard = {
//       id: cards.length + 1,
//       title: "New Title",
//       body: "New Body",
//       color: "bg-primary",
//       isChecked: false,
//     };
//     setCards([...cards, newCard]);
//   };

//   const handleClick = (id) => {
//     setCards(
//       cards.map((card) => {
//         if (card.id === id) {
//           let newColor = "bg-danger";
//           if (card.color === "bg-danger") {
//             newColor = "bg-primary";
//           } else if (card.color === "bg-primary") {
//             newColor = "bg-success";
//           } else if (card.color === "bg-success") {
//             newColor = "bg-danger";
//           }
//           return {
//             ...card,
//             color: newColor,
//           };
//         }
//         return card;
//       })
//     );
//   };

//   const handleCheckboxChange = (id) => {
//     setCards((prevCards) => {
//       const updatedCards = prevCards.map((card) => {
//         if (card.id === id) {
//           return {
//             ...card,
//             isChecked: !card.isChecked,
//           };
//         }
//         return card;
//       });
//       const checkedCard = updatedCards.find((card) => card.id === id);
//       if (checkedCard.isChecked) {
//         setDoneCards((prevDoneCards) => [...prevDoneCards, checkedCard]);
//         return updatedCards.filter((card) => card.id !== id);
//       }
//       return updatedCards;
//     });
//   };

//   const handleBodyChange = (value, cardId) => {

//     const updateCards = cards.map((card) => {
//         if (card.id === cardId) {
//           return {
//             ...card,
//             body: value,
//           };
//         }
//         return card;
//       });

//       setCards(updateCards);
//   };
//   const handleTitleChange = (value, cardId) => {

//     const updateCards = cards.map((card) => {
//       if (card.id === cardId) {
//         return {
//           ...card,
//           title: value,
//         };
//       }
//       return card;
//     });

//     setCards(updateCards);
//   };

//   return (
//     <div
//       className="dashboard-container"
//       style={{ backgroundColor: "rgb(245,245,245)" }}
//     >
//       <div className="search-container">{/* ... */}</div>

//       <div
//         className="dashboard card text-center"
//         style={{ height: "90%", overflowY: "auto", overflowX: "hidden" }}
//       >
//         <div className="card-header">
//           <ul className="nav nav-pills card-header-pills">
//             <li className="nav-item">
//               <a className="nav-link active" href="#">
//                 To-do
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Done
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {cards.map((card) => (
//             <Card
//               handleBodyChange={handleBodyChange}
//               handleCheckboxChange={handleCheckboxChange}
//               handleClick={handleClick}
//               handleTitleChange={handleTitleChange}
//               card={card}
//               key={card.id}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="add" onClick={handleAddCard}>
//         <a href="#" className="add-link">
//           <span className="add-icon">+</span>
//         </a>
//       </div>
//     </div>
//   );
// }

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="search-bar">
        <input type="text" placeholder="search" />
      </div>
      <div className="list-container">
        <div className="list">
          <div className="card">

          </div>
        </div>
      </div>
    </div>
  );
}
