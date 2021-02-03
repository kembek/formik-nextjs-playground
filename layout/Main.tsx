import { CONTENT_ID } from './Header';

export const Main: React.FC<React.InputHTMLAttributes<HTMLElement>> = (props) => {
  return <main id={CONTENT_ID} {...props} />;
};
