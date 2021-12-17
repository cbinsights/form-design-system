import { useState } from 'react';

export default (): [boolean, () => void] => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const toggleHover = () =>
    setIsHovered((prevState) => {
      return !prevState;
    });
  return [isHovered, toggleHover];
};
