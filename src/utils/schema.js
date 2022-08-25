import * as yup from 'yup';

// const USER_NAME_REGEX = /^(?=[a-z0-9._]{4,12}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
// const FULL_NAME_REGEX = /^(?=(\S)[a-zA-Z\s]{2,16}(\S)$)(?!.*[\s]{2})/;

export const loginYup = yup.object().shape({
  email: yup.string().required('This field is required').email('invalid email address'),
  password: yup.string().required('This field is required').min(8, 'requied more than length 8'),
});

export const signUpYup = yup.object().shape({
  email: yup.string().required('This field is required').email('invalid email address'),
  password: yup.string().required('This field is required').min(8, 'requied more than length 8'),
});

export const toDoYup = yup.object().shape({
  title: yup.string().required('This field is required'),
});
