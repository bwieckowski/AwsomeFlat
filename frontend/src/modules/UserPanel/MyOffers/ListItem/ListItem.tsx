import React from 'react';
import * as P from './parts';

interface ListItemProps {
    title: string;
    lp: number;
    id: number;
    onDelete: (id: number) => void;
}

const ListItem: React.FC<ListItemProps> = ({
    title,
    lp,
    id,
    onDelete,
}) =>(
    <P.Wrapper>
        <P.Title>{lp}. {title}</P.Title>
        <P.Button onClick={()=>{onDelete(id);}}>Usuń</P.Button>
    </P.Wrapper>
);

export default ListItem