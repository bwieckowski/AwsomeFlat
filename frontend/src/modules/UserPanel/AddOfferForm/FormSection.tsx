import React from "react";
import * as P from './parts';

interface FormSectionProps {
    className?:string;
    label: string;
}

const FormSection: React.FC<FormSectionProps> = ({children, className, label}) => (
    <P.Container className={className}>
        <P.FormHeader>
            <P.FormTile>
                {label}
            </P.FormTile>
        </P.FormHeader>
        <P.FormBody>
            {children}
        </P.FormBody>
    </P.Container>
);

export default FormSection;