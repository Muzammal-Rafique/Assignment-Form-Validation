'use client'
import { useFormik } from 'formik';
import * as yup from 'yup';

const Form = () => {
  const validationSchema = yup.object({
    name: yup.string().matches(/^[A-Za-z\s]+$/, 'Name must not contain numbers or special characters').required('Name is required'),
    fathersName: yup.string().matches(/^[A-Za-z\s]+$/, "Father's Name must not contain numbers or special characters").required("Father's Name is required"),
    dob: yup.string().matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date format (DD-MM-YYYY)').required('Date of Birth is required'),
    cnic: yup.string().matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format (00000-0000000-0)').required('CNIC is required'),
    mobile: yup.string().matches(/^\d{11}$/, 'Invalid mobile number').required('Mobile number is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    nationality: yup.string().matches(/^[A-Za-z\s]+$/, 'Nationality must not contain numbers or special characters').required('Nationality is required'),
    religion: yup.string().matches(/^[A-Za-z\s]+$/, 'Religion must not contain numbers or special characters').required('Religion is required'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match').required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      fathersName: '',
      dob: '',
      cnic: '',
      mobile: '',
      email: '',
      nationality: '',
      religion: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
        const { password, confirmPassword, ...otherValues } = values;
        alert(JSON.stringify(otherValues, null, 2));
        resetForm();
      },
  });

  return (
    <>
    <h1 className='font-bold pt-2 text-center'>Assignment of Form Validation</h1>
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto mt-4">
        <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          {...formik.getFieldProps('name')}
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="fathersName" className="block text-sm font-medium text-gray-700">
          Father's Name
        </label>
        <input
          {...formik.getFieldProps('fathersName')}
          type="text"
          id="fathersName"
          name="fathersName"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.fathersName && formik.errors.fathersName && (
          <div className="text-red-500">{formik.errors.fathersName}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
          Date of Birth
        </label>
        <input
          {...formik.getFieldProps('dob')}
          type="text"
          id="dob"
          name="dob"
          placeholder="DD-MM-YYYY"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.dob && formik.errors.dob && (
          <div className="text-red-500">{formik.errors.dob}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="cnic" className="block text-sm font-medium text-gray-700">
          CNIC
        </label>
        <input
          {...formik.getFieldProps('cnic')}
          type="text"
          id="cnic"
          name="cnic"
          placeholder="00000-0000000-0"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.cnic && formik.errors.cnic && (
          <div className="text-red-500">{formik.errors.cnic}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
          Mobile
        </label>
        <input
          {...formik.getFieldProps('mobile')}
          type="text"
          id="mobile"
          name="mobile"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.mobile && formik.errors.mobile && (
          <div className="text-red-500">{formik.errors.mobile}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          {...formik.getFieldProps('email')}
          type="text"
          id="email"
          name="email"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
          Nationality
        </label>
        <input
          {...formik.getFieldProps('nationality')}
          type="text"
          id="nationality"
          name="nationality"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.nationality && formik.errors.nationality && (
          <div className="text-red-500">{formik.errors.nationality}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
          Religion
        </label>
        <input
          {...formik.getFieldProps('religion')}
          type="text"
          id="religion"
          name="religion"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.religion && formik.errors.religion && (
          <div className="text-red-500">{formik.errors.religion}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          {...formik.getFieldProps('password')}
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500">{formik.errors.password}</div>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          {...formik.getFieldProps('confirmPassword')}
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          className="mt-1 p-2 border rounded-md w-full"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-500">{formik.errors.confirmPassword}</div>
        )}
      </div>

      <div className="mb-4">
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default Form;
function resetForm() {
    throw new Error('Function not implemented.');
}

