import { useState } from "react";

function Form({ onSubmit }) {
  const [rating, setRating] = useState(null);
  const [checkboxes, setCheckboxes] = useState({});
  const [review, setReview] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  // const [answers, setAnswers] = useState([])

  const clickRatingButton = (i) => {
    setRating(i);
    console.log("clicked rating: " + i);
  };

  const getRadioButtons = () => {
    return (
      <ul>
        <li>
          <input
            id="color-one"
            type="radio"
            name="color"
            value="1"
            onChange={() => clickRatingButton(1)}
          />
          <label htmlFor="color-one">1</label>
        </li>
        <li>
          <input
            id="color-two"
            type="radio"
            name="color"
            value="2"
            onChange={() => clickRatingButton(2)}
          />
          <label htmlFor="color-two">2</label>
        </li>
        <li>
          <input
            id="color-three"
            type="radio"
            name="color"
            value="3"
            onChange={() => clickRatingButton(3)}
          />
          <label htmlFor="color-three">3</label>
        </li>
        <li>
          <input
            id="color-four"
            type="radio"
            name="color"
            value="4"
            onChange={() => clickRatingButton(4)}
          />
          <label htmlFor="color-four">4</label>
        </li>
      </ul>
    );
  };

  const getCheckBoxes = () => {
    return (
      <ul>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="swimming"
              onChange={(event) =>
                eventOnCheckbox("swimming", event.target.checked)
              }
            />
            Swimming
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="bathing"
              onChange={(event) =>
                eventOnCheckbox("bathing", event.target.checked)
              }
            />
            Bathing
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="chatting"
              onChange={(event) =>
                eventOnCheckbox("chatting", event.target.checked)
              }
            />
            Chatting
          </label>
        </li>
        <li>
          <label>
            <input
              name="spend-time"
              type="checkbox"
              value="noTime"
              onChange={(event) =>
                eventOnCheckbox("noTime", event.target.checked)
              }
            />
            I don't like to spend time with it
          </label>
        </li>
      </ul>
    );
  };

  const eventOnCheckbox = (field, value) => {
    console.log("set the field:", field, " to value ", value);
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [field]: value,
    }));
  };

  function handleTextFieldInput(event, field) {
    const inputValue = event.target.value;
    field(inputValue);
    console.log("Set name to: " + inputValue);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const timeSpent = Object.keys(checkboxes).filter((key) => checkboxes[key]);


    const formData = {
      rating,
      timeSpent,
      review,
      fullName,
      email,
    };

    // submit the answer to answerslist in survey
    onSubmit(formData);

    // reset the data
    setRating(null);
    setCheckboxes({});
    setReview("");
    setFullName("");
    setEmail("");
  };



  // Form return
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          {/* <!-- Radio inputs go here --> */}
          {getRadioButtons()}
        </div>
        <div className="form__group">
          <h3>How do you like to spend time with your rubber duck?</h3>
          {/* <!-- checkboxes go here --> */}
          {getCheckBoxes()}
        </div>
        <label>
          What else have you got to say about your rubber duck?
          <textarea
            name="review"
            cols="30"
            rows="10"
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
    </>
  );
}

export default Form;
