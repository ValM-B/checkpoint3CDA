import { useGetCountryQuery } from "@/graphql/generated/schema";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const CountryDetails = () => {
    const router = useRouter();
    const { code } = router.query;

const { data, loading, error } = useGetCountryQuery({
    variables: {
        code: code as string,
    },
});

const country = data?.country;

return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="text-center">
            <h1 className="w-80 m-0">{country?.emoji}</h1>
            <h2 className="mt-2">{country?.name} ({country?.code})</h2>
            {country?.continent?.name && (
                <p className="mt-2">Continent : {country.continent.name}</p>
            )}
        </div>
    </div>
);
};

export default CountryDetails;
