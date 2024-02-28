import css from "../Contact/Contact.module.css"
export const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <>
        <div className={css.listContact}>
            <div>
                <p>{name}</p>
                <p>{number}</p> 
            </div>
        <button onClick={() => onDelete(id)}>
            Delete
        </button>
        </div>
        </>
    )
}