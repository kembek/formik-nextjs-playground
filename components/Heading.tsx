import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';

type HeadingProps = {
  text: string;
} & React.HTMLAttributes<HTMLElement>;

export const Heading: React.FC<HeadingProps> = ({ text, children }: HeadingProps) => {
  const router = useRouter();

  return (
    <header className="header">
      <Button
        className="header__button"
        variant="light"
        onClick={() => {
          router.push('/');
        }}
      >
        Back to home
      </Button>
      {children || <h1 className="header__heading">{text}</h1>}
    </header>
  );
};
