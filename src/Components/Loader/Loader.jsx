import loader from '/img/loader/loader.gif';

const Loader = () => {
  return (
    <div className='grid place-items-center h-screen'>
      <div className='text-center'>
        <img src={loader} className='h-12 w-12 mx-auto' alt='' />
      </div>
    </div>
  );
};
export default Loader;
