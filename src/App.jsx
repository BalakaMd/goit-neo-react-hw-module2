import { useEffect, useState } from 'react';
import './App.css';

import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Notification from './components/Notification/Notification.jsx';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = JSON.parse(localStorage.getItem('feedbacks'));
    return savedFeedbacks || { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positivePercentage = totalFeedback
    ? Math.round((feedbacks.good / totalFeedback) * 100)
    : 0;

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
        <Feedback
          {...feedbacks}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
