import { Country, useGetCountriesQuery } from "@/graphql/generated/schema";
import CountryCard from "./CountryCard";
import AddCountryForm from "./AddCountry";
import { useEffect, useState } from "react";

export const Countries = () => {
    const { loading, error, data } = useGetCountriesQuery();
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        if (data?.countries) {
            setCountries(data.countries);
        }
    }, [data]);

    const handleAddCountry = (newCountry: Country) => {
        setCountries([...countries, newCountry]);
    };
    console.log(data);
    return (
        <div className="container">
        <div className="row">
            <AddCountryForm onAddCountry={handleAddCountry}/>    
            {countries.map((country: Country) => (
                <div key={country.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <CountryCard country={country} />
                </div>
            ))}
            </div>
        </div>
    )
}