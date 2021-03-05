import React, { useContext } from 'react';
import cc from 'classcat';
import DialogContext from './DialogContext';

const DialogFooter = () => {
  const { footerContent, alwaysShowBorder, isOverflowing } = useContext(DialogContext);
  return (
    <>
      {footerContent && (
        <div className="dialog-footer">
          <div
            className={cc([
              {
                'border--top': alwaysShowBorder || isOverflowing,
              },
              'bgColor--white',
              'padding--all',
            ])}
          >
            {footerContent}
          </div>
        </div>
      )}
    </>
  );
};

export default DialogFooter;
