import React, { useContext } from 'react';
import IconButton from 'components/IconButton';
import DenyIcon from 'lib/icons/react/DenyIcon';
import DialogContext from './DialogContext';

const DialogHeader = () => {
  const { onDismiss, title } = useContext(DialogContext);
  return (
    <>
      {(title || onDismiss) && (
        <div className="bgColor--white border--bottom">
          <div className="dialog-header padding--left padding--top padding--bottom">
            <div className="type--head4">{title}</div>
            {onDismiss && (
              <div className="dialog-icon">
                <IconButton
                  Icon={DenyIcon}
                  onClick={onDismiss}
                  aria-label="Close"
                  label="Close"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DialogHeader;
