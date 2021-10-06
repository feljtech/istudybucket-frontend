import React from "react";
import bulb from "../../assets/img/bulb.jpg";
import Card from "../../__sub__/Card";
const RSideBar = ({ ...props }) => {
  return (
    <div className="overflow-y-auto" {...props}>
      <div className="my-3">
      <p className="font-semibold text-xl">Your buckets</p>
      <Card>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded-full self-center" />
          <div className="flex flex-col text-left self-center mx-2">
          <p className="font-semibold text-md text-gray-600">The Light bulb</p>
            <span className="text-xs">
              A purposeful area for the formation....
            </span>
          </div>
        </div> 
      </Card>
        <Card>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded-full self-center" />
          <div className="flex flex-col text-left self-center mx-2">
          <p className="font-semibold text-md text-gray-600">The Light bulb</p>
            <span className="text-xs">
              A purposeful area for the formation....
            </span>
          </div>
        </div> 
      </Card>
  
      </div>
      <div className="my-3">
        <p className="font-semibold text-xl">Discover more buckets</p>
        <Card>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded-full self-center" />
          <div className="flex flex-col text-left self-center mx-2">
          <p className="font-semibold text-md text-gray-600">The Light bulb</p>
            <span className="text-xs">
              A purposeful area for the formation....
            </span>
          </div>
        </div> 
      </Card>
      <Card>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded-full self-center" />
          <div className="flex flex-col text-left self-center mx-2">
          <p className="font-semibold text-md text-gray-600">The Light bulb</p>
            <span className="text-xs">
              A purposeful area for the formation....
            </span>
          </div>
        </div> 
      </Card>
      <Card>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded-full self-center" />
          <div className="flex flex-col text-left self-center mx-2">
          <p className="font-semibold text-md text-gray-600">The Light bulb</p>
            <span className="text-xs">
              A purposeful area for the formation....
            </span>
          </div>
        </div> 
      </Card>
      </div>
    </div>
  );
};

export default RSideBar;
