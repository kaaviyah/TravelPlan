import React, { useState } from "react";
import './Form.css';
const Form = ({ onSubmit, onClose, formData, handleChange, handleSubmit }) => {


    const isButtonDisabled = Object.values(formData).every((value) => value !== "");
    const buttonColorClass = isButtonDisabled ? "button-dark" : "button-light";

    return (
        <>
            <div className="card">
                <div className="form-container">
                    <form onSubmit={handleSubmit} >

                        <label className="label"> Title </label><br />

                        <input
                            name="title"
                            value={formData.title}
                            className="input-text"

                            onChange={handleChange} />

                        <br />



                        <label>
                            Start Date</label><br />
                        <input type="date"
                            name="startDate"
                            value={formData.startDate}
                            className="input-text"
                            onChange={handleChange} /><br />

                        <label>
                            End Date </label><br />
                        <input type="date"
                            name="endDate"
                            value={formData.endDate}
                            className="input-text"
                            onChange={handleChange}
                            min={formData.startDate}
                        />

                        <label>
                            Description </label><br />
                        <textarea
                            type="text"

                            name="description"
                            value={formData.description}
                            className="input-text"
                            onChange={handleChange} /><br />

                        <button className={buttonColorClass} type="submit" disabled={!isButtonDisabled}>Add</button>
                        <button className="btn3" onClick={onClose}>Close</button>


                    </form>
                </div>
            </div>
        </>
    )
}
export default Form;