
import React, {useState} from 'react';


const Appp = () => {
    let newtime= new Date().toLocaleTimeString();//local machine time will get to show.

    const[ctime,setCtime] = useState(newtime);
    const UpdateTime = () => {
        let NewCtime= new Date().toLocaleTimeString();
        setCtime(NewCtime);
    }
    return (
        <>
        <h1> {ctime}</h1>
        <button onClick={UpdateTime}> get time

        </button>
        </>
    )
};
 export default Appp;