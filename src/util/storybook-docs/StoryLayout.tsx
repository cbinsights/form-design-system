import React from 'react';
import FDS from 'dictionary/js/styleConstants';

export interface StoryItemProps {
  children: React.ReactNode;
}

export interface StoryWrapperProps {
  children: React.ReactNode;
  className: string;
}

export const StoryWrapper = ({
  children,
  className = '',
  ...rest
}: StoryWrapperProps): JSX.Element => (
  <div
    {...rest}
    className={`display--inlineFlex ${className}`}
    style={{
      flexWrap: 'wrap',
      marginBottom: `-${FDS.SPACE_S}`,
      marginRight: `-${FDS.SPACE_S}`,
      alignItems: 'center',
    }}
  >
    {children}
  </div>
);

export const StoryItem = ({ children }: StoryItemProps): JSX.Element => (
  <div className="margin--right--s margin--bottom--s">{children}</div>
);
