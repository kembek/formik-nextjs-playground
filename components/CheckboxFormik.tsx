import { useField } from 'formik';
import Form from 'react-bootstrap/Form';
import { FormCheckType } from 'react-bootstrap/FormCheck';

export function CheckboxFormik({ name, label, type = 'checkbox' }): JSX.Element {
  const [field] = useField(name);
  return (
    <Form.Group controlId={name}>
      <Form.Check {...field} type={type as FormCheckType} label={label} />
    </Form.Group>
  );
}

export function CheckboxesFormik({ name, label, options, labelId, type = 'checkbox', itemPrefixId = '' }): JSX.Element {
  const [field] = useField(name);
  return (
    <Form.Group as="fieldset">
      <Form.Label id={labelId} as="legend">
        {label}
      </Form.Label>
      <ul role="listbox" aria-label={label}>
        {options.map((option) => (
          <li key={option}>
            <Form.Check
              {...field}
              type={type as FormCheckType}
              name={name}
              id={`${option}${itemPrefixId && `-${itemPrefixId}`}`}
              value={option}
              label={option}
              inline
            />
          </li>
        ))}
      </ul>
    </Form.Group>
  );
}
