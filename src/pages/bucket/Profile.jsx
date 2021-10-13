import React from "react";
import ModalBase from "../../modals";
import Button from "../../__sub__/Button";
import Card from "../../__sub__/Card";
import img from "../../assets/img/bulb.jpg";

const Profile = ({ name, img, description, ...props }) => {
    const [showModal, setShowModal] = React.useState(true)
  return showModal && (
      <div className={showModal && "fixed top-5 left-0 w-full h-screen flex justify-center items-center bg-gray-500 bg-opacity-90 z-40" || ""}
      >
          <div
				id="overlay"
				onClick={()=>setShowModal(false)}
				className="absolute h-screen w-full -z-10"
			/>
          <Card
          className="border text-center mt-3 w-1/2 rounded-md pb-4 bg-white z-50"
          {...props}
        >
          <div className="w-full h-10 bg-green-400 rounded-t-md"></div>
          {/* <div className="flex my-3 flex-row justify-center">
            <img className="rounded-full h-40 w-40" src={img} alt={img.slice(14)} />
          </div> */}
          <h1 className="font-bold self-center ml-3">{name}</h1>
          <Button name="Request to join" type="button" />
          <p className="text-gray-500 pt-2">{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus deleniti incidunt autem excepturi nesciunt nobis perspiciatis totam dignissimos quae sequi laboriosam soluta, perferendis explicabo vero saepe? Quibusdam, exercitationem veniam?</p>
        </Card>
  
      </div>

  );
};

export default Profile;
