import React from "react";
import bulb from "../../assets/img/bulb.jpg";
import Card from "../../__sub__/Card";
const RSideBar = ({ ...props }) => {
  return (
    <div className="overflow-y-auto" {...props}>
      <div className="my-3">
        <Card>
        <p className="font-semibold text-xl">Your buckets</p>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded self-center" />
          <div className="flex flex-col text-left mx-2">
          <p className="font-semibold text-lg text-gray-600">The Light bulb</p>
            <span className="hidden">
              A purposeful area for the formation....
            </span>
          </div>
        </div>
        </Card>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded self-center" />
          <div className="flex flex-col text-left mx-2">
          <p className="font-semibold text-lg text-gray-600">The Light bulb</p>
            <span className="hidden">
    
              A purposeful area for the formation....
            </span>
          </div>
        </div>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded self-center" />
          <div className="flex flex-col text-left mx-2">
            <p className="font-semibold text-lg text-gray-600">The Light bulb</p>
            <span className="hidden">
              A purposeful area for the formation....
            </span>
          </div>
        </div>
 
      </div>
      <div className="my-3">
        <p className="font-semibold text-xl">Discover more bucket spaces</p>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded self-center" />
          <div className="flex flex-col text-left mx-2">
          <p className="font-semibold text-lg text-gray-600">The Light bulb</p>
            <span className="hidden">
    
              A purposeful area for the formation....
            </span>
          </div>
        </div>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded self-center" />
          <div className="flex flex-col text-left mx-2">
          <p className="font-semibold text-lg text-gray-600">The Light bulb</p>
            <span className="hidden">
    
              A purposeful area for the formation....
            </span>
          </div>
        </div>
        <div className="flex justify-items-start my-3">
          <img src={bulb} alt="bulb" className="w-14 h-14 rounded self-center" />
          <div className="flex flex-col text-left mx-2">
          <p className="font-semibold text-lg text-gray-600">The Light bulb</p>
            <span className="hidden">
    
              A purposeful area for the formation....
            </span>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default RSideBar;
