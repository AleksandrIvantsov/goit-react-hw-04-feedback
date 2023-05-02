import { Component } from 'react';
import { Statistics, FeedbackOptions, Section, Notification } from 'components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    switch (e.target.textContent) {
      case 'Good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;
      case 'Neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;
      case 'Bad':
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
      default:
        return this.state;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={
                countPositiveFeedbackPercentage()
                  ? countPositiveFeedbackPercentage()
                  : 0
              }
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
