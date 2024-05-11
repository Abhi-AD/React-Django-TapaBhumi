import * as yup from 'yup';

// Define a regular expression for 10-digit phone number
export const MOBILE_NUMBER_PATTERN = /^[0-9]{10}$/;

export const visitCardSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  post: yup.string().required('Designation is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(MOBILE_NUMBER_PATTERN, 'Phone number  10 digits')
    .required('Phone number is required'),
  website: yup.string().url('Invalid URL').required('Website URL is required'),
  address_line_1: yup.string().required('Permanent address'),
  address_line_2: yup.string(),
});


export const ContactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(MOBILE_NUMBER_PATTERN, 'Phone number  10 digits')
    .required('Phone number is required'),
    message: yup.string().required('Please input the your description'),
    workRadio: yup.string().required('Please input the any button click'),
    service: yup.array().required('Check the Service'),
    country: yup.string().required('Permanent address'),
});
