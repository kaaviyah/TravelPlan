import React, { useCallback, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import './TravelPage.css';

const TravelPage = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        description: "",

    });
    const [travelData, setTravelData] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, [name]: value,
        }));
    };
    const cap = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("From data Submitted:", formData);
        const startDate = new Date(formData.startDate);
        const endDate = new Date(formData.endDate);
        const capTitle = cap(formData.title);
        const capDes = cap(formData.description);
        const totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

        setTravelData((prevData) => [...prevData,
        {
            ...formData,
            title: capTitle,
            description: capDes,
            totalDays: totalDays,
        },]);
        setFormData({
            title: "",
            startDate: "",
            endDate: "",
            description: "",

        });
    };
    const handleTableUpdate = (updatedData) => {
        const capData = updatedData.map((entry) => ({
            ...entry,
            title: cap(entry.title),
            description: cap(entry.description),
        }));

    }
    const isDateVaild = (dateStr) => {
        const currentDate = new Date();
        const selectedDate = new Date(dateStr);
        return selectedDate >= currentDate;
    };
    const isEndDateVaild = () => {
        if (!formData.startDate || !formData.endDate) {
            return true;
        }
        return new Date(formData.endDate) >= new Date(formData.startDate);
    };
    const openPopup = () => {
        setShowPopup(true);
    };
    const closePopup = () => {
        setShowPopup(false);
    };
    const openPopup1 = () => {
        setShowPopup1(true);
    };
    const closePopup1 = () => {
        setShowPopup1(false);
    };


    return (
        <div>
            <div className="travel-page">

                <h1 className="heading-name">Create NavigateNook</h1>
                <button className="btn1" onClick={openPopup}>Plan your Travel</button>
                <button className="btn5" onClick={openPopup1}>Travel History</button>


            </div>

            <>
                {
                    showPopup && (
                        <Form onClose={closePopup}
                            formData={formData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        ></Form>


                    )
                }

            </>
            <>
                {
                    showPopup1 && (
                        < Table onClose1={closePopup1}
                            travelData={travelData}
                            cap={cap}
                            // onClose={handleTableClose}
                            onUpdate={handleTableUpdate}
                        ></Table>


                    )
                }
            </>
        </div >
    )
}
export default TravelPage;