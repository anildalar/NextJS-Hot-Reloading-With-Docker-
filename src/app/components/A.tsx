//1. Import area
import React from 'react'
import B from './B';

type MyName = {
    myname: string;
};
type MySurname = {
    mysurname: string;
};

// Combine both types
type AProps = MyName & MySurname;

//2. Defination area
 function A({ myname,mysurname }: AProps) {
    //2.1 Hook Variable area

    //2.2 Function defination

    //2.3 Return statement
    return (
        <div>
            A {myname} {mysurname}
            <B  myname2={myname} mysurname2={{mysurname}} />
        </div>
    )
    }

//3. Export Area
export default A;
