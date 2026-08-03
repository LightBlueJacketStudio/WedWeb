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
  address: 'entry.1190885811',
  phone: 'entry.1166974658',
  howYouKnow: 'entry.1410722321',
  dietary: 'entry.1739052576',
  accommodationHelp: 'entry.839337160',
  flyingIntoDAD: 'entry.1378856052',
}

// Google Forms sends this fixed string for the option, plus a second
// field for the typed-in text, when a "Other" choice is answered.
const OTHER_OPTION_VALUE = '__other_option__'
const FLYING_OTHER_ENTRY = 'entry.1378856052.other_option_response'

const ATTENDING_OPTIONS = ['Yes, count me in!', "No :(", 'Not sure yet']
const KID_OPTIONS = ['0', '1', '2', '3?!!! in this economy?', 'more than 4??']
const HOW_YOU_KNOW_OPTIONS = [
  'Friend/Family of My',
  'Friend/Family of Bao',
  'Both',
]
const ACCOMMODATION_OPTIONS = [
  'Yes, please send recs',
  "No, I've got it sorted",
  'Not sure yet',
]
const FLYING_OPTIONS = ['Yes', 'No', 'Not sure', 'Other']

function Rsvp() {
  const [formData, setFormData] = useState({
    attending: '',
    name: '',
    plusOne: '',
    kids: '',
    email: '',
    address: '',
    phone: '',
    howYouKnow: '',
    dietary: '',
    accommodationHelp: '',
    flyingIntoDAD: '',
    flyingIntoDADOther: '',
  })

  const [status, setStatus] = useState('idle') // idle | submitting | submitted | error

  const isNotAttending = formData.attending === 'No :('
  const isNotSure = formData.attending === 'Not sure yet'
  const showFullDetails = formData.attending === 'Yes, count me in!'

  function handleChange(event) {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()

    // sanitize: skip questions the guest was never shown.
    // "No" skips everything but name; "Not sure yet" skips everything but
    // email/address. Several of these are required questions on the Google
    // Form itself, so they still need a value or Google silently rejects
    // the whole response (the no-cors POST below can't surface that failure).
    const submissionData = {
      ...formData,
      plusOne: showFullDetails ? formData.plusOne : '',
      kids: showFullDetails ? formData.kids : '',
      // Google's Email question enforces email-format validation, so a plain
      // 'N/A' would make it silently reject the whole "No" response.
      email: isNotAttending ? 'no-reply@na.example.com' : formData.email,
      address: isNotAttending ? 'N/A' : formData.address,
      phone: showFullDetails ? formData.phone : 'N/A',
      dietary: showFullDetails ? formData.dietary : 'N/A',
      accommodationHelp: showFullDetails
        ? formData.accommodationHelp
        : "No, I've got it sorted",
      flyingIntoDAD: showFullDetails ? formData.flyingIntoDAD : '',
      flyingIntoDADOther: showFullDetails ? formData.flyingIntoDADOther : '',
    }

    const body = new URLSearchParams()
    Object.entries(GOOGLE_FORM_ENTRIES).forEach(([field, entryId]) => {
      if (field === 'flyingIntoDAD' && submissionData.flyingIntoDAD === 'Other') {
        body.append(entryId, OTHER_OPTION_VALUE)
        body.append(FLYING_OTHER_ENTRY, submissionData.flyingIntoDADOther)
      } else {
        body.append(entryId, submissionData[field])
      }
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
            {isNotAttending
              ? `We're so sorry you can't make it, ${formData.name}. But if you change your mind, feel free to resubmit the form by December 31st, 2026!`
              : isNotSure
              ? `Thank, ${formData.name}! No worries if you're unsure but please let us know by December 1st so we can finalize our headcount.`
              : `Thank you, ${formData.name}! We've received your RSVP and can't wait to celebrate with you.`}
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

              <label>
                How do you know the couple?
                <select
                  required
                  name="howYouKnow"
                  value={formData.howYouKnow}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {HOW_YOU_KNOW_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              {!isNotAttending && (
                <>
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
                    Address (for physical invitation tbd)
                    <input
                      required
                      maxLength={MAX_SHORT_LENGTH}
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </label>
                </>
              )}

              {showFullDetails && (
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

                  {formData.flyingIntoDAD === 'Other' && (
                    <label>
                      Please specify
                      <input
                        maxLength={MAX_SHORT_LENGTH}
                        name="flyingIntoDADOther"
                        value={formData.flyingIntoDADOther}
                        onChange={handleChange}
                      />
                    </label>
                  )}
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
