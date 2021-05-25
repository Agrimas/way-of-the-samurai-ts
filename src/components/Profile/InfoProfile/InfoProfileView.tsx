import React from 'react';
import userPhoto from '../../../assets/img/user.jpg';
import {InfoProfileType} from './InfoProfile';

export function InfoProfileView({
                                    profile: {
                                        fullName,
                                        contacts,
                                        aboutMe,
                                        lookingForAJob,
                                        lookingForAJobDescription,
                                        photos,
                                    },
                                    updatePhoto
                                }: InfoProfileType) {

    return (
        <>
            <div>
                <img src={photos?.small ?? userPhoto} alt=""
                     style={{width: '100px', height: '100px', objectFit: 'contain', borderRadius: '10px'}}/><br/>
                <input type="file" onChange={async (event) => {
                    if (event.target.files) {
                        await updatePhoto(event.target.files[0])
                    }
                }}/>
            </div>

            <h1>{fullName}</h1>

            <p>{aboutMe}</p>

            <p>Looking for a job: {lookingForAJob ? 'Yes' : 'No'}</p>
            {lookingForAJob && <p>{lookingForAJobDescription}</p>}

            {Object.entries(contacts).map((key) => {
                return <Contact key={key[0]} source={key[0]} url={key[1]}/>
            })}
        </>
    )
}

type ContactPropsType = {
    source: string
    url: string
}

const Contact = ({source, url}: ContactPropsType) => {
    return (
        <div>
            {source}: {url}
        </div>
    );
}