import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import supabase from "../config/supabaseClient.jsx";

export default function PrzedstawiatorCeny() {
    const [fetchError, setFetchError] = useState(null);
    const [nails, setNails] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

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

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <>
            <div
                className="price_list"
                style={{maxWidth: 1200}}
            >
                {fetchError && <p>{fetchError}</p>}
                {nails && (
                    <div
                        className="nails"
                    >
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            label="Wybierz opcję"
                            displayEmpty
                            variant='standard'
                            sx={{color: 'white', fontSize: '1.1rem'}}
                            disableUnderline='true'
                        >
                            <MenuItem
                                value=""
                                disabled
                            >
                                Proszę wybrać usługę
                            </MenuItem>
                            {nails
                                .map((nail, index) => (
                                <MenuItem
                                    key={index}
                                    value={nail.Title}
                                    sx={{fontSize: '1.15rem'}}>
                                    {nail.Title}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                )}
                {selectedOption && (
                    <div
                        className="selected_option_box"
                    >
                        <h3>{selectedOption}</h3>
                        <p>{nails
                            .find((nail) => nail
                                .Title === selectedOption)
                            .Description}
                        </p>
                        <p>Cena: {nails
                            .find((nail) => nail
                                .Title === selectedOption)
                            .Price} zł
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}