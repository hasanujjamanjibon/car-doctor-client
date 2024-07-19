const Sidebar = () => {
  return (
    <>
      <div className="space-y-4">
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
              <input id="Gear Up" type="radio" name="brand" value="Gear Up" />
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
              <label className="capitalize" htmlFor="battery">
                battery
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="brakes" type="radio" name="category" value="brakes" />
              <label className="capitalize" htmlFor="brakes">
                brakes
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="clutch disc"
                type="radio"
                name="category"
                value="clutch disc"
              />
              <label className="capitalize" htmlFor="clutch disc">
                clutch disc
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="bumper" type="radio" name="category" value="bumper" />
              <label className="capitalize" htmlFor="bumper">
                bumper
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="engine" type="radio" name="category" value="engine" />
              <label className="capitalize" htmlFor="engine">
                engine
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gas pedal"
                type="radio"
                name="category"
                value="gas pedal"
              />
              <label className="capitalize" htmlFor="gas pedal">
                gas pedal
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gear lever"
                type="radio"
                name="category"
                value="gear lever"
              />
              <label className="capitalize" htmlFor="gear lever">
                gear lever
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="gear shift"
                type="radio"
                name="category"
                value="gear shift"
              />
              <label className="capitalize" htmlFor="gear shift">
                gear shift
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="car grill"
                type="radio"
                name="category"
                value="car grill"
              />
              <label className="capitalize" htmlFor="car grill">
                car grill
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="car hood"
                type="radio"
                name="category"
                value="car hood"
              />
              <label className="capitalize" htmlFor="car hood">
                car hood
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input id="horn" type="radio" name="category" value="horn" />
              <label className="capitalize" htmlFor="horn">
                horn
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="oil filter"
                type="radio"
                name="category"
                value="oil filter"
              />
              <label className="capitalize" htmlFor="oil filter">
                oil filter
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="rear mirror"
                type="radio"
                name="category"
                value="rear mirror"
              />
              <label className="capitalize" htmlFor="rear mirror">
                rear mirror
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="side mirror"
                type="radio"
                name="category"
                value="side mirror"
              />
              <label className="capitalize" htmlFor="side mirror">
                side mirror
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="spark plug"
                type="radio"
                name="category"
                value="spark plug"
              />
              <label className="capitalize" htmlFor="spark plug">
                spark plug
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="steering"
                type="radio"
                name="category"
                value="steering"
              />
              <label className="capitalize" htmlFor="steering">
                steering
              </label>
            </div>
            <div className="space-x-1 text-[1rem] font-medium">
              <input
                id="suspension"
                type="radio"
                name="category"
                value="suspension"
              />
              <label className="capitalize" htmlFor="suspension">
                suspension
              </label>
            </div>
          </div>
        </div>

        {/* --------------
           Submit & reset button
        ------------------*/}
        <div className="space-x-5">
          <button className="btn btn-info text-white capitalize btn-sm"> submit</button>
          <button className="btn btn-outline btn-error capitalize btn-sm">
            {" "}
            reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
