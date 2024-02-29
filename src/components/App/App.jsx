import { useEffect, useState } from "react";
import users from "../../users.json";
import css from "../App/App.module.css"
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";

export const App = () => {
   const [contacts, setContacts] = useState(users);
   const [filter, setFilter] = useState("");

   useEffect(() => {
      const storedContacts = localStorage.getItem("contacts");
      if (storedContacts) {
         setContacts(JSON.parse(storedContacts));
      } else {
         setContacts(users);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
   }, [contacts]);

   const addContact = newContact => {
      setContacts(prevContacts => {
         return [...prevContacts, newContact];
      });
   };

   const deleteContact = contactId => {
      setContacts(prevContacts => {
         return prevContacts.filter(contact => contact.id !== contactId);
      });
   };

   const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
   );

   return (
      <div className={css.Form}>
         <h1>Phonebook</h1>
         <ContactForm onAdd={addContact} />
         <SearchBox value={filter} onFilter={setFilter} />
         <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
   );
};
