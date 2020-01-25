import React from "react";
import * as P from './parts';
import {Route} from "react-router";
import AddOfferForm from "modules/UserPanel/AddOfferForm/AddOfferForm";
import MyOffers from "../../modules/UserPanel/MyOffers/MyOffers";

const UserPanel: React.FC = () => {

    const UserPanelRoutes = [
        {
            path: '/userPanel/newOffer',
            component: AddOfferForm,
        },
        {
            path: '/userPanel/myOffers',
            component: MyOffers,
        },
    ];

    return (
        <P.StyledUserPanelControl>
            <P.StyledNavbar />
            <P.Wrapper>
                {
                    UserPanelRoutes.map((route, index) => (<Route
                            key={index}
                            path={route.path}
                            component={route.component}
                            exact={true}
                        />
                    ))
                }
            </P.Wrapper>
        </P.StyledUserPanelControl>);

 };

 export default UserPanel;