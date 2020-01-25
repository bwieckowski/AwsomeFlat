import React, {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {StoreState} from "store/constants";
import axios from "axios";
import {Wrapper} from "../AddOfferForm/parts";
import * as P from './parts';
import {FlatBasic} from "api/apiModels";
import {url} from "api/config";
import {createGetUserFlatsSuccess} from "store/UserPanel/actions";
import FlatItem from "./ListItem/ListItem";


interface MyOfferProps {
    userFlats?: Array<FlatBasic>;
    jwt?: string;
}

const MyOffers: React.FC<MyOfferProps> = ({
  userFlats,
  jwt,
}) => {

    const dispatch = useDispatch();

    const getUserFlats = () => {
        const params = new URLSearchParams();
        jwt && params.set('jwt', jwt);
        axios.post<Array<FlatBasic>>(`http://${url}/userAdvertisements`,params).then((resp) => {
            console.log(resp.data);
            dispatch(createGetUserFlatsSuccess(resp.data));
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(() =>{
        getUserFlats();
    },[jwt]);


    const onDelete = (id: number ) => {
        if(window.confirm("czy na pewno chcesz usunąć wybraną ofertę ?")){
            axios.delete(`http://${url}/userAdvertisements`, {
                data: JSON.stringify({
                    jwt,
                    id,
                })
            }).then((response)=>{
                getUserFlats();
                    console.log(response);
            });
        }
    };


    return (
        <Wrapper>
            <P.List>
                {
                    userFlats ? userFlats.length > 0 ? userFlats.map(({title,id},index)=>(
                        <FlatItem
                            id={id}
                            key={index}
                            lp={index+1}
                            onDelete={onDelete}
                            title={title} />
                    )) : <>Użytkownik nie ma jeszcze żadnych ofert</> : <>Użytkownik nie ma jeszcze żadnych ofert</>
                }
            </P.List>
        </Wrapper>
    )
};

const mapStateToProps = ( state: StoreState ): MyOfferProps => ({
    userFlats: state.userPanel && state.userPanel.userFlats,
    jwt: state.userInfo && state.userInfo.jwt,
});

export default connect(mapStateToProps)(MyOffers);