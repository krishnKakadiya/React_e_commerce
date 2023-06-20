import { useEffect,useState } from "react";

import { fetchDataFromApi } from "../Utils/api";

const useFetch = (endpoint)=>{
    console.log("endpoint========>",endpoint);
    const [data, setData] = useState();
    
    useEffect(()=> {
    makeApiCall();
    }, [endpoint])

    const makeApiCall=async() => {
        const res  = await fetchDataFromApi(endpoint);
        setData(res);
        console.log("makeApicallfunc-------->",res);
    }

    return { data };
}

export default useFetch;    