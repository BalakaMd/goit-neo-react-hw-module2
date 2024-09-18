import { useEffect, useState, useRef } from 'react';
import './App.css';

import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';

function App() {
  const [feedbacks, setFeedbacks] = useState({ good: 0, neutral: 0, bad: 0 });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks'));
      if (savedFeedbacks) {
        setFeedbacks(savedFeedbacks);
      }
      isFirstRender.current = false;
    }
  }, []);

  useEffect(() => {
    if (!isFirstRender.current) {
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      setFeedbacks({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedbacks(prevFeedbacks => ({
        ...prevFeedbacks,
        [feedbackType]: prevFeedbacks[feedbackType] + 1,
      }));
    }
  };

  return (
    <div className="app-container">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback {...feedbacks} total={totalFeedback} />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
}

export default App;
