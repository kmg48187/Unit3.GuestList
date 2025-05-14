import { useEffect, useState } from "react";

const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2502-FTB-ET-WEB-PT/guests";

export default function useQuery(resource) {
    const [ data, setData ] = useState();

    const[loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const query = async () => {
            setLoading(true);
            setError(null);

            try{
                const response = await fetch(API + resource)
                if(!response.ok) throw Error("Sorry, something went wrong :(");
                const result = await response.json()
                setData(result.data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false);
            }

        }
        query();
    }, [resource]);

    return{data, loading, error};
}