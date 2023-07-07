import {useNavigate} from 'react-router-dom';

import {List} from '../components/List';
import {Card} from '../components/Card';
import {Controls} from '../components/Controls';
import {useDispatch, useSelector} from "react-redux";
import {selectAllCountries, selectCountriesInfo} from "../store/countries/countries-selector";
import {useEffect} from "react";
import {loadCountries} from "../store/countries/countries-actions";

export const HomePage = () => {
    const navigate = useNavigate();
    const dispath = useDispatch();
    const countries = useSelector(selectAllCountries);
    const {status, error, quantity} = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!quantity) {
            dispath(loadCountries())
        }
    }, [quantity, dispath])

    return (
        <>
            <Controls/>

            {error && <h2>Can't fetch Data</h2>}
            {status === 'loading' && <h1>Loading ...</h1>}
            {status === 'received' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )
            }
        </>
    );
};
