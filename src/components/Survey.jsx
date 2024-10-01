import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [answers, setAnswers] = useState([]);
  const [answerToEdit, setAnswerToEdit] = useState(null);



  const addAnswer = (newAnswer) => {
    console.log("found a new answer: ", newAnswer);
    if (answerToEdit) {
      setAnswers((prevAnswers) =>
        prevAnswers.map((answer) =>
          answer.id === newAnswer.id ? newAnswer : answer
        )
      );
      setAnswerToEdit(null);
    } else {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { ...newAnswer, id: Date.now() },
      ]);
    }
  };
  

  const handleEdit = (answer) => {
    setAnswerToEdit(answer)
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answers={answers} onEdit={handleEdit} />
      </section>
      <section className="survey__form">
        <Form onSubmit={addAnswer} answerToEdit={answerToEdit} />
      </section>
    </main>
  );
}

export default Survey;
