import style from './Footer.module.css';
import { Foot } from '../Foot/Foot';
import paymentMethods from '../../assets/payment-methods-footer.svg';

export function Footer({ footerInfo, footerIcons, footerSpan, footerA }) {
    return (
        <footer className={[style.containerFluid, style.footer].join(' ')}>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.footerMenu}>
                        <ul>
                            {
                                footerInfo.map((foot, index) => {
                                    return (
                                        <Foot foot={foot} key={index}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {
                        footerIcons.map((icon, index) => {
                            return (
                                <div className={style.colLg3} key={index}>
                                    <div className={style.footerBenefits}>
                                        <i className={icon.title}></i>
                                        <span>{footerSpan[index]}</span>
                                        {
                                            (index === 1 || index === 3) ? (
                                                <a href="#">{footerA[index]}</a>
                                            ) : (
                                                footerA[index]
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className={style.colԼg12}>
                        <div className={style.copyright}>
                            <div className={style.paymentMethods}>
                                <img src={paymentMethods} alt="Payment Methods" />
                            </div>
                            © 2025 MobileCentre Art LLC.  All Rights Reserved. (AM)
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}