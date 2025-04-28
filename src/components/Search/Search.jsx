import style from './Search.module.css';

export function Search(props) {
    return (
        <div className={style.headerSearch}>
            <form action="">
                <input type="search" placeholder='Որոնում'/>
                <i className={`bi bi-search ${style['bi-search']}`}></i>
            </form>
        </div>
    );
}