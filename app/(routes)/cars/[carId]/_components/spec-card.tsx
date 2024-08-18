import { FC } from 'react'
import { boolean } from 'yup';

interface SpecCardProps {
    label: string;
    value: string | number | boolean;
}

const SpecCard: FC<SpecCardProps> = ({ label, value }) => {
    let valueString;

    if (typeof value === "boolean") {
        if (value) valueString = "Yes";
        else valueString = "No";
    } else {
        valueString = value;
    }

    return (
        <div className='w-full flex flex-col p-6 bg-[#FAFAFA]'>
            <h1 className='text-base font-semibold'>{ label }</h1>
            <p>{ valueString }</p>
        </div>
    )
}

export default SpecCard