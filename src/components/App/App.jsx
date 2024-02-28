import users from "../../users.json";
import css from "../App/App.module.css"
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { useState } from "react";

export const App =() => {
   const [contacts, setContacts] = useState(users);
   
   const addContact = (newContact) => {
      setContacts((prevContacts) => {
         return [...prevContacts, newContact];
      })
   };

   const deleteContact = contactId => {
      setContacts((prevContacts) => {
         return prevContacts.filter((contact) => contact.id !== contactId)
      })
   }
   return (
      <div className={css.Form}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={deleteContact} />
      </div>
   )
}