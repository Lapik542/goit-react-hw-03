import css from "../SearchBox/SearchBox.module.css"
export const SearchBox = () => {
    return (<>
    <label className={css.info} htmlFor="">Find contacts by name</label>
    <input type="text" />
    </>)
}