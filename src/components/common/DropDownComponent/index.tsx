import React, { SetStateAction } from 'react'
import { ArrowIcon, DropDown, DropDownConainer } from './styled';

interface DropDownProps {
    data: Object[];
    placeholder: string,
    setSelected: React.Dispatch<SetStateAction<string>>
}

const arrowIcon = require("../../../../assets/icons/arrow-down.png");

const DropDownComponent = ({data, placeholder, setSelected}: DropDownProps) => {
    
    const checkedData = data?.length <= 0 ? [{value: 'Sem registros no momento!', disabled: true }] : data;
    
    return (
        <DropDownConainer>
            <DropDown
                setSelected={setSelected}
                data={checkedData}
                placeholder={placeholder}
                save="value"
                search={false}
                arrowicon={<ArrowIcon source={arrowIcon} />}
            />
        </DropDownConainer>
    )
}

export default DropDownComponent;