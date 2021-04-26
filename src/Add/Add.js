import React, {useRef, useState} from 'react'
import classes from './Add.module.css';
import firebase from '../firebase'
import 'firebase/firebase-firestore';

function Add (props) {
    //state for everything
    const[postName, setPostName] = useState('');
    const[postDesc, setPostDesc] = useState('');
    const[image, setImage] = useState();
    //file upload handling (image)
    const refImage = useRef(null);

    function handleSubmit(){
        if(postName && postDesc){
            //upload the image to Stoarage First
            let file = refImage.current.files[0];
            let storageRef = firebase.storage().ref(`images/${file.name}`);
            storageRef.put(file).then(snapshot => {
                snapshot.ref.getDownloadURL().then((downloadUrl) => {
                    console.log('File available at', downloadUrl);

                    //now put it in db as obj for post
                    let uploadData = {
                        'postName' : postName,
                        'postImageURL' : downloadUrl,
                        'postDesc' : postDesc
                    }
                    let db = firebase.firestore();
                    db.collection('posts').add(uploadData).then(alert('success!')).catch(err=>{console.log(err)});
                  });
            }) 
    }
}
    let imageToShow = image ? 
    (<div className={classes.addImage}>
        <img 
        className={classes.addPreviewImage}
        src={image} 
        alt='hello'
        />
        </div>
        ) : 

    (
    <div className={classes.addImage}>
        <input 
        ref={refImage}
        onChange={()=>{setImage(URL.createObjectURL(refImage.current.files[0]))}}
        className={classes.addImageInput} 
        type="file" 
        name="image" 
    />
        <p>Click To Add <br/><span> + </span> </p>
        </div>)

    return (
        <div className={classes.add}>
            <div className={classes.addCard}>
                <div className={classes.addName}>
                    <input 
                    type="text" 
                    placeholder="Enter Name..." 
                    name="name" 
                    id="nameField" 
                    onChange={(e)=> {setPostName(e.target.value)}}
                    />
                </div>
                {imageToShow}
                <div className={classes.addDesc}>
                    <textarea 
                    placeholder="Enter a description..." 
                    onChange={(e)=> {setPostDesc(e.target.value)}}
                    />
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
