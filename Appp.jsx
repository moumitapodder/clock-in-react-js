
import React, {useState} from 'react';


const Appp = () => {
    let newtime= new Date().toLocaleTimeString();//local machine time will get to show.

    const[ctime,setCtime] = useState(newtime);
    const UpdateTime = () => {
        let NewCtime= new Date().toLocaleTimeString();
        setCtime(NewCtime);
    };

    setInterval(UpdateTime,1000)
    return (
        <>
        <h1> {ctime}</h1>
        </>
    )
};
 export default Appp;