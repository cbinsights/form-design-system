export interface IconProps {
  color?: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  customSize?: number;
}

type Icon = (props: IconProps) => JSX.Element;
export default Icon;
