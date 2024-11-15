import GradingButton from "./GradingButton";

function QuizListItem({ item, onChange }) {
  return (
    <div className="QuizListItem">
      <h1>{item.id}</h1>
      <h1>{item.question}</h1>
      <ul>
        {item.answer.map((ans) => (
          <li key={`${ans.id}-${item.id}`}>
            <AnswerItem item={ans} groupName={item.id} onChange={onChange} />
          </li>
        ))}
      </ul>
      <GradingButton />
    </div>
  );
}

function AnswerItem({ item, groupName, onChange }) {
  return (
    <div className="AnswerItem">
      <p>{item.id}</p>
      <label>
        <input type="radio" name={groupName} value={item.id} onChange={onChange} />
        <p>{item.content}</p>
      </label>
    </div>
  );
}

function QuizList({ items, onChange }) {
  return <ul>{items.map((item) => {
    return <li key={item.id}><QuizListItem item={item} onChange={onChange} /></li>
  })}</ul>;
}

export default QuizList;