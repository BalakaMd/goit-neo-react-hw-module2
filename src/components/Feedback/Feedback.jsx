import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.feedbackContainer}>
      <p className={css.feedbackContainerGood}>Good: {good}</p>
      <p className={css.feedbackContainerNeutral}>Neutral: {neutral}</p>
      <p className={css.feedbackContainerBad}>Bad: {bad}</p>
      <p className={css.feedbackContainerTotal}>Total: {total}</p>
      <p className={css.feedbackContainerPositive}>
        Positive: {positivePercentage}%
      </p>
    </div>
  );
};

export default Feedback;
