import { useForm } from 'react-hook-form';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SignIn = () => {
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
    <div className='bg-red-50  p-4 flex justify-center items-center h-screen w-full'>
      <div className='relative drop-shadow-2xl  bg-gray-50 min-w-[450px]  overflow-hidden rounded-md md:grid grid-cols-1 gap-4 flex flex-col justify-center '>
        <div className='absolute right-2 top-2'>
          <Link to='/'>
            <IoMdArrowBack className='text-2xl' />
          </Link>
        </div>

        <div className='  rounded w-full p-4 flex flex-col justify-evenly'>
          <p
            tabIndex={0}
            className='focus:outline-none text-xl sm:text-2xl font-extrabold leading-6 text-gray-800'>
            Login to your account
          </p>
          <button
            aria-label='Continue with google'
            role='button'
            className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex justify-center items-center w-full mt-10'>
            <svg
              width={19}
              height={20}
              viewBox='0 0 19 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z'
                fill='#4285F4'
              />
              <path
                d='M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z'
                fill='#34A853'
              />
              <path
                d='M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z'
                fill='#FBBC05'
              />
              <path
                d='M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z'
                fill='#EB4335'
              />
            </svg>
            <p className='text-sm sm:text-md font-medium ml-4 text-gray-700'>
              Continue with Google
            </p>
          </button>
          <div className='w-full flex items-center justify-between py-5'>
            <hr className='w-full bg-gray-400' />
            <p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
              OR
            </p>
            <hr className='w-full bg-gray-400  ' />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
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
                })}
              />
              {errors.email?.type === 'required' && (
                <p role='alert' className='text-error'>
                  Email is required
                </p>
              )}
            </div>

            {/* ------------------------
                password Field
            ----------------------------*/}
            <div>
              <label
                htmlFor='pass'
                className='text-sm font-medium leading-none text-gray-800 '>
                Password
              </label>

              <input
                className='bg-gray-200 border rounded focus:outline-blue-600  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                id='pass'
                type='password'
                {...register('password', {
                  required: true,
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
                value='Login your account'
                className='focus:ring-2 bg-error focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none  border rounded hover:bg-rose-600 py-4 w-full transition-colors duration-300  cursor-pointer'
              />
            </div>
          </form>{' '}
          <p
            tabIndex={0}
            className='focus:outline-none text-xs sm:text-md mt-4 font-medium leading-none text-gray-500'>
            Don't have account?{' '}
            <Link
              to='/register'
              className='hover:text-blue-700 transition-all ease-in-out duration-500 focus:text-blue-700 focus:outline-none hover:underline text-sm  leading-none  text-blue-500 cursor-pointer'>
              click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
