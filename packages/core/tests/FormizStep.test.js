import React from 'react';
import { mount } from 'enzyme';
import { silent, Input } from './utils';
import { Formiz, FormizStep } from '../src';
import { ErrorStepWithoutName } from '../src/FormStep/errors';

beforeEach(() => {
  jest.resetModules();
});

describe('<FormizStep />', () => {
  it('Should mount without crashing', () => {
    mount(
      <Formiz>
        <FormizStep name="step1" order={0}>
          Form Step 1
        </FormizStep>
      </Formiz>
    );
  });

  it('Should crash if mounted without `name` property', () => {
    silent(() => {
      expect(() => {
        mount(
          <Formiz>
            <FormizStep>
              Form Step
            </FormizStep>
            <FormizStep>
              Form Step
            </FormizStep>
          </Formiz>
        );
      }).toThrow(ErrorStepWithoutName);
    });
  });

  it('Should mount fields without crashing', () => {
    mount(
      <Formiz>
        <FormizStep name="step1" order={0}>
          <Input name="field" />
          <Input name="field2" />
        </FormizStep>
      </Formiz>
    );
  });

  it('Should mount 2 `<FormizStep>` without crashing', () => {
    mount(
      <div>
        <Formiz>
          <FormizStep name="step1" order={0}>
            <Input name="field" />
            <Input name="field2" />
          </FormizStep>
          <FormizStep name="step2" order={1}>
            <Input name="field3" />
            <Input name="field4" />
          </FormizStep>
        </Formiz>
      </div>
    );
  });

  it('Should register fields in steps', () => {
    let formValues;

    const form = mount(
      <Formiz onSubmit={(values) => { formValues = values; }}>
        <FormizStep name="step1" order={0}>
          <Input name="field" />
          <Input name="field2" />
        </FormizStep>
        <FormizStep name="step2" order={1}>
          <Input name="field3" />
          <Input name="field4" />
        </FormizStep>
      </Formiz>
    );

    form.simulate('submit');

    expect(formValues).toHaveProperty('field');
    expect(formValues).toHaveProperty('field2');
    expect(formValues).toHaveProperty('field3');
    expect(formValues).toHaveProperty('field4');
  });
});