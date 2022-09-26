import { AiOutlineHeart, AiOutlineProfile } from 'react-icons/ai';
import { TbMap2 } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
export const sideBarData = [
    {
        name: 'Home',
        to: '/',
        icon: <TbMap2 />
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