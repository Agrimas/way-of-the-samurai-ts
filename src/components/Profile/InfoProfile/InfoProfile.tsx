import React, {useState} from 'react';
import Classes from './InfoProfile.module.css';
import {InfoProfileForm} from './InfoProfileForm';
import {ProfileType, updateProfileRequestType} from '../../../api/api';
import {InfoProfileView} from './InfoProfileView';

export type InfoProfileType = {
    profile: ProfileType
    updateProfile: (data: updateProfileRequestType) => void
    updatePhoto: (image: File) => void
    isOwner: boolean
}

export function InfoProfile(props: InfoProfileType) {

    const [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true);
    }

    const goToViewMode = () => {
        setEditMode(false);
    }

    return (
        <div className={Classes.container}>
            {editMode ?
                <InfoProfileForm {...props} goToViewMode={goToViewMode}/> :
                <>
                    {props.isOwner && <button onClick={goToEditMode}>Edit</button>}
                    <InfoProfileView {...props}/>
                </>
            }
        </div>
    )
}