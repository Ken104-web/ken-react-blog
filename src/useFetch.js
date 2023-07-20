 import { useState, useEffect } from "react";  


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const  [isLoading, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{
        setTimeout(() => {
         fetch(url)
             .then(resp => {
                 if(!resp.ok) {
                     throw Error('could not fetch data for that resource');
                 }
                 return resp.json()
             })
             .then(data =>{
                 setData(data)
                 setIsPending(false);
                 setError(null);
             }) 
             .catch (err => {
                 setIsPending(false);
                 setError(err.message);
             }) 
         }, 1000);   
     }, [url]);
     return { data, isLoading, error }
}
export default useFetch;