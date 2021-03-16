import React, {useRef} from 'react'
import classes from './Add.module.css';
import firebase from '../firebase'

function Add (props) {
    //file upload handling (image)
    const refImage = useRef(null);
    function handleSubmit(e){
        //Upload file to firebase first, then go to explore
        let bucketName = 'images';
        let file = refImage.current.files[0];
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`);
        let uploadTask = storageRef.put(file);
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
          });      
        
    }

    return (
        <div className={classes.add}>
            <div className={classes.addCard}>
                <div className={classes.addName}>
                    <input type="text" placeholder="Enter Name..." name="name" id="nameField" />
                </div>
                <div className={classes.addImage}>
                    {/* Image Upload */}

                    <input 
                        ref={refImage}
                        className={classes.addImageInput} 
                        type="file" 
                        name="image" 
                    />
                        <p>Click To Add <br/><span> + </span> </p>
                </div>
                <div className={classes.addDesc}>
                    <textarea placeholder="Enter a description..." />
                </div>
            </div>
                <button
                    onClick={handleSubmit}    
                >
                    Submit
                </button>
        </div>
    )
}

export default Add;
