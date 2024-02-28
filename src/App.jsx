import { useState } from "react";
import UserForm from "./UserForm"
import TextInput from "./TextInput";
import LangSwitcher from "./LangSwitcher";
import Form from "./Form";

function App() {
   const [text, setText] = useState('qwerty');
   const [lang, setLang] = useState('uk');
   const [user, setUser] = useState(null);

   const saveUser = user => {
      console.log(user);
      setUser(user);
   }
   return (
      <>
         <div>User Form</div>
         {user && <p>{user.username}</p>}
         {user && <p>{user.role}</p>}
         <UserForm onSaveUser={saveUser} />

         <hr />

         <TextInput value={text} onChange={setText} />
         <p>{text}</p>

         <hr />
         <LangSwitcher lang={lang} onSelect={setLang} />
         <p>Current lang: {lang}</p>

         <hr />
         <Form />
      </>
   );
}

export default App
