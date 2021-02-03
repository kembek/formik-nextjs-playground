import { FieldArray, Formik } from 'formik';
import Head from 'next/head';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';

import { CheckboxesFormik, CheckboxFormik, Heading, InputFormik, SelectFormik } from '../../../components';

const LIST_OF_PAYMENT_METHODS = ['Cash', 'Visa', 'Mastercard'];

const DRINKS = ['Tea', 'Coffee', 'Pepsi', 'Cola-Cola'];
const INGRIDIENTS = ['cheese', 'mushroom', 'anchovy', 'ham'];
const LIST_OF_PIZZA = ['Margherita', 'Marinara', 'Montanara', 'Quattro Stagioni', 'Carbonara', 'Frutti di Mare', 'Quattro Formaggi'];

const validationSchema = yup.object({
  firstName: yup.string().required().min(3).max(25),
  lastName: yup.string().required().min(3).max(25),
  isTakeaway: yup.bool().required(),
  paymentMethod: yup.string().oneOf(LIST_OF_PAYMENT_METHODS.slice(1)).required(),
  description: yup.string().required().max(25),
});

function generateId(): number {
  return Math.floor(Math.random() * 1000000);
}

export default function UsualForm(): JSX.Element {
  return (
    <Main className="container">
      <Head>
        <title>Example of usual form</title>
      </Head>
      <Heading text="Usual form" />
      <section>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            isTakeaway: false,
            paymentMethod: '',
            description: '',
            drinks: [],
            orders: [
              {
                id: generateId(),
                pizza: '',
                ingridient: '',
                isSpicy: false,
              },
            ],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log('Data: ', values);
          }}
        >
          {({ values, errors, handleSubmit, handleReset }) => (
            <Form onSubmit={handleSubmit} onReset={handleReset}>
              <InputFormik name="firstName" label="First name" placeholder="Input your name" />
              <InputFormik name="lastName" label="Last name" placeholder="Input your last name" />
              <CheckboxFormik name="isTakeaway" label="Takeaway" />
              <CheckboxesFormik
                labelId="one"
                name="paymentMethod"
                type="radio"
                label="Select payment method"
                options={LIST_OF_PAYMENT_METHODS}
              />

              <InputFormik name="description" label={`Description or an area to say: "Thanks!"`} as="textarea" rows={2} />

              <CheckboxesFormik labelId="two" name="drinks" label="Select drink" options={DRINKS} />

              <FieldArray name="orders">
                {(arrayHelpers) => {
                  return (
                    <Form.Group as="fieldset">
                      <Form.Group as={Row}>
                        <Col>
                          <Form.Label as="legend">List of pizza</Form.Label>
                        </Col>
                        <Col sm={3}>
                          <Button
                            type="button"
                            onClick={() => {
                              arrayHelpers.push({
                                id: generateId(),
                                pizza: '',
                                ingridient: '',
                                isSpicy: false,
                              });
                            }}
                          >
                            Add pizza
                          </Button>
                        </Col>
                      </Form.Group>

                      {values.orders.map((order, idx) => {
                        const selectId = `pizza-${order.id}`;
                        const path = `orders.${idx}`;

                        return (
                          <Fragment key={order.id}>
                            <SelectFormik id={selectId} options={LIST_OF_PIZZA} name={`${path}.pizza`} label="Pizza" />
                            <CheckboxesFormik
                              labelId={`three-${order.id}`}
                              label="Additional ingridient"
                              type="radio"
                              name={`${path}.ingridient`}
                              options={INGRIDIENTS}
                              itemPrefixId={order.id.toString()}
                            />
                            <CheckboxFormik label="Spicy" name={`${path}.isSpicy`} />
                            <div>
                              <Button type="button" onClick={() => arrayHelpers.remove(idx)}>
                                Delete
                              </Button>
                            </div>
                          </Fragment>
                        );
                      })}
                    </Form.Group>
                  );
                }}
              </FieldArray>

              <div>
                <Button type="submit">Order</Button>
                <Button type="reset" variant="danger">
                  Reset
                </Button>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </section>
    </Main>
  );
}
