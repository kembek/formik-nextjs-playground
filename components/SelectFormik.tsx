import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

export function SelectFormik({ options, name, label, id }) {
  const [field] = useField(name);

  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control as="select" {...field}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </Form.Control>
    </Form.Group>
  );
}
