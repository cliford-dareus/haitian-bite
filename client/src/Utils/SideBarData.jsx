import { AiOutlineHome, AiOutlineHeart, AiOutlineProfile } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
export const sideBarData = [
    {
        name: 'Home',
        to: '/',
        icon: <AiOutlineHome />
    },
    {
        name: 'Favorite',
        to: '/favorite',
        icon: <AiOutlineHeart />
    },
    {
        name: 'Locations',
        to: '/location',
        icon: <AiOutlineProfile />
    },
    {
        name: 'Profile',
        to: '/profile',
        icon: <GoLocation />
    },
];