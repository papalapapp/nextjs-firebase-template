import { useState } from "react";
import { storage } from "../firebase/firebase-config";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { createDocument } from "../firebase/crud-api";


const useStorage = () => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);


    const uploadFile = (file, filepath, addDocFunc) => {
        if(!file || !filepath) {
            setError("Keine Datei Ausgewählt")
            return
        }
        const storageRef = ref(storage, `${filepath}/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Upload Image to Firebase Storage
        uploadTask.on('state_changed', (snapshot) => {
            setError("")
            let precentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(precentage)
        }, (error) => {
            setProgress(0)
            setError(error)
        }, async() => {
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                await addDocFunc(downloadURL, file.name)
                setProgress(0)
            });
        });
    }

    
        
       
          
    

    return { progress, error, uploadFile }
}

export default useStorage;