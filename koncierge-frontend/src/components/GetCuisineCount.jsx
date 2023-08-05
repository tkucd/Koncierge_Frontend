import { database } from '../firebase/firebase';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const GetCuisineCount = async() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;

    if (user) {
        console.log(uid)
        try {
            const docSnap = await getDocs(collection(database, uid));
            let cuisineCount = 0;
            console.log("料理の数", docSnap.data);
            docSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().name);
                cuisineCount += 1;
            });
            console.log("料理の数", cuisineCount);
            return cuisineCount;
        } catch (error) {
            console.log("Error getting documents: ", error);
            return 0;
        }
    } else {
        console.log("No user is signed in.");
        return 0;
    }
};

export default GetCuisineCount;