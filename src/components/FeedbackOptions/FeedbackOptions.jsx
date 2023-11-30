import { BtnFeedback } from 'components/BtnFeedback/BtnFeedback';

import React from 'react';
import { Icons } from '../../Utils/Icons';
import { BtnWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              key={option}
              icon={Icons[option]}
              type="button"
              value={option}
              children={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </BtnWrapper>
  );
};
