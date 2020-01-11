import React from 'react';
import * as P from './parts';
import {ReactComponent as Logo }  from 'assets/Logo.svg';
import {ReactComponent as Hamburger }  from 'assets/hamburger.svg';
import {Link} from "react-router-dom";

const TopBar = () =>{

    const links = [

        {
            title: 'Wystaw Ofertę',
            href: '/'
        },
        {
            title: 'Załóż konto',
            href: '/'
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
