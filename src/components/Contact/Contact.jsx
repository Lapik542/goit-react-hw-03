import css from "../Contact/Contact.module.css"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

export const Contact = ({ data: { id, name, number },
onDelete }) => {
    return (
        <>
        <div className={css.listContact}>
            <div className="userNamePhone">
                <p><FaUser className="userSvgIcon" /> {name}</p>
                <p><FaPhoneAlt className="userSvgIcon" /> {number}</p> 
            </div>
        <button onClick={() => onDelete(id)}>
            Delete
        </button>
        </div>
        </>
    )
}