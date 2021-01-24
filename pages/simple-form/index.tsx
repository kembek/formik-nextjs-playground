import { Field, Formik } from 'formik';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SimpleForm() {
  const router = useRouter();

  return (
    <main>
      <header>
        <Button
          variant="light"
          onClick={() => {
            router.push('/');
          }}
        >
          Back to home
        </Button>
        <h1>Simple form page</h1>
      </header>
      <section>
        <Formik
          initialValues={{
            username: '',
            password: ''
          }}
          onSubmit={(values, helpers) => {
            console.log('Loading...');
            helpers.setSubmitting(true);
            setTimeout(() => {
              helpers.setSubmitting(false);
              console.log('Data', values);
            }, 3000);
          }}
        >
          {({ values, handleSubmit, handleReset, isSubmitting }) => (
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Field name="username" as={Form.Control} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Field name="password" as={Form.Control} />
              </Form.Group>
              <div>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <Button variant="danger" type="reset" disabled={isSubmitting}>
                  Reset
                </Button>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
}
