import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {InfoProfileType} from './InfoProfile';

export function InfoProfileForm({
                                    profile: {
                                        userId,
                                        fullName,
                                        contacts,
                                        aboutMe,
                                        lookingForAJob,
                                        lookingForAJobDescription
                                    },
                                    updateProfile,
                                    goToViewMode,
                                }: InfoProfileType & {
                                    goToViewMode: () => void
                                }
) {

    const contactsForm = Object.entries(contacts).map((key) => {
        const contactTitle = 'contacts.' + key[0];
        return <div>
            <label htmlFor={contactTitle}>{contactTitle}</label><br/>
            <Field id={contactTitle} name={contactTitle} style={{minWidth: '30%'}}/>
            <ErrorMessage name={contactTitle}/>
        </div>
    })

    const [lookingForAJobState, setLookingForAJobState] = useState(lookingForAJob)
    return (
        <Formik
            initialValues={{
                userId,
                fullName,
                aboutMe,
                lookingForAJob: lookingForAJobState,
                lookingForAJobDescription,
                contacts: {...contacts},
            }}
            validationSchema={Yup.object({
                fullName: Yup.string().required(),
                aboutMe: Yup.string(),
                lookingForAJob: Yup.boolean().required(),
                lookingForAJobDescription: Yup.string(),
            })}
            onSubmit={async (values) => {
                await updateProfile(values);
                goToViewMode();
            }}
        >
            <Form>
                <div>
                    <label htmlFor="fullName">Full Name</label><br/>
                    <Field id={'fullName'} name={'fullName'}/>
                    <ErrorMessage name="fullName"/>
                </div>

                <div>
                    <label htmlFor="aboutMe">About me</label><br/>
                    <Field id={'aboutMe'} name={'aboutMe'} as={'textarea'}/>
                    <ErrorMessage name="aboutMe"/>
                </div>

                <div>
                    <label htmlFor="lookingForAJob">Looking for a job</label>
                    <Field id={'lookingForAJob'} name={'lookingForAJob'} type={'checkbox'} onClick={() => {
                        setLookingForAJobState(!lookingForAJobState);
                    }}/>
                    <ErrorMessage name="lookingForAJob"/>
                </div>

                {lookingForAJobState && <div>
                    <label htmlFor="lookingForAJobDescription">Looking for a job description</label><br/>
                    <Field id={'lookingForAJobDescription'} name={'lookingForAJobDescription'} as={'textarea'}/>
                    <ErrorMessage name="lookingForAJobDescription"/>
                </div>}

                {contactsForm}

                <div>
                    <button type={'submit'}> Save</button>
                </div>
            </Form>
        </Formik>
    )
}