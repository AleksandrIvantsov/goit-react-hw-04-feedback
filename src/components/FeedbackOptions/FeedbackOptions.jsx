import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button
        type="button"
        onClick={onLeaveFeedback}
        onMouseDown={e => (e.target.style.backgroundColor = '#3e7fe9')}
        onMouseUp={e => (e.target.style.backgroundColor = 'transparent')}
      >
        Good
      </Button>
      <Button
        type="button"
        onClick={onLeaveFeedback}
        onMouseDown={e => (e.target.style.backgroundColor = '#3e7fe9')}
        onMouseUp={e => (e.target.style.backgroundColor = 'transparent')}
      >
        Neutral
      </Button>
      <Button
        type="button"
        onClick={onLeaveFeedback}
        onMouseDown={e => (e.target.style.backgroundColor = '#3e7fe9')}
        onMouseUp={e => (e.target.style.backgroundColor = 'transparent')}
      >
        Bad
      </Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
