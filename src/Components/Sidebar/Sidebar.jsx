const Sidebar = ({ shown, isShown }) => {
  return (
    <>
      <div
        className={`transition-transform duration-1000    space-y-8 z-40  lg:max-h-full mx-4 p-4 bg-white overflow-y-auto   left-0 top-0 bottom-0 fixed  relative   lg:w-1/5 ${
          shown ? "translate-x-0 " : "-translate-x-96 "
        }`}
      >
        <div
          onClick={() => isShown(!shown)}
          className="absolute right-0 top-0 block lg:hidden"
        >
          <span>
            <img
              className="h-8 bg-yellow-300 w-8 rounded-full p-2"
              src="https://i.postimg.cc/KY3bWMPv/close.png"
              alt="close"
            />
          </span>
        </div>
        {/* --------------
            Price Filter
        ------------------*/}
        <div className="w-full space-y-4">
          <span className="py-2 bg-rose-200 font-semibold text-xl w-full inline-block ps-1">
            Price
          </span>
          <div className="flex items-center gap-2 justify-start overflow-hidden w-full">
            <input
              type="text"
              className="px-2 py-2 border max-w-20 rounded-sm"
              placeholder="min."
              defaultValue={0}
            />{" "}
            ৳
            <input
              type="text"
              className="px-2 py-2 border max-w-20 rounded-sm"
              placeholder="max."
              defaultValue={30000}
            />{" "}
            ৳
          </div>
        </div>
        {/* --------------
            brand Filter
        ------------------*/}
        <div className="w-full space-y-4">
          <span className="py-2 bg-rose-200 font-semibold text-xl w-full inline-block ps-1">
            Brands
          </span>
          <div className="space-y-2">
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="AutoTech" type="radio" name="brand" value="AutoTech" />
              <label htmlFor="AutoTech">AutoTech</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="PartsPro"
                type="radio"
                name="brand"
                value="Parts Pro"
              />
              <label htmlFor="PartsPro">Parts Pro</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="CarQuest" type="radio" name="brand" value="CarQuest" />
              <label htmlFor="CarQuest">CarQuest</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="Turbo Motors"
                type="radio"
                name="brand"
                value="Turbo Motors"
              />
              <label htmlFor="Turbo Motors">Turbo Motors</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="Precision"
                type="radio"
                name="brand"
                value="Precision"
              />
              <label htmlFor="Precision">Precision</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="gas pedal" type="radio" name="brand" value="Gear Up" />
              <label htmlFor="GearUp">Gear Up</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="AutoMates"
                type="radio"
                name="brand"
                value="AutoMates"
              />
              <label htmlFor="AutoMates">AutoMates</label>
            </div>
          </div>
        </div>
        {/* --------------
            category Filter
        ------------------*/}
        <div className="w-full space-y-4">
          <span className="py-2 bg-rose-200 font-semibold text-xl w-full inline-block ps-1">
            Category
          </span>
          <div className="space-y-2 ">
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="battery"
                type="radio"
                name="category"
                value="battery"
              />
              <label htmlFor="battery">battery</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="brakes" type="radio" name="category" value="brakes" />
              <label htmlFor="brakes">brakes</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="clutch disc"
                type="radio"
                name="category"
                value="clutch disc"
              />
              <label htmlFor="clutch disc">clutch disc</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="bumper" type="radio" name="category" value="bumper" />
              <label htmlFor="bumper">bumper</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="engine" type="radio" name="category" value="engine" />
              <label htmlFor="engine">engine</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gas pedal"
                type="radio"
                name="category"
                value="gas pedal"
              />
              <label htmlFor="gas pedal">gas pedal</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gear lever"
                type="radio"
                name="category"
                value="gear lever"
              />
              <label htmlFor="gear lever">gear lever</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gear shift"
                type="radio"
                name="category"
                value="gear shift"
              />
              <label htmlFor="gear shift">gear shift</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="car grill"
                type="radio"
                name="category"
                value="car grill"
              />
              <label htmlFor="car grill">car grill</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="car hood"
                type="radio"
                name="category"
                value="car hood"
              />
              <label htmlFor="car hood">car hood</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="horn" type="radio" name="category" value="horn" />
              <label htmlFor="horn">horn</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="oil filter"
                type="radio"
                name="category"
                value="oil filter"
              />
              <label htmlFor="oil filter">oil filter</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="rear mirror"
                type="radio"
                name="category"
                value="rear mirror"
              />
              <label htmlFor="rear mirror">rear mirror</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="side mirror"
                type="radio"
                name="category"
                value="side mirror"
              />
              <label htmlFor="side mirror">side mirror</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="spark plug"
                type="radio"
                name="category"
                value="spark plug"
              />
              <label htmlFor="spark plug">spark plug</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="steering"
                type="radio"
                name="category"
                value="steering"
              />
              <label htmlFor="steering">steering</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="suspension"
                type="radio"
                name="category"
                value="suspension"
              />
              <label htmlFor="suspension">suspension</label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gear lever"
                type="radio"
                name="category"
                value="gear lever"
              />
              <label htmlFor="gear lever">gear lever</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
