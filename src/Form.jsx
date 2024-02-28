import { useState } from "react";

const initialValues = {
      login: '',
      email: '',
      tech: 'html',
}

export default function Form(params) {
   const [state, setState] = useState(initialValues);

   const handleSubmit = (e) => {
      e.preventDefault();

      console.log(state);

      setState(initialValues)
   }

   const changeLogin = e => {
      setState({
         ...state,
         [e.target.name]: e.target.value,
      })
   }

   return (
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
         <input type="text" name="login" value={state.login} onChange={changeLogin} />
         <input type="email" name="email" value={state.email} onChange={changeLogin} />
         <select name="tech" value={state.tech} onChange={changeLogin} >
            <option value="html">HTML</option>
            <option value="js">JavaScript</option>
            <option value="react">React</option>
         </select>

         <button type="submit">Submit</button>
      </form>
   );
};
