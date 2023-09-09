import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;
  

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

 

  const handleDelete = (deletequestion) => {
    fetch(`http://localhost:4000/questions/${deletequestion.id}`, {
      method:"DELETE",
    })
    .then((response) => response.json())
    .then(() => onDelete(deletequestion))

    

  }

  const handleUpdate = (event) => {
    let answer = event.target.value

    fetch(`http://localhost:4000/questions/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        correctIndex:answer
      })
    })
    .then((response) => response.json())
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdate}>{options}</select>
      </label>
      <button onClick={() => handleDelete(question)}>Delete Question</button>
    </li>
  )
}

export default QuestionItem;
