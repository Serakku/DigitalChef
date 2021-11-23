


import { auth } from '../firebase';


  const handleSignOut = ({navigation}) => {
    return(
    auth
        .signOut()
        .then(() => {
            navigation.navigate("Login")
        })
        .catch(error => alert(error.message))
)
}

export default handleSignOut;