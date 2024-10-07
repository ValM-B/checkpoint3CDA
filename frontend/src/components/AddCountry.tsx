import { useState } from "react";
import { Country, useAddCountryMutation } from "@/graphql/generated/schema";

interface AddCountryFormProps {
    onAddCountry: (newCountry: Country) => void;
}

const AddCountryForm: React.FC<AddCountryFormProps> = ({ onAddCountry }) => {
    const [newCountry, setNewCountry] = useState({ name: '', code: '', emoji: '' });
    const [addCountry] = useAddCountryMutation();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewCountry({ ...newCountry, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const {data} = await addCountry({
                variables: {
                    data: {
                        name: newCountry.name,
                        code: newCountry.code,
                        emoji: newCountry.emoji,
                    }
                },
            });
            if (data) {
                onAddCountry(data.addCountry);
            }
            setNewCountry({ name: '', code: '', emoji: '' });
        } catch (error) {
            console.error("Erreur lors de l'ajout du pays:", error);
        }
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">Ajouter un pays</h5>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Nom du pays"
                                value={newCountry.name}
                                onChange={handleInputChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <input
                                type="text"
                                name="code"
                                placeholder="Code du pays"
                                value={newCountry.code}
                                onChange={handleInputChange}
                                required
                                className="form-control"
                            />
                        </div>
                        <div className="col-12 col-md-4 mb-3">
                            <input
                                type="text"
                                name="emoji"
                                placeholder="Emoji"
                                value={newCountry.emoji}
                                onChange={handleInputChange}
                                required
                                className="form-control"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Ajouter</button>
                </form>
            </div>
        </div>
    );
};

export default AddCountryForm;