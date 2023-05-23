
import { useState } from 'react'

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './App.module.css';


const App = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
	
  // const onLeaveFeedback = opt => {
  //   this.setState(prevState => ({
  //     [opt]: prevState[opt] + 1,
  //   }));
  //   // console.log(this.state);
  // };
const options = {good, neutral, bad}
console.log(options);
const stateOpt = Object.keys(options);
const stateVal = Object.values(options);
console.log(stateVal);
const isFeedback = stateVal.some((opt) => opt > 0);

const onLeaveFeedback = (type) => {
  switch (type) {
    case "good":
      setGood(good + 1);
      break;
    case "neutral":
      setNeutral(neutral + 1);
      break;
    case "bad":
      setBad(bad + 1);
      break;
    default:
      break;
  }
};
const countTotalFeedback = () => {
  
  const totalFeedBack = good + neutral + bad;
  return totalFeedBack;
};

const countPositiveFeedbackPercentage = () => {
  const positivePers = Math.round((good / countTotalFeedback()) * 100);
  return positivePers;
};


  return (
    <div className={css.feedbacksDiv}>
 <div className={css.container}>
        <Section title="Please leave feedback">
          {stateOpt.map((option, index) => (
            <FeedbackOptions
              key={index + 1}
              options={option}
              onLeaveFeedback={onLeaveFeedback}
            />
          ))}
        </Section>
        <Section title="Statistics">
          {isFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
      </div>
    );
  
}
export default App;