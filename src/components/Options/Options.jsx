import Btn from '../Btn/Btn';
import css from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      <Btn onClick={() => updateFeedback('good')}>Good</Btn>
      <Btn onClick={() => updateFeedback('neutral')}>Neutral</Btn>
      <Btn onClick={() => updateFeedback('bad')}>Bad</Btn>
      {totalFeedback > 0 && (
        <Btn onClick={() => updateFeedback('reset')}>Reset</Btn>
      )}
    </div>
  );
};

export default Options;
