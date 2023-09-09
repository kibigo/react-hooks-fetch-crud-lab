import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then((response) => response.json())
    .then((data) => setQuestions(data))

  }, [])

  const onDelete = (deletedquestion) => {
    setQuestions(questions.filter((quiz) => quiz.id !== deletedquestion.id)) 
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      
      <ul>
        {questions.map((question) => (
          <QuestionItem question={question} onDelete= {onDelete}/>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;



// {questions.map((question) => (
//   <>
//   <h3 key={question.id}>{question.prompt}</h3>
//   <ul>
//     {question.answers.map((answer) => (
//       <>
//       <li key={question.id}>{answer}</li>
//       </>
      
//     ))}
//     <button className="deleteButtton" onClick={() => handleDelete(question)}>Delete</button>

//   </ul>
 
//   </>
// ))}