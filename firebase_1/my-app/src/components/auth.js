import {auth} from "../config/firebase"; // googleProvider
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"; //signInWithPopup
import React, {useState} from "react";
function Auth() {
    const [email, setEmail] = useState(""); //saves whatever was in the function "setEmail"
    const [password, setPassword] = useState("");

    console.log(auth?.currentUser?.email)

    async function signUp() {
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }
    
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            alert(err);
        }
    };
    async function signIn() {
        if (!email || !email.includes("@")) {
            alert("Please enter a valid email.");
            return;
        }
    
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            alert(err);
        }
    };
    async function logout() {
    try{ 
        await signOut(auth);
    }catch(err) {
        console.error(err);
    }
}

// async function SignInWithGoogle() {
//     try{ 
//         await signOut(auth);
//     }catch(err) {
//         console.error(err);
//     }
// }

    return (
        <div>
            <input placeholder="Email.." 
                    onChange={(e) => setEmail(e.target.value)} //whenever the box is changed, it updates the value with "e"/current text
                        />
            <input placeholder="password.."
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
            />
           
           {/* signIn uses what was applied to the setEmail and setPassword and creates a user */}
        <button onClick={signUp}>Sign Up</button> 
        <button onClick={signIn}>Sign In</button>
        <button onClick={logout}>Sign Out</button>
        {/* <button onClick={SignInWithGoogle}> Sign In With Google</button> */}
        </div>

    )
}

export default Auth; 


//hello