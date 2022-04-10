import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <h3>Who is there?</h3>
            <h5>{user ? user.displayName + 'is here' : 'Nobody is here'}</h5>
        </div>
    );
};

export default Products;