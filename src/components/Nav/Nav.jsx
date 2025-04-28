import { Search } from '../Search/Search';
import { NavRight } from '../NavRight/NavRight.Jsx';
import style from './Nav.module.css';

export function Nav({ socialIcons, classIcons, infoIcons }) {
    return (
        <nav>
            <div className={style.container}>
                <a href="#" className={style.logo}></a>
                <Search />
                <NavRight socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons} />
            </div>
        </nav>
    );
}