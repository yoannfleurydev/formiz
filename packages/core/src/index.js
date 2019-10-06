import React from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  propTypes as propTypesForm,
  defaultProps as defaultPropsForm,
} from './Form';
import { FormContextProvider } from './FormContext';

import {
  FormStep,
  propTypes as propTypesFormStep,
  defaultProps as defaultPropsFormStep,
} from './FormStep';
import { FormStepContextProvider } from './FormStepContext';

export { useForm } from './useForm';
export { useField, fieldPropTypes, fieldDefaultProps } from './useField';

export const Formiz = props => (
  <FormContextProvider {...props}>
    <Form {...props} />
  </FormContextProvider>
);

Formiz.propTypes = {
  ...propTypesForm,
  onSubmit: PropTypes.func,
  onValidSubmit: PropTypes.func,
  onInvalidSubmit: PropTypes.func,
};

Formiz.defaultProps = {
  ...defaultPropsForm,
  onSubmit: () => {},
  onValidSubmit: () => {},
  onInvalidSubmit: () => {},
};

export const FormizStep = ({ name, order, ...props }) => (
  <FormStepContextProvider name={name}>
    <FormStep {...props} name={name} order={order} />
  </FormStepContextProvider>
);

FormizStep.propTypes = propTypesFormStep;
FormizStep.defaultProps = defaultPropsFormStep;
