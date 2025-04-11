//1. Import area
import React from 'react'
import C from './C';

type MyName2 = {
    myname2: string;
};
type MySurname2 = {
    mysurname2: string;
};

// Combine both types
type BProps = MyName2 & MySurname2;

//2. Defination area
 function B({ myname2,mysurname2 }: BProps) {
    //2.1 Hook Variable area

    //2.2 Function defination

    //2.3 Return statement
    return (
        <div>B
                
            <C />
        </div>
    )
    }

//3. Export Area
export default B;
