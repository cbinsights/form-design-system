import React, { useContext } from 'react';
import DialogContext from '../DialogContext';

const DialogContent = () => {
  const { content, ref } = useContext(DialogContext);
  return (
    <div className="dialog-content" ref={ref}>
      <div className="padding--all bgColor--white">{content}</div>
    </div>
  );
};

export default DialogContent;
