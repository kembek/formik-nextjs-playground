import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';

type HeadingProps = {
  text: string;
};

export function Heading({ text }: HeadingProps): JSX.Element {
  const router = useRouter();

  return (
    <header>
      <Button
        variant="light"
        onClick={() => {
          router.push('/');
        }}
      >
        Back to home
      </Button>
      <h1>{text}</h1>
    </header>
  );
}
