import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); // Ignore this state
  const [answers, setAnswers] = useState([]);

  const addAnswer = (newAnswer) => {
    console.log("found a new answer: ", newAnswer);
    setAnswers((prevAnswers) => [...prevAnswers, newAnswer]);
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* Corrected prop name */}
        <AnswersList answers={answers} />
      </section>
      <section className="survey__form">
        {/* Form component */}
        <Form onSubmit={addAnswer} />
      </section>
    </main>
  );
}

export default Survey;
