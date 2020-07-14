import { useState } from 'react';

export default () => {
  const [isHovered, setIsHovered] = useState(false);
  const toggleHover = () => setIsHovered(!isHovered);
  return [isHovered, toggleHover];
};
