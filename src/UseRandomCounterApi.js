import { useState, useEffect } from "react";
import Service from "./Service";

const service = new Service();

function useRandomCounterApi(){
    const [num, setNum] = useState(null);

    useEffect(()=>{
        service.getRandomNum().then(it => {
            setNum(it);
        });
    },[])

    return num
}

export default useRandomCounterApi;