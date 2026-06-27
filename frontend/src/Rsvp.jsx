import { useState } from "react";

//constants
const MIN_GUEST = 1;
const MAX_GUEST = 10;
const MAX_NAME_LENGTH = 20;

function Rsvp (){ 
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName:'',
            attending: 'yes', 
            guest: 1,
            meal: '', //meal preference
            otherMeal:'',
            message: '',
        }
    );

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(
            {...formData,
            [name]: value,    
        })
    }

    function handleSubmit (event){
        event.preventDefault();
        //sanitize
        const submissionData = {
            ...formData,
            otherMeal: formData.meal === "other" ? formData.otherMeal : '',
        }

        setFormData(submissionData);
        console.log("RSVP Submitted", submissionData);
        alert("RSVP submitted");
    }

    return(
        <span>
            <h1>RSVP</h1>
            <p>Come celebrate with us!</p>

            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        required
                        maxLength={MAX_NAME_LENGTH}
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Last Name
                    <input
                        required
                        maxLength={MAX_NAME_LENGTH}
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Are you attending?
                    <select
                        required
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                    >
                        <option value="Yes">Yes, I will attend.</option>
                        <option value="No">No, I can't attend.</option>
                    </select>
                </label>
                
                <label>
                    Total Guest Count
                    <input 
                        required
                        type="number"
                        onChange={handleChange}
                        name="guest"
                        min={MIN_GUEST}
                        max={MAX_GUEST}
                        value={formData.guest} />
                </label>

                <label>
                    Diet Preference
                    <select
                        required
                        name="meal"
                        value={formData.meal}
                        onChange={handleChange}
                    >
                        <option value="normal">No Special Preference</option>
                        <option value="vegan">Vegan</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="other">Other</option>
                    </select>
                    
                    {/* conditionally renders the input field for other meal*/}
                    {formData.meal === "other" && (
                        <label>
                        Please Specify
                            <input // pops out when user select other
                                name="otherMeal"
                                value={formData.otherMeal}
                                onChange={handleChange}/>
                        </label>
                    )}
                </label>
                

                <button type="submit">Submit</button>
                
            </form>
        </span>
    );
}

export default Rsvp