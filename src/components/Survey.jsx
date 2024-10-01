import { useState } from "react";
import Form from "./Form";



function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answers, setAnswers] = useState([])

  const addAnswer = (newAnswer) => {
    console.log("found a new answer: ", newAnswer);
    setAnswers ((prevAnswers) => [...prevAnswers, newAnswer])
    
  }

  const presentAnswer = () => {}

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}


      </section>
      <section className="survey__form">{
        
      /* a form should be here */
      // <Form/>
      <Form onSubmit={addAnswer}/>

      }</section>
    </main>
  );
}

export default Survey;


