// Attach Survey Schmemas to Window
window.surveyschema = [
    {
        "title": "About Me",
        "questions": [
            {
                "number": 1,
                "question": "What is your date of birth?",
                "options": [],
                "multiselect": false,
                "answer": true,
                "validation": {
                    "type": "Datetime",
                    "unit": "",
                    "regex": "AAAAL15cZHsyfShbLi8tXSlcZHsyfVwxXGR7NH0kLw=="
                }
            },
            {
                "number": 2,
                "question": "What is your sex?",
                "options": [
                    "Male",
                    "Female",
                    "Other",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "What is your racial background?",
                "options": [
                    "American Indian or Alaskan Native (a person having origins in any of the original peoples of North or South America (including Central America), and who maintains tribal affiliation or community attachment)",
                    "Asian (a person having origins in any of the original peoples of the Far East, Southest Asia, or the Indian subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine islands, Thailand, or Vietnam)",
                    "Black or African American (a person having origins in any of the black racial groups of Africa)",
                    "Native Hawaiian or Other Pacific Islander (a person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands)",
                    "White (a person having origins in any of the original peoples of Europe, the Middle East, or North Africa)",
                    "Other",
                    "Unsure",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "Are you of Hispanic, Latino, or Spanish origin or ancestry?",
                "options": [
                    "No",
                    "Yes - Mexican, Mexican American, or Chicano",
                    "Yes - Puerto Rican",
                    "Yes - Cuban",
                    "Yes - Other or Mixed Hispanic, Latino, or Spanish origin",
                    "Unsure",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "What is the highest degree or level of school you have completed?",
                "options": [
                    "8th grade or less",
                    "Some high school, but did not graduate",
                    "High school graduate or GED",
                    "Some college or 2-year degree",
                    "4-year college graduate",
                    "More than 4-year college degree",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "Last year, what was your total household income from all sources, before taxes?",
                "options": [
                    "Less than $10,000 (USD)",
                    "$10,000 - $49,999",
                    "$50,000 - $99,999",
                    "$100,000 - $149,999",
                    "$150,000 - $199,999",
                    "$200,000 - $249,999",
                    "$250,000 and above",
                    "Unknown",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "Additional Information About Me",
        "questions": [
            {
                "number": 1,
                "question": "How tall are you?",
                "options": [],
                "multiselect": false,
                "answer": true,
                "validation": {
                    "type": "Height",
                    "unit": "in",
                    "regex": "WzItN10nKDFbMDFdfFxkKSgnJ3wiKQ=="
                }
            },
            {
                "number": 2,
                "question": "How much do you weigh?",
                "options": [],
                "multiselect": false,
                "answer": true,
                "validation": {
                    "type": "Weight",
                    "unit": "lbs",
                    "regex": "KFs0LTldXGR8WzEtM11cZFxkKVxz"
                }
            },
            {
                "number": 3,
                "question": "What is your current marital status?",
                "options": [
                    "Now married",
                    "Unmarried, but living with a partner",
                    "Widowed",
                    "Divorced",
                    "Separated",
                    "Never married",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "What best describes your current main daily activities?",
                "options": [
                    "Working full time (day shifts)",
                    "Working full time (rotating or night shifts)",
                    "Working part time (day shifts)",
                    "Working part time (rotating or night shifts)",
                    "Unemployed, laid off, or looking for work",
                    "In school (full- or part-time student)",
                    "Stay-at-home parent or keeping household",
                    "Retired",
                    "Disabled",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "How hard is it for you (and your family) to pay for basics like food, rent or mortgage, heating, etc.?",
                "options": [
                    "Very hard",
                    "Hard",
                    "Somewhat hard",
                    "Not very hard",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "About My Family",
        "questions": [
            {
                "number": 1,
                "question": "In what country were you born?",
                "options": [
                    "U.S.A",
                    "Canada",
                    "Mexico",
                    "China",
                    "India",
                    "Philippines",
                    "Other",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "What language do you mainly speak at home?",
                "options": [
                    "English",
                    "Spanish",
                    "Chinese",
                    "Other",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "How many people, other than you, live in your household most of the time?",
                "options": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "How many persons less than 18 years of age usually live in your home?",
                "options": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "Have any of your immediate biological family members been diagnosed with sleep apnea?",
                "options": [
                    "Mother",
                    "Father",
                    "Brother",
                    "Sister",
                    "Son",
                    "Daughter",
                    "None",
                    "Prefer not to answer"
                ],
                "multiselect": true,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Health Conditions",
        "questions": [
            {
                "number": 1,
                "question": "Has a doctor or health care professional ever told you that you have allergies?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "Has a doctor or health care professional ever told you that you have asthma?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "Has a doctor or health care professional ever told you that you have attention deficit disorder (ADD)?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "Has a doctor or health care professional ever told you that you have attention deficit hyperactivity disorder (ADHD)?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "Has a doctor or health care professional ever told you that you have cancer?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "Has a doctor or health care professional ever told you that you have chronic obstructive lung disease (COPD or emphysema)?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "Has a doctor or health care professional ever told you that you have depression?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "Has a doctor or health care professional ever told you that you have diabetes?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "Has a doctor or health care professional ever told you that you have epilepsy or a seizure disorder?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "Has a doctor or health care professional ever told you that you have high blood pressure?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 11,
                "question": "Has a doctor or health care professional ever told you that you have heart disease?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 12,
                "question": "Has a doctor or health care professional ever told you that you have insomnia?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 13,
                "question": "Has a doctor or health care professional ever told you that you have narcolepsy?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 14,
                "question": "Has a doctor or health care professional ever told you that you have pulmonary fibrosis?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 15,
                "question": "Has a doctor or health care professional ever told you that you have restless leg syndrome?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 16,
                "question": "Have you been diagnosed with other significant health conditions?",
                "options": [
                    "Yes",
                    "No",
                    "Don't know",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Sleep Pattern",
        "questions": [
            {
                "number": 1,
                "question": "How many hours of sleep do you usually get per night on weekdays or workdays?",
                "options": [
                    "0-4 hours",
                    "5-6 hours",
                    "7 hours",
                    "8 hours",
                    "9 hours",
                    "10 or more hours",
                    "Unsure",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "How many hours of sleep do you usually get per night on weekends or days off?",
                "options": [
                    "0-4 hours",
                    "5-6 hours",
                    "7 hours",
                    "8 hours",
                    "9 hours",
                    "10 or more hours",
                    "Unsure",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "Considering your own \"feeling best rhythm\", at what time would you get up if you were entirely free to plan your day?",
                "options": [
                    "5:00 - 6:30 am",
                    "6:30 - 7:45 am",
                    "7:45 - 9:45 am",
                    "9:45 - 11:00 am",
                    "After 11:00 am",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while sitting and reading?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while watching TV?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while sitting inactive in a public place (like a movie theater or classroom)?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while riding as a passenger in a car for an hour without a break?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while lying down to rest in the afternoon when time permits?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while sitting and talking to someone?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while sitting quietly after lunch without alcohol?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 11,
                "question": "How likely are you to doze off or fall asleep (not just \"feel tired\") while in a car and stopped for a few minutes in traffic?",
                "options": [
                    "High chance of dozing",
                    "Moderate chance of dozing",
                    "Slight chance of dozing",
                    "Would never doze",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Sleep Quality",
        "questions": [
            {
                "number": 1,
                "question": "In the past 7 days, my sleep quality was:",
                "options": [
                    "Very Poor",
                    "Poor",
                    "Fair",
                    "Good",
                    "Very Good",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "In the past 7 days, my sleep was refreshing.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "In the past 7 days, I had a problem with my sleep.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "In the past 7 days, I had difficulty falling asleep.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "In the past 7 days, my sleep was restless.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "In the past 7 days, I tried hard to get sleep.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "In the past 7 days, I worried about not being able to fall asleep.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "In the past 7 days, I was satisfied with my sleep.",
                "options": [
                    "Not at all",
                    "A little bit",
                    "Somewhat",
                    "Quite a bit",
                    "Very much",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Sleep Apnea",
        "questions": [
            {
                "number": 1,
                "question": "How old were you when you were first diagnosed with sleep apnea?",
                "options": [
                    "0 - 19 years old",
                    "20 - 29 years old",
                    "30 - 39 years old",
                    "40 - 49 years old",
                    "50 - 59 years old",
                    "60 - 69 years old",
                    "Over 70 years old",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "How long do you think you had sleep apnea before you were diagnosed?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12 - 24 months",
                    "24+ months",
                    "Not sure",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "Did snoring trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "Did sleepiness trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "Did tiredness trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "Did a driving or work accident trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "Did shortness of breath during sleep trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "Did stopped breathing during sleep trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "Did heart disease trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "Did high blood pressure trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 11,
                "question": "Did depressed mood trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 12,
                "question": "Did irritability trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 13,
                "question": "Did a concerned friend or spouse trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 14,
                "question": "Did forgetfulness trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 15,
                "question": "Did a healthcare provider's suggestion trigger you to be evaluated for sleep apnea? How long was it present before you were diagnose with sleep apnea?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 9 months",
                    "9 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 16,
                "question": "What doctor first talked to you about sleep apnea?",
                "options": [
                    "Primary care of family doctor (PCP)",
                    "Cardiologist",
                    "Diabetes specialist",
                    "Sleep specialist",
                    "Other",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 17,
                "question": "What type of sleep study did you have when first diagnosed with sleep apnea?",
                "options": [
                    "A sleep study at my home (portable sleep study)",
                    "A sleep study in a sleep/lab center",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 18,
                "question": "How satisfied were you with the experience of getting a sleep study?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 19,
                "question": "Do you have any kind of health care coverage, including health insurance, prepaid plans such as HMOs, or government plans such as Medicare?",
                "options": [
                    "Yes",
                    "No",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Sleep Apnea Treatment",
        "questions": [
            {
                "number": 1,
                "question": "What treatment(s) are you currently using for your sleep apnea?",
                "options": [
                    "Never been treated",
                    "Continuous Positive Airway Pressure Machine (CPAP)",
                    "Auto Positive Airway Pressure Machine (APAP)",
                    "Bi-level Positive Airway Pressure Machine (BiPAP)",
                    "Adaptive Servo-Ventilation (ASV)",
                    "Oral appliance",
                    "Behavioral therapy",
                    "Tongue stimulation",
                    "Tonsillectomy (removal of tonsils)",
                    "UPPP (removal of palate and other tissue from the mouth)",
                    "Nasal deviation surgery",
                    "Tongue surgery",
                    "Jaw surgery",
                    "Bariatic surgery",
                    "Prefer not to answer"
                ],
                "multiselect": true,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with Continuous Positive Airway Pressure Machine (CPAP)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with Auto Positive Airway Pressure Machine (APAP)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with Bi-level Positive Airway Pressure Machine (BiPAP)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with Adaptive Servo-Ventilation (ASV)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with oral appliance(s)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with behavioral therapy?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with tongue stimulation?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with tonsillectomy (removal of tonsils)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with UPPP (removal of palate and other tissue from the mouth)?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 11,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with nasal deviation surgery?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 12,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with tongue surgery",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 13,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with jaw surgery?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 14,
                "question": "Considering all past and present treatments that you have had, how satisfied were you with bariatric surgery?",
                "options": [
                    "Very dissatisfied",
                    "Dissatisfied",
                    "Slightly dissatisfied",
                    "Neutral",
                    "Slightly satisfied",
                    "Satisfied",
                    "Very satisfied",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Risk Profile",
        "questions": [
            {
                "number": 1,
                "question": "Do you currently experience snoring? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "Do you currently experience sleepiness? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "Do you currently experience tiredness? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "Have you recently experienced a driving or work accident? How long ago did this occure?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "Do you currently experience shortness of breath during sleep? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "Do you currently experience stopped breathing during sleep? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "Do you currently have heart disease? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "Do you currently experience high blood pressure? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "Do you currently experience depressed mood? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "Do you currently experience irritability? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 11,
                "question": "Do you have a concerned friend or spouse? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 12,
                "question": "Do you currently experience forgetfulness? How long has this symptom been present?",
                "options": [
                    "0 - 3 months",
                    "3 - 6 months",
                    "6 - 12 months",
                    "12+ months",
                    "N/A"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Quality of Life",
        "questions": [
            {
                "number": 1,
                "question": "In general, how would you rate your health?",
                "options": [
                    "Poor",
                    "Fair",
                    "Good",
                    "Very good",
                    "Excellent",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "Compared to one year ago, how would you rate your health in general now?",
                "options": [
                    "Much worse than one year ago",
                    "Somewhat worse now than one year ago",
                    "About the same as one year ago",
                    "Somewhat better now than one year ago",
                    "Much better now than one year ago",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "In general, how would you rate your quality of life?",
                "options": [
                    "Poor",
                    "Fair",
                    "Good",
                    "Very good",
                    "Excellent",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "To what extent are you able to carry out your everyday physical activities such as walking, climbing stairs, carrying groceries, or moving a chair?",
                "options": [
                    "Not at all",
                    "A little",
                    "Moderately",
                    "Mostly",
                    "Completely",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "How well are you able to run errands and shop?",
                "options": [
                    "Unable to do",
                    "With much difficulty",
                    "With some difficulty",
                    "With a little difficulty",
                    "Without any difficulty",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "In the past 7 days, how much did pain interfere with your day to day activities?",
                "options": [
                    "Very much",
                    "Quite a bit",
                    "Somewhat",
                    "A little bit",
                    "Not at all",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "In the past 7 days, I felt depressed:",
                "options": [
                    "Always",
                    "Often",
                    "Sometimes",
                    "Rarely",
                    "Never",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "During the past 7 days, I felt fatigued:",
                "options": [
                    "Very much",
                    "Quite a bit",
                    "Somewhat",
                    "A little bit",
                    "Not at all",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "In the past 7 days, I had a problem with my sleep:",
                "options": [
                    "Very much",
                    "Quite a bit",
                    "Somewhat",
                    "A little bit",
                    "Not at all",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "I have trouble doing all of my regular leisure activities with others:",
                "options": [
                    "Always",
                    "Often",
                    "Sometimes",
                    "Rarely",
                    "Never",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    },
    {
        "title": "My Interest in Research",
        "questions": [
            {
                "number": 1,
                "question": "How did you hear about MyApnea.Org",
                "options": [
                    "American Sleep Apnea Association (ASAA)",
                    "A.W.A.K.E. Group",
                    "CPAP company",
                    "Personal or family doctor",
                    "Clinic or hospital",
                    "CPAP provider",
                    "Poster or other advertisement",
                    "Facebook",
                    "Twitter",
                    "Family member",
                    "Friend",
                    "Internet search",
                    "Other patient-centered network",
                    "Other",
                    "Prefer not to answer"
                ],
                "multiselect": true,
                "answer": false,
                "validation": {}
            },
            {
                "number": 2,
                "question": "Have you ever taken part in research projects related to your health or the health of a family member?",
                "options": [
                    "Yes",
                    "No",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 3,
                "question": "How would you prefer to be contacted to learn about potential research studies?",
                "options": [
                    "E-mail",
                    "Cell phone text messaging",
                    "Social media (such as Facebook, Twitter, or Pinterest)",
                    "Letter or post card in the mail",
                    "A computer created phone message",
                    "Personal phone call from research staff or my doctore",
                    "Talking face-to-face with research staff or my docter when I am visiting the clinic",
                    "Other",
                    "I am not interested in being contacted about future research studies"
                ],
                "multiselect": true,
                "answer": false,
                "validation": {}
            },
            {
                "number": 4,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by completing a survey two or more times?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 5,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by giving a blood sample?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 6,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by talking over the phone or the Internet?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 7,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by taking a medication?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 8,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by meeting at a local community center or school?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 9,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by involving you and other people in your family?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            },
            {
                "number": 10,
                "question": "If a researcher was studying a condition or health problem that you cared about, how interested would you be in participating by staying in the hospital for 1 or more days?",
                "options": [
                    "Not interested",
                    "Somewhat interested",
                    "Very interested",
                    "Prefer not to answer"
                ],
                "multiselect": false,
                "answer": false,
                "validation": {}
            }
        ]
    }
];