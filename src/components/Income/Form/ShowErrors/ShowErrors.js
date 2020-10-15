import React from 'react';
import FadeInAnimation from 'components/FadeInAnimation/FadeInAnimation';
import Portal from 'components/Portal/Portal';
import Toast from 'components/Toast/Toast';
import { isEmptyObject } from 'utilities';

const ShowErrors = ({ errors, isSubmitting }) => {
  if (isEmptyObject(errors) || !isSubmitting) return null;

  return (
    <Portal>
      <Toast.Wrapper>
        {Object.entries(errors).map(([field, msg], i) => (
          <FadeInAnimation direction="up" delay={i / 5}>
            <Toast>{msg}</Toast>
          </FadeInAnimation>
        ))}
      </Toast.Wrapper>
    </Portal>
  );
};

export default ShowErrors;
