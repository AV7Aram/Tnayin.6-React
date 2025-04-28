import { Nav } from '../Nav/Nav'
import style from './Header.module.css'

export function Header({socialIcons, classIcons, infoIcons}) {
    return (
        <header className={style.header}>
            <Nav socialIcons={socialIcons} classIcons={classIcons} infoIcons={infoIcons}/>
        </header>
    );
}