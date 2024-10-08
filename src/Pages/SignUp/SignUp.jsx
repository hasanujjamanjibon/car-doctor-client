import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LogoSVG from '../../Components/LogoSVG/LogoSVG';
import { FaEyeLowVision } from 'react-icons/fa6';
import { IoMdArrowBack } from 'react-icons/io';

const SignUp = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <>
      <div className='bg-teal-100 p-6 flex justify-center items-center h-screen w-full '>
        <div className='  min-w-[450px] bg-gray-50 relative border overflow-hidden rounded-md lg:grid grid-cols-1 gap-4'>
          <div className='absolute right-2 top-2'>
            <Link to='/'>
              <IoMdArrowBack className='text-2xl' />
            </Link>
          </div>
          <div className=' rounded w-full p-4 flex flex-col justify-center '>
            <div className='flex justify-center items-center'>
              <LogoSVG height={'100'} width={'100'} />
            </div>
            <p
              tabIndex={0}
              className='focus:outline-none text-2xl mt-4 font-extrabold leading-6 text-gray-800'>
              Register your account.
            </p>
            <p
              tabIndex={0}
              className='focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500'>
              Already have an account?{' '}
              <Link
                to='/login'
                className=' transition-all ease-in-out duration-500  focus:outline-none hover:underline text-sm  leading-none  text-rose-500 cursor-pointer'>
                click here
              </Link>
            </p>
            <div className='w-full flex items-center justify-between py-5'>
              <hr className='w-full bg-gray-400  ' />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-1'>
              {/* ------------------------
                name Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor='name'
                  className='text-sm font-medium leading-none text-gray-800'>
                  Full Name
                </label>

                <input
                  type='text'
                  id='name'
                  className='bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  {...register('fullName', {
                    required: true,
                    pattern: /^[a-zA-Z ]+$/i,
                  })}
                />
                {errors.fullName?.type === 'required' && (
                  <p role='alert' className='text-error'>
                    Full name is required
                  </p>
                )}
              </div>
              {/* ------------------------
                email Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor='email'
                  className='text-sm font-medium leading-none text-gray-800'>
                  Email
                </label>
                <input
                  className='bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  type='email'
                  id='email'
                  {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i,
                  })}
                />{' '}
                {errors.email?.type === 'required' && (
                  <p role='alert' className='text-error'>
                    Email is required
                  </p>
                )}
              </div>
              {/* ------------------------
                role Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor='role'
                  id='role'
                  className='text-sm font-medium leading-none text-gray-800'>
                  Role
                </label>
                <select
                  {...register('role', { required: true })}
                  defaultValue='role'
                  className='bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'>
                  <option disabled value='role'>
                    Role
                  </option>
                  <option value='Seller'>Seller</option>
                  <option value='Customer'>Customer</option>
                </select>
                {errors.role?.type === 'required' && (
                  <p role='alert' className='text-error'>
                    Role is required
                  </p>
                )}
              </div>

              {/* ------------------------
                passowrd Field
            ----------------------------*/}
              <div>
                <label
                  htmlFor='pass'
                  className='text-sm font-medium leading-none text-gray-800'>
                  Password
                </label>

                <input
                  className=' bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 '
                  type='password'
                  {...register('password', {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/i,
                  })}
                />

                {errors.password?.type === 'required' && (
                  <p role='alert' className='text-error'>
                    Password is required
                  </p>
                )}
              </div>

              <div className='!mt-4'>
                <input
                  type='submit'
                  value='Create your account'
                  className='focus:scale-[.98]   text-sm font-semibold leading-none text-white focus:outline-none  border rounded hover:bg-blue-700 bg-blue-500 py-4 w-full transition-all duration-300 ease-in-out  cursor-pointer'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
