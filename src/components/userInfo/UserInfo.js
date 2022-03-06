import React, { useRef } from 'react';
import "./UserInfo.css";
import userImage from "../../assets/images/userImage.jpg";


const UserInfo = () => {

    const detailsRef = useRef();

    const blurHandler = () => {
        if(detailsRef.current.open) {
            detailsRef.current.open = false;
        }
    }


    return (
        <div className='userinfoContainer'>
            <details ref={detailsRef} className="custom-select" onBlur={blurHandler}>
                <summary className="radios">
                    <input type="radio" name="item" id="default" title="Reza Shokri" checked={true} readOnly/>
                    <input type="radio" name="item" id="account" title="account" />
                    <input type="radio" name="item" id="calendar" title="calendar" />
                    <input type="radio" name="item" id="chat" title="chat" />
                </summary>
                <ul className="list">
                    <li>
                        <label htmlFor="account">account</label>
                    </li>
                    <li>
                        <label htmlFor="calendar">calendar</label>
                    </li>
                    <li>
                        <label htmlFor="chat">chat</label>
                    </li>
                </ul>
            </details>
            <img className="userImage" src={userImage} alt='userImage' />
        </div>
    );
}
 
export default UserInfo;