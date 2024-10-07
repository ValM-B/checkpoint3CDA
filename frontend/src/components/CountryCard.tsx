import React from 'react';
import { Country } from "@/graphql/generated/schema";
import Link from 'next/link';

interface CountryCardProps {
    country: Country;
}


const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link href={`/countries/${country.code}`} className='link'>
        <div className="country-card card text-center mb-4">
            <div className="w-100 card-body">
                <h5 className="card-title">{country.name}</h5>
                <p className='country-card-emoji'>{country.emoji}</p>
            </div>
        </div>
    </Link>
  );
};

export default CountryCard;