import React from "react";
import rectangle from "../../images/Combined-Shape.png";

const gallery = [
    {
        id: 1,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 2,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 3,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 4,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 5,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 6,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 7,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 8,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 9,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
    {
        id: 10,
        img: rectangle,
        text: "Your passport photo (White background)"
    },
]

export default function Kyc() {
    return (
        <>
            <div className="kycText">
                <h5>
                    Your information is collected for legal and security purposes only
                </h5>
            </div>
            <div className="contentText">
               <h3>Note:</h3>
                <h4> Upload only .jpg/jpeg or .png extension image file !!</h4>
            </div>
            <div className="galleryBox">
                {gallery.map((data) => {
                    return (
                        <>
                            <div className="galleryCard">
                                <label htmlFor="files">
                                    <div className="gallery">
                                        <img src={data.img} alt="" />
                                        <h3>{data.text}</h3>
                                    </div>
                                </label>
                                <div className="galleryFile">
                                    <input type="file" id="files" />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            <div className="submitBtn">
                <button>Submit</button>
            </div>
        </>
    )
}