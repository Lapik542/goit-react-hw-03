import css from "../ContactForm/ContactForm.module.css"

export const ContactForm = ({onAdd}) => {

    const handleSubmit = e => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            name: e.target.elements.text.value,
            number: e.target.elements.number.value,
        });
        e.target.reset();
    };

    return (<>
    <form className={css.form} onSubmit={handleSubmit}>
    <label htmlFor="">Name</label>
    <input className={css.inputText} type="text" name="text" />
    <label className={css.labelNum} htmlFor="">Number</label>
    <input className={css.inputNum} type="text" name="number" />
    <button className={css.btnAddContact}>Add contact</button>
    </form>

    </>)
}