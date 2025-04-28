import style from './NavRight.module.css'

export function NavRight({socialIcons, classIcons, infoIcons}) {
    return (
        <>
            {
                socialIcons.map((icon, index) => {
                    return (
                    <a className={`${classIcons ? classIcons[index] : ''} ${style['headerPhone']}`} href="#" key={index}> 
                        <i className={`${icon} ${style['bi-telephone-fill', 'bi-person-circle']}`}></i>
                        {infoIcons[index]}
                    </a>
                    )
                })
            }
        </>
    )
}