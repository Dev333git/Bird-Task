import React from "react";

export default function Membership() {
    return (
        <>
            <div>
                <div className="membershipText">
                    <h5>
                        Please chose your membership
                    </h5>
                </div>
                <div className="memberText">
                    <h2>You have applied for Basic memberships</h2>
                </div>
                <div className="memberBtn">
                    <div className="btn1">
                        <button>Basic</button>
                    </div>
                    <div>
                        <button>Advance</button>
                    </div>
                </div>
                <div className="memberCard">
                    <h3>You need to pay 250
                        to subscribe this membership</h3>
                </div>
                <div className="payBtn">
                    <button>Pay Now</button>
                </div>
            </div>
        </>
    )
}