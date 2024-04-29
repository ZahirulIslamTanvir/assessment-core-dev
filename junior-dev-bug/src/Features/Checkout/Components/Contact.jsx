import React from 'react'
import Input from '../../../Components/Share/Input'
import TextArea from '../../../Components/Share/TextArea'
import { DropDown, Label } from './Handler'


export default function Contact({ register,errors }) {
    return (
        <div>
            <div className="space-y-4 first:space-y-5">
                <h1 className="text-textHeader font-medium text-lg">Contact Information</h1>
                <div className="space-y-2 ">
                    <Label title={"Email Address"} />
                    <Input placeholder="Email ...." name="email" register={{ ...register('email',{required:true,pattern:/^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/}) }} />
                    {errors.email && errors.email.type ==="required" && (<p className='text-red-800'>
                        Please enter your email address
                    </p>)}
                    {errors.email && errors.email.type ==="pattern" && (<p className='text-red-800'>
                        Please enter a valid email address Example:example@gmail.com
                    </p>)}
                </div>
                <div className="space-y-2 relative">
                    <Label title={"Phone Number"} />
                    <Input placeholder="Phone number ...." className="pl-32" type="number" register={{ ...register('phone',{required:true}) }} />
                     {errors.phone && errors.phone.type ==="required" && (<p className='text-red-800'>
                        Please enter your phone number
                    </p>)}
                    <DropDown />
                </div>
                <div className="space-y-2 relative">
                    <Label title={"Alternative Phone Number (Optional)"} />
                    <Input placeholder="Alternative Number- ...." className="pl-32" type="number" register={{ ...register('altPhone') }} />
                    <DropDown />
                </div>
            </div>
            <div className="space-y-4 first:space-y-5 pt-12">
                <h1 className="text-textHeader font-medium text-lg">Shipping address</h1>
                <div className="flex space-x-3.5">
                    <div className="space-y-2 w-full">
                        <Label title={"First Name"} />
                        <Input placeholder="Enter your first name" name="firstName" register={{ ...register('firstName',{required:true}) }} />
                        {errors.firstName && errors.firstName.type ==="required" && (<p className='text-red-800'>
                        Please enter your first name
                        </p>)}
                    </div>
                    <div className="space-y-2 w-full">
                        <Label title={"Last Name"} />
                        <Input placeholder="Enter your last name" name="lastName" register={{ ...register('lastName',{required:true}) }} />
                        {errors.lastName && errors.lastName.type ==="required" && (<p className='text-red-800'>
                            Please enter your last name
                        </p>)}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label title="Address" />
                    <Input placeholder="Enter your address" name="address" register={{ ...register('address',{required:true}) }} />
                    {errors.address && errors.address.type ==="required" && (<p className='text-red-800'>
                            Please enter your last address
                    </p>)}
                </div>
                <div className="flex space-x-3.5">
                    <div className="space-y-2">
                        <Label title="City" />
                        <Input placeholder="Enter your City" name="city" register={{ ...register('city',{required:true}) }} />
                        {errors.city && errors.city.type ==="required" && (<p className='text-red-800'>
                            Please enter your city
                        </p>)}
                    </div>
                    <div className="space-y-2">
                        <Label title="Area" />
                        <Input placeholder="Enter your area" name="area" register={{ ...register('area',{required:true}) }} />
                        {errors.area && errors.area.type ==="required" && (<p className='text-red-800'>
                            Please enter your area
                        </p>)}
                    </div>
                    <div className="space-y-2">
                        <Label title="Zip code" />
                        <Input placeholder="Enter your zip" name="zip" register={{ ...register('zip',{required:true}) }} />
                        {errors.zip && errors.zip.type ==="required" && (<p className='text-red-800'>
                            Please enter your zip code
                        </p>)}
                    </div>
                </div>
                <div className="space-y-2">
                    <Label title="Delivery Instructions (Optional)" />
                    <TextArea placeholder="Enter your delivery instructions" name="delivery" register={{ ...register('delivery') }} />
                </div>
            </div>
        </div>
    )
}
