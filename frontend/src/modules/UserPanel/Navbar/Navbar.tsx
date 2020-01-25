import React from "react";
import * as P from './parts';
import userThumb from 'assets/user-circle.png';
import {connect} from "react-redux";
import {StoreState} from "store/constants";
import {getFirstName} from "./helper";

interface NavbarProps {
    className?: string;
    firstName?: string;
}

const Navbar: React.FC<NavbarProps> = ({className, firstName}) => {

    const links = [
        {
            name: 'Moje Oferty',
            path: '/userPanel/myOffers',
        },
        {
            name: 'Wystaw Ofertę',
            path: '/userPanel/newOffer',
        },
        {
            name: 'Ustawienia',
            path: '/userPanel/settings',
        },
        {
            name: 'Wyloguj',
            path: '/logout',
        },
    ];

    return (<P.Wrapper className={className}>
        <P.Header>
            <P.Image src={userThumb} />
            <P.Name>{firstName}</P.Name>
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
    </P.Wrapper>);
};

const mapStateToProps = (state: StoreState): NavbarProps => ({
    firstName: getFirstName(state),
});

export default connect(mapStateToProps)(Navbar);