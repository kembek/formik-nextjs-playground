import { Formik } from 'formik';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';

import { Heading, InputFormik } from '../../../components';

const validationSchema = yup.object({
  username: yup.string().required().min(3).max(20),
  password: yup.string().required().min(6).max(25),
});

export default function SimpleForm(): JSX.Element {
  return (
    <main className="container">
      <Head>
        <title>Example of simple form</title>
      </Head>
      <Heading text="Back to home" />
      <section>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={(values, helpers) => {
            console.log('Loading...');
            helpers.setSubmitting(true);
            setTimeout(() => {
              helpers.setSubmitting(false);
              console.log('Data', values);
            }, 3000);
          }}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, handleReset, handleSubmit }) => (
            <Form onReset={handleReset} onSubmit={handleSubmit}>
              <InputFormik name="username" label="Username" placeholder="Input username" aria-describedby="username-error" aria-required />
              <InputFormik
                name="password"
                label="Password"
                type="password"
                placeholder="Input password"
                aria-describedby="password-error"
                aria-required
              />

              <div>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <Button variant="danger" type="reset" disabled={isSubmitting}>
                  Reset
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
}
