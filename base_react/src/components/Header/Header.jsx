import classnames from 'classnames'
import styles from './styles.module.css'

import cart from '../../cart.png'

export const Header = () => {
    return <header className={classnames(styles.header)}>
        <a href="#" className={classnames(styles.main_link)}>Магазин</a>
        <a href="#"><img src={cart} alt="cart" className={classnames(styles.cart)}/></a>
    </header>;
}