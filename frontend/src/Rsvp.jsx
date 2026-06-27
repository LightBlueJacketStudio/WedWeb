import { useState } from "react";

//constants
const MIN_GUEST = 1;
const MAX_GUEST = 10;
const MAX_NAME_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 500;

function Rsvp (){ 
    const [formData, setFormData] = useState(
        {
            firstName: '',
            lastName:'',
            isAttending: true, 
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
            [name]: (name === "isAttending") ? value === "true": value,
            //convert string boolean to boolean    
        })
    }

    function handleSubmit (event){
        event.preventDefault();
        //sanitize
        const submissionData = {
            ...formData,
            guest: formData.isAttending ? formData.guest : 0,
            meal: formData.isAttending ? formData.meal : "NA",
            otherMeal: formData.isAttending && formData.meal === "other" ? formData.otherMeal : '',
        }

        setFormData(submissionData);
        console.log("RSVP Submitted", submissionData);
        alert("RSVP submitted");
    }

    return(
        <section className="rsvp-card">
            <h1>RSVP</h1>
            <p>Come celebrate with us!</p>

            <form className="rsvp-form" onSubmit={handleSubmit}>
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
                        name="isAttending"
                        value={formData.isAttending}
                        onChange={handleChange}
                    >
                        <option value="true">Yes, I will attend.</option>
                        <option value="false">No, I can't attend.</option>
                    </select>
                </label>
                
                <label>
                    Total Guest Count
                    {formData.isAttending ?
                    <input 
                        required
                        type="number"
                        onChange={handleChange}
                        name="guest"
                        min={MIN_GUEST}
                        max={MAX_GUEST}
                        value={formData.guest} />
                    :
                    <input
                        disabled
                        value="Not Attending" />                    
                    }

                </label>

                <label>
                    Diet Preference
                    { (formData.isAttending) ?
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
                    :
                    <input
                        disabled
                        value="Not Attending" />                    
                    }
                </label>    
                {/* conditionally renders the input field for other meal*/}
                {(formData.meal === "other" && formData.isAttending) && (
                    <label>
                        Please Specify
                        <input // pops out when user select other
                            name="otherMeal"
                            value={formData.otherMeal}
                            onChange={handleChange}/>
                    </label>
                )}
                
                <label>
                    Leave a Message For us !!
                    <textarea // pops out when user select other
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength={MAX_MESSAGE_LENGTH}
                        placeholder="Congrats :)"
                    />
                </label>

                <button type="submit">Submit</button>
                
            </form>
        </section>
    );
}

export default Rsvp