import React, { useState } from 'react';
import './Newhome.css';

const Newhome = () => {
    const [userInput,setUserInput] = useState({
        userfirstname: "",
        userlastname: "",
        email: "",
        phone: "",
        city: "",
        address: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInput({...userInput, [name] : value})
    }

    return(
        <>
            <div class="wrapper">
        <div class="form-container">
            <div class="form">
                <div class="heading">
                    <h2>New Donation Request</h2>
                </div>


                <div class="form-wrap fullname">
                    <div class="form-item">
                        <label htmlFor="userfirstname">First Name</label>
                        <input type="text" value={userInput.userfirstname} onChange={handleInput} name="userfirstname" id="userfirstname" required/>
                    </div>
                    <div class="form-item">
                        <label htmlFor="userlastname">Last Name</label>
                        <input type="text" value={userInput.userlastname} onChange={handleInput} name="userlastname" id="userlastname" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="email">E-mail Address</label>
                        <input type="email" value={userInput.email} onChange={handleInput} name="email" id="email" required/>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="phone">Phone</label>
                        <input type="number" value={userInput.phone} onChange={handleInput} name="phone" id="phone" required/>
                    </div>
                </div>

                <div class="form-wrap select-box">
                    <div class="form-item">
                        <label htmlFor="city">City</label>
                        <input type="text" value={userInput.city} onChange={handleInput} name="city" id="city" required/>
                    </div>

                    <div class="form-item">
                        <label>Donation Region</label>
                        <select name="address">
                            <option>Region-1</option>
                            <option>Region-2</option>
                            <option>Region-3</option>
                            <option>Region-4</option>
                            <option>Region-5</option>
                        </select>
                    </div>
                </div>

                <div class="form-wrap">
                    <div class="form-item">
                        <label htmlFor="address">Address</label>
                        <input type="text" value={userInput.address} onChange={handleInput} name="address" id="address" required/>
                    </div>
                </div>

                <div class="form-wrap select-box">
                    <div class="form-item2">
                        <label>Category of Item for Donation</label>
                        <select name="address">
                            <option>Perishable Food Items</option>
                            <option>Stationary and Books</option>
                            <option>Furniture</option>
                            <option>Electronic Items</option>
                            <option>Clothes</option>
                        </select>
                    </div>
                </div>
                <br/>

                <div class="form-wrap">
                    <div class="form-item">
                        <label>Please upload the image of item to be donated (in exact same condition)</label>
                        <input type="file" required/>
                    </div>
                </div>
                <br/>

                <div class="btn">
                    <input type="submit" value="Submit Request"/>
                </div>

            </div>
        </div>
    </div>
        </>
    )
}

export default Newhome