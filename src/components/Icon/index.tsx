export interface IconProps {
  /** Controls color of the Icon */
  color?: string;

  /** Control the size of the Icon */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';

  /** Use this if you want to specify a custom size */
  customSize?: number;
}

type Icon = React.ComponentType<IconProps>;
export default Icon;
