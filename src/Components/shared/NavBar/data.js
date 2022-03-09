import {BsFillPhoneFill} from 'react-icons/bs';
import {FaHandshake} from 'react-icons/fa';
import {SiIcloud} from 'react-icons/si';
import joinIcon from '../../../assets/img/logo.svg';


export const NavBarData = [
    {
        link: 'Products',
        cls: 'products-link',
        to: '/',
        // megamenu: 
    },
    {
        link: 'Solutions',
        cls: 'solutions-link',
        to: '/',
        // megamenu: 
    },
    {
        link:'Resources',
        cls: 'resources-link',
        to: '/',
        // megamenu: 
    },
    {
        link:'Developers',
        cls: 'developers-link',
        to: '/',
        // megamenu: 
    },
    {
        link: 'Company',
        cls: 'company-link',
        to: '/',
        // megamenu: 
    },
    {
        link: 'Price  Planning',
        cls: 'price_planning-link',
        to: '/',
        // megamenu: 
    }
];

export const MediaData = [
    {
        icon: <BsFillPhoneFill/>,
        text: 'Download App'
    },
    {
        icon: <FaHandshake/>,
        text: 'Partners'
    },
    {
        icon: <SiIcloud />,
        text: 'Cloud Communications'
    }

];

export const JoinMenu = [
    {
        text: 'Meeting',
        icon: joinIcon,
        icon2: joinIcon,
        class: 'first_icon',
        class: 'second_icon'
    },
    {
        text: 'Training',
        icon: joinIcon,
        class: 'training'
    },
    {
        text: 'Webinar',
        icon: joinIcon,
        class: 'webinar'
    }
];