/* eslint-disable react/prop-types */

import { useReducer } from "react";
import { profileReducer } from "../reducers/ProfileReducer";
import { ProfileContext } from "../context";

const ProfileProvider = ({children}) => {
    const [state, dispatch] = useReducer(profileReducer);

    return(
        <ProfileContext.Provider value={{state, dispatch}}>
            {children}
        </ProfileContext.Provider>
    )
}

export default ProfileProvider;