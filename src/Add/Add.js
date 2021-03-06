import React, {useRef} from 'react'
import classes from './Add.module.css';

function Add (props) {

    //file upload handling (image)
    const refImage = useRef(null);

    function handleSubmit(e){
        console.log();
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
