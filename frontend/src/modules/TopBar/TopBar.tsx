import React from 'react';
import * as P from './parts';
import {ReactComponent as Logo }  from 'assets/Logo.svg';
import {ReactComponent as Hamburger }  from 'assets/hamburger.svg';
import {Link, useHistory} from "react-router-dom";

const TopBar = () =>{
    const history = useHistory();

    let jwt = localStorage.getItem("token");
    const links = jwt ?
    [
        {
            title: 'Panel Użytkownika',
            href: '/userPanel'
        },
        {
            title: 'Wystaw Ofertę',
            href: '/userPanel/newOffer'
        },
        {
            title: 'Wyloguj',
            href: '/logout'
        }
    ] :

    [
        {
            title: 'Wystaw Ofertę',
            href: '/login'
        },

        {
            title: 'Załóż konto',
            href: '/register'
        },
        {
            title: 'Zaloguj',
            href: '/login'
        }
    ];

    return (
        <P.Wrapper>
            <P.LogoWrapper>
                <Link to={'/'}><Logo/></Link>
            </P.LogoWrapper>
            <P.LinksWrapper>
                {
                    links.map((item, key) => (
                        <P.LinkItem key={key}>
                            <P.StyledLink to={item.href}>{item.title}</P.StyledLink>
                        </P.LinkItem>
                    ))
                }
            </P.LinksWrapper>
            <P.HamburgerWrapper>
                <Hamburger/>
            </P.HamburgerWrapper>
        </P.Wrapper>
    );
};

export default TopBar;
