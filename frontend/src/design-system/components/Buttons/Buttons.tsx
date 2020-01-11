import React from "react";
import * as P from './parts';
import {colors} from "../../colors";

export const ApartmentButton: React.FC = () =>(
    <P.Button color={colors.apartment}>
        <P.StyledApartment/>
        Apartament
    </P.Button>
);


export const FlatButton: React.FC = () =>(
    <P.Button color={colors.flat}>
        <P.StyledFlat/>
        Mieszkanie
    </P.Button>
);


export const RoomButton: React.FC = () =>(
    <P.Button color={colors.room}>
        <P.StyledRoom/>
        Pokoj
    </P.Button>
);

export const GarageButton: React.FC = () =>(
    <P.Button color={colors.garage}>
        <P.StyledGarage/>
        Garaż
    </P.Button>
);

