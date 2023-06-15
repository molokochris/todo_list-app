import React, { useState } from 'react'

const Card = ({card, handleClick, handleBodyChange, handleCheckboxChange, handleTitleChange}) => {
  
    
    const [body, setBody] = useState(card.body ?? "");
    const [title, setTitle] = useState(card.title ?? "");

    const handleBody = (event) => {
        const value = event.target.value;
        setBody(value);

        handleBodyChange(value, card.id)
    }
    const handleTitle = (event) => {
        const value = event.target.value;
        setTitle(value);

        handleTitleChange(value, card.id)
    }
  
    return (
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
          <input className={`card ${card.color} form-check-label`} type="text" value={title} onChange={handleTitle}/>
        </div>
       <textarea style={{
        resize: "none"
       }}  className={`card ${card.color}`} value={body} onChange={handleBody}></textarea>
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
  )
}

export default Card