const Accordion = () => {
  return (
    <div className="text-center space-y-10">
      <span className="inline-block px-4 text-3xl font-bold border-b-rose-600 border-b-4 pb-2">
        Faq
      </span>
      <div className="grid lg:grid-cols-2 gap-8 place-items-center text-left">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Click to open this one and close others
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
        <div className="h-96">
          <img
            className="h-full"
            src="https://i.postimg.cc/J0ctHTMG/faq.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Accordion;
