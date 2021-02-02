import { useField } from 'formik';
import Form from 'react-bootstrap/Form';

export function InputFormik({ label, name, as: Component = 'input', ...props }): JSX.Element {
  const [field, meta] = useField(name);
  const errorText = meta.touched && meta.error ? meta.error : null;
  const hasErrorText = !!errorText;

  const feedbackId = props['aria-describedby'];

  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...field}
        {...props}
        as={Component as any}
        aria-invalid={hasErrorText ? 'true' : 'false'}
        aria-describedby={hasErrorText ? feedbackId : null}
        isInvalid={hasErrorText}
      />
      <Form.Control.Feedback id={feedbackId} type="invalid">
        {errorText}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
