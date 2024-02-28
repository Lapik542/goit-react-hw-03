import { Contact } from "../Contact/Contact"
import css from "../ContactList/ContactList.module.css"

export const ContactList = ({contacts, onDelete}) => {
    console.log(contacts)
    return (<>
    <ul className={css.list}>
        {contacts.map((contact) => (
             <li className={css.item} key={contact.id}>
                <Contact data={contact} onDelete={onDelete} />
            </li>
        ))}
    </ul>
    </>)
}