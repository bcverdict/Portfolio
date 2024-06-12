import { doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import AppError from "../../Errors/AppError";

export const getRepoInfo = async () => {
    const collectionName = process.env.REACT_APP_FIREBASE_COLLECTION_NAME;
    const documentName = process.env.REACT_APP_FIREBASE_DOCUMENT_NAME;

    if (!collectionName || !documentName) {
        throw new AppError("Environment variables for collection or document names are not defined");
    }

    const docRef = doc(db, collectionName, documentName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.error("No such document!");
        return null;
    }
};
