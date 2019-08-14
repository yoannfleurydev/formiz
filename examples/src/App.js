import React from 'react';
import {
  Formiz,
  FormizStep,
  useField,
  useForm,
} from '@formiz/core';

const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const isRequired = () => x => !!x;
const isEmail = () => x => !x || emailRegex.test(x);
const isNotEqual = (val) => x => (x || '').toLowerCase() !== (val || '').toLowerCase();

const Input = (props) => {
  const {
    value, setValue, errorMessage, isValid, isPristine,
  } = useField(props);
  const { label } = props; // eslint-disable-line
  const [isTouched, setIsTouched] = React.useState(false);

  const isError = !isValid && (!isPristine || isTouched);

  return (
    <div className="form-group">
      <label style={{ display: 'block' }}>
        {label}
      </label>
      <input
        className={`form-control ${isError ? 'is-invalid' : ''}`}
        defaultValue={value}
        onChange={e => setValue(e.target.value.trim())}
        onBlur={() => {
          setIsTouched(true);
        }}
      />
      {isError && (
        <div className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

function App() {
  const [isJobFieldVisible, setIsJobFieldVisible] = React.useState(false);
  const [isStep2Visible, setIsStep2Visible] = React.useState(true);
  const [formIsValid, setFormIsValid] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const [myForm, myFormConnector] = useForm();

  const handleSubmit = (values) => {
    setIsLoading(true);
    console.log(values); // eslint-disable-line

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div style={{ padding: '2rem' }}>
        <button className="btn btn-light btn-sm" type="button" onClick={() => setIsStep2Visible(!isStep2Visible)}>
          Toggle Step 2 {myForm.values.name}
        </button>
      </div>
      <div style={{ padding: '2rem' }}>
        <Formiz
          onSubmit={handleSubmit}
          connect={myFormConnector}
        >
          <form className="card">
            <div className="card-body" style={{ minHeight: 200 }}>
              <FormizStep name="step3" label="Step C" order={3}>
                <Input
                  name="email"
                  label="Email"
                  validations={[
                    {
                      rule: isEmail(),
                      message: 'Invalid email',
                    },
                  ]}
                />
              </FormizStep>

              <FormizStep name="step1" label="Step A">
                <Input
                  name="name"
                  label="Name"
                  defaultValue="john"
                  validations={[
                    {
                      rule: isNotEqual(isStep2Visible ? 'john' : 'toto'),
                      message: `Not ${isStep2Visible ? 'john' : 'toto'}`,
                    },
                    {
                      rule: isRequired(),
                      message: 'Required',
                    },
                  ]}
                />

              </FormizStep>

              {!isStep2Visible && myForm.currentStep.name === 'step2' && myForm.goToStep('step1')}
              {isStep2Visible && (
                <FormizStep name="step2" label="Step B" order={2}>
                  <button className="btn btn-light btn-sm mb-3" type="button" onClick={() => setIsJobFieldVisible(!isJobFieldVisible)}>
                    Toggle Job
                  </button>

                  {isJobFieldVisible && (
                    <Input
                      name="job"
                      label="Job"
                      validations={[
                        {
                          rule: isNotEqual('john'),
                          message: 'Not john',
                        },
                        {
                          rule: isRequired(),
                          message: 'Required',
                        },
                      ]}
                    />
                  )}
                </FormizStep>
              )}
            </div>

            <div className="card-footer d-flex align-items-center">
              <button className="btn btn-link" type="button" onClick={myForm.prevStep} disabled={myForm.isFirstStep}>
                Prev
              </button>

              <div className="mx-auto">
                {myForm.steps.map(step => (
                  <button
                    key={step.name}
                    type="button"
                    onClick={() => myForm.goToStep(step.name)}
                    disabled={!step.isVisited}
                    className={`
                      btn btn-sm rounded-pill py-0 mx-1
                      ${myForm.currentStep.name === step.name ? 'btn-primary' : 'btn-link'}
                    `}
                  >
                    {step.isValid ? '✅' : '⚠️'}
                    {' '}
                    {step.label}
                  </button>
                ))}
              </div>

              {myForm.isLastStep
                ? (
                  <button className="btn btn-primary ml-auto" type="button" onClick={myForm.submit} disabled={!myForm.isValid || isLoading}>
                    { isLoading ? 'Loading... ' : 'Submit' }
                  </button>
                )
                : (
                  <button className="btn btn-primary ml-auto" type="button" onClick={myForm.nextStep} disabled={!myForm.isStepValid}>
                    Next
                  </button>
                )
              }
            </div>
          </form>
        </Formiz>
      </div>

      <div style={{ padding: '2rem' }}>
        <Formiz
          onSubmit={handleSubmit}
          onValid={() => setFormIsValid(true)}
          onInvalid={() => setFormIsValid(false)}
          autoForm
        >
          <Input
            name="name"
            label="Name"
            defaultValue="john"
            validations={[
              {
                rule: isNotEqual(isStep2Visible ? 'john' : 'toto'),
                message: `Not ${isStep2Visible ? 'john' : 'toto'}`,
              },
              {
                rule: isRequired(),
                message: 'Required',
              },
            ]}
          />

          {[...Array(20)].map((_x, index) => (
            <Input
              key={index}
              name={`name-${index}`}
              label={`Name ${index}`}
              validations={[
                {
                  rule: isNotEqual(isStep2Visible ? 'john' : 'toto'),
                  message: `Not ${isStep2Visible ? 'john' : 'toto'}`,
                },
                {
                  rule: isRequired(),
                  message: 'Required',
                },
              ]}
            />
          ))}

          <div>
            <button className="btn btn-light btn-sm mb-3" type="button" onClick={() => setIsJobFieldVisible(!isJobFieldVisible)}>
              Toggle Job
            </button>
            {isJobFieldVisible && (
              <Input
                name="job"
                label="Job"
                validations={[
                  {
                    rule: isNotEqual('john'),
                    message: 'Not john',
                  },
                  {
                    rule: isRequired(),
                    message: 'Required',
                  },
                ]}
              />
            )}
          </div>

          <button className="btn btn-primary" type="submit" disabled={!formIsValid}>
            Submit
          </button>
        </Formiz>
      </div>

      <div style={{ padding: '2rem' }}>
        <Formiz onSubmit={handleSubmit} autoForm>
          <Input name="name" label="Name" />

          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Formiz>
      </div>
    </div>
  );
}

export default App;
