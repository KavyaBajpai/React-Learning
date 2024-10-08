import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user}= useContext(UserContext)
    //in this component we use user, i.e. the exact data, so we call only that
  
    if(!user) return <div>please login</div>
    return <div>Welcome {user.username}</div>
  
}

export default Profile




// useContext hook helps us fetch the values from UserContext
