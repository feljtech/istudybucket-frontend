import React from 'react'
import Button from '../../__sub__/Button'
import Card from '../../__sub__/Card'

const Profile = ({name, img, description, ...props}) => {
    return (
            <Card className="border text-center mt-3 w-2/3 rounded-md pb-4" {...props}>
                <div className="w-full bottom-5 h-10 bg-green-400 rounded-t-md"></div>
                <div className="flex my-3 flex-row justify-center">
                    <img className="rounded-full h-40 w-40" src={img} alt={img} />
                   
                </div>
                <h1 className="font-bold self-center ml-3">{name}</h1>
                <Button name="Request to join" type="button" /> 
                <p className="text-gray-400">{description}</p>
               
            </Card>        
    )
}

export default Profile
