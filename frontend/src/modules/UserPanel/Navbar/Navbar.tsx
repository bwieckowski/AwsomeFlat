import React from "react";
import * as P from './parts';
import userThumb from 'assets/user-circle.png';

const Navbar: React.FC = () => {

    const links = [
        {
            name: 'Wystaw Ofertę',
            path: '/userPanel/newOffer',
        },
        {
            name: 'Moje Oferty',
            path: '/myOfferts',
        },
        {
            name: 'Ustawienia',
            path: '/settings',
        },
        {
            name: 'Wyloguj',
            path: '/logout',
        },
    ]

    return<P.Wrapper>
        <P.Header>
            <P.Image src={userThumb} />
            <P.Name>Jan Kowalski</P.Name>
        </P.Header>
        <P.Menu>
            {
                links && links.map( (item, index) => (
                    <P.ItemMenu key={index}>
                        <P.StyledLink to={item.path}>{item.name}</P.StyledLink>
                    </P.ItemMenu>
                ))
            }
        </P.Menu>
    </P.Wrapper>
};

export default Navbar;