import AnswersItem from "./AnswersItem";

export default function AnswersList({ answers, onEdit }) {
  return (
    <ul>
      {answers.map((answerItem) => (
        <AnswersItem
          key={answerItem.id}
          answerItem={answerItem}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
