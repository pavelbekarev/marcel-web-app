import '../styles/Header.scss';
import AvatarIcon from './AvatarIcon';
import FollowPlus from '../components/FollowPlus';


const Header = () => {
    return (
        <div className="header__wrapper">
            <div className="header__content">
                <div className='header__content-item'>
                    <h2 className='header__title'>marcel</h2>
                    <div className="item__wrapper">
                        <div className="avatar__info">
                            <AvatarIcon />
                            <span className="avatar__name">Steve Johnson</span>
                        </div>
                    </div>
                </div>
                <div className='header__content-item'>
                    <a href='' className="follow__button">
                        <FollowPlus />
                        <span className='follow__text'>Follow</span>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Header;