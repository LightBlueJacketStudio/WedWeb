import { useState } from 'react'

// constants
const MAX_NAME_LENGTH = 60
const MAX_SHORT_LENGTH = 100

// Wired to the  Google Form.
// Entry IDs were read from the form's public page metadata, matched to
// each question by title.
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfy27Vuyl6gEJM3kzdBLAhViXvCvu3_GKotgHByQWISlI2YVA/formResponse'

const GOOGLE_FORM_ENTRIES = {
  name: 'entry.2005620554', 
  attending: 'entry.285375194', 
  plusOne: 'entry.229129529', 
  kids: 'entry.582771566', 
  email: 'entry.1045781291', 
  phone: 'entry.1166974658', 
  dietary: 'entry.1739052576', 
  accommodationHelp: 'entry.839337160', 
  flyingIntoDAD: 'entry.1378856052', 
}

const ATTENDING_OPTIONS = ['Yes, count me in!', "No :(", 'Not sure yet']
const KID_OPTIONS = ['0', '1', '2', '3?!!! in this economy?']
const ACCOMMODATION_OPTIONS = [
  'Yes, please send recs',
  "No, I've got it sorted",
  'Not sure yet',
]
const FLYING_OPTIONS = ['Yes', 'No', 'Not sure']

function Rsvp() {
  const [formData, setFormData] = useState({
    name: '',
    attending: '',
    plusOne: '',
    kids: '',
    email: '',
    phone: '',
    dietary: '',
    accommodationHelp: '',
    flyingIntoDAD: '',
  })

  const [status, setStatus] = useState('idle') // idle | submitting | submitted | error

  const isNotAttending = formData.attending === 'No :('

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    // sanitize: skip the "if you're coming" questions when declining
    const submissionData = {
      ...formData,
      plusOne: isNotAttending ? '' : formData.plusOne,
      kids: isNotAttending ? '' : formData.kids,
      dietary: isNotAttending ? '' : formData.dietary,
      accommodationHelp: isNotAttending ? '' : formData.accommodationHelp,
      flyingIntoDAD: isNotAttending ? '' : formData.flyingIntoDAD,
    }

    const body = new URLSearchParams()
    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([field, entryId]) => {
      body.append(entryId, submissionData[field])
    })

    setStatus('submitting')

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
      setStatus('submitted')
    } catch (err) {
      console.error('RSVP submission failed', err)
      setStatus('error')
    }
  }

  return (
    <section id="rsvp" className="rsvp-page">
      <div className="rsvp-card">
        <h1>RSVP</h1>

        {status === 'submitted' ? (
          <p>
            Thank you, {formData.name}! We've received your RSVP and can't wait to
            celebrate with you.
          </p>
        ) : (
          <>
            <p>Come celebrate with us!</p>

            <form className="rsvp-form" onSubmit={handleSubmit}>
              <label>
                Your Name (First Last)
                <input
                  required
                  maxLength={MAX_NAME_LENGTH}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>

              <label>
                Will you be able to attend?
                <select
                  required
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {ATTENDING_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              {!isNotAttending && (
                <>
                  <label>
                    Your Spouse, Partner, +1 :)
                    <input
                      maxLength={MAX_NAME_LENGTH}
                      name="plusOne"
                      value={formData.plusOne}
                      onChange={handleChange}
                    />
                  </label>

                  <label>
                    Kids?!
                    <select name="kids" value={formData.kids} onChange={handleChange}>
                      <option value="" disabled>
                        Select an option
                      </option>
                      {KID_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </>
              )}

              <label>
                Email
                <input
                  required
                  type="email"
                  maxLength={MAX_SHORT_LENGTH}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label>
                Phone number
                <input
                  required
                  type="tel"
                  maxLength={MAX_SHORT_LENGTH}
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>

              {!isNotAttending && (
                <>
                  <label>
                    Dietary Restrictions?
                    <input
                      required
                      maxLength={MAX_SHORT_LENGTH}
                      name="dietary"
                      placeholder="None, or let us know!"
                      value={formData.dietary}
                      onChange={handleChange}
                    />
                  </label>

                  <label>
                    Will you need help booking accommodation?
                    <select
                      required
                      name="accommodationHelp"
                      value={formData.accommodationHelp}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {ACCOMMODATION_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Do you plan to fly into Da Nang International Airport (DAD)?
                    <select
                      name="flyingIntoDAD"
                      value={formData.flyingIntoDAD}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      {FLYING_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                </>
              )}

              {status === 'error' && (
                <p className="rsvp-error">
                  Something went wrong sending your RSVP. Please try again in a moment.
                </p>
              )}

              <button type="submit" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}

export default Rsvp
