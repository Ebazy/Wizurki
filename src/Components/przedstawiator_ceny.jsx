import {useEffect, useState} from "react";
import supabase from "../config/supabaseClient.jsx";



export default function PrzedstawiatorCeny (){

    const [fetchError, setFetchError] = useState(null);
    const [nails, setNails] = useState(null);


useEffect(() => {
    const fetchNails = async () => {
        const { data, error } = await supabase
            .from('Service Price')
            .select('*');

        if (error) {
            setFetchError('Nie pobrano danych paznockiowych :(');
            setNails(null);
            console.log(error);
        } else {
            setNails(data);
            setFetchError(null);
        }
    };

    fetchNails().catch((error) => {
        setFetchError('Wystąpił błąd podczas pobierania danych paznockiowych :(');
        setNails(null);
        console.log(error);
    });
}, []);

return (
    <>
        <div className="ye">
            {fetchError && <p>{fetchError}</p>}
            {nails && (
                <div className="nails">
                    {nails.map((nail, index) => (
                        <p key={index}>{nail.Title}</p>
                    ))}
                </div>
            )}
        </div>
    </>
);
}
