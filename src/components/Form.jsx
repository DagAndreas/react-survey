import { useState, useEffect } from "react";

function Form({ onSubmit, answerToEdit }) {
  const [rating, setRating] = useState("");
  const [checkboxes, setCheckboxes] = useState({});
  const [review, setReview] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(null);

  useEffect(() => {
    if (answerToEdit) {
      setRating(answerToEdit.rating);
      setCheckboxes(
        answerToEdit.timeSpent.reduce(
          (acc, curr) => ({ ...acc, [curr]: true }),
          {}
        )
      );
      setReview(answerToEdit.review);
      setFullName(answerToEdit.fullName);
      setEmail(answerToEdit.email);
      setId(answerToEdit.id);
    } else {
      setRating("");
      setCheckboxes({});
      setReview("");
      setFullName("");
      setEmail("");
      setId(null);
    }
  }, [answerToEdit]);

  const getRadioButtons = () => {
    return (
      <ul>
        {[1, 2, 3, 4].map((num) => (
          <li key={num}>
            <input
              id={`color-${num}`}
              type="radio"
              name="color"
              value={num}
              onChange={(event) => setRating(event.target.value)}
              checked={rating === String(num)}
            />
            <label htmlFor={`color-${num}`}>{num}</label>
          </li>
        ))}
      </ul>
    );
  };

  const getCheckBoxes = () => {
    const options = ["swimming", "bathing", "chatting", "noTime"];
    const answersSet = {
      swimming: "Swimming",
      bathing: "Bathing",
      chatting: "Chatting",
      noTime: "I don't like to spend time with it",
    };
    return (
      <ul>
        {options.map((option) => (
          <li key={option}>
            <label>
              <input
                name="spend-time"
                type="checkbox"
                value={option}
                onChange={(event) =>
                  eventOnCheckbox(option, event.target.checked)
                }
                checked={checkboxes[option] || false}
              />
              {answersSet[option]}
            </label>
          </li>
        ))}
      </ul>
    );
  };

  const eventOnCheckbox = (field, value) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [field]: value,
    }));
  };

  function handleTextFieldInput(event, setField) {
    const inputValue = event.target.value;
    setField(inputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const timeSpent = Object.keys(checkboxes).filter((key) => checkboxes[key]);

    const formData = {
      id: id || Date.now(),
      rating,
      timeSpent,
      review,
      fullName,
      email,
    };

    onSubmit(formData);

    setRating("");
    setCheckboxes({});
    setReview("");
    setFullName("");
    setEmail("");
    setId(null);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {getRadioButtons()}
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck?</h3>
        {getCheckBoxes()}
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          value={review}
          onChange={(event) => handleTextFieldInput(event, setReview)}
        ></textarea>
      </label>

      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={fullName}
          onChange={(event) => handleTextFieldInput(event, setFullName)}
        />
      </label>

      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          value={email}
          onChange={(event) => handleTextFieldInput(event, setEmail)}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
