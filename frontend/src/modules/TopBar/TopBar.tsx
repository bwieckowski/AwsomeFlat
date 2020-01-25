import React from 'react';
import * as P from './parts';
import {ReactComponent as Logo }  from 'assets/Logo.svg';
import {ReactComponent as Hamburger }  from 'assets/hamburger.svg';
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {StoreState} from "../../store/constants";

interface TopBarProps {
jwt?: string;
}

const TopBar: React.FC<TopBarProps> = ({
jwt,
}) =>{


    const links = jwt ?
    [
        {
            title: 'Panel Użytkownika',
            href: '/userPanel/newOffer'
        },
        {
            title: 'Wystaw Ofertę',
            href: '/userPanel/newOffer'
        },
        {
            title: 'Wyloguj',
            href: '/logout'
        }
    ] : [
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
            <P.InnerWrapper>
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
            </P.InnerWrapper>
        </P.Wrapper>
    );
};

const mapStateToProps = (state: StoreState) =>({
    jwt: state.userInfo && state.userInfo.jwt,
});

export default connect(mapStateToProps)(TopBar);
