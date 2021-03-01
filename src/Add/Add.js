import React from 'react'
import classes from './Add.module.css';

class Add extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img : null
        }
        this.handleImageInputChange = this.handleImageInputChange.bind(this);
    }

    handleImageInputChange(e){
        console.log(e.target.value);
    }


    render(){
    return (
        <div className={classes.add}>
            <div className={classes.addCard}>
                <div className={classes.addName}>
                    <input type="text" placeholder="Enter Name..." name="name" id="nameField" />
                </div>
                <div className={classes.addImage}>
                    {/* Image Upload */}

                    <input 
                        className={classes.addImageInput} 
                        type="file" 
                        name="image" 
                        onChange={this.handleImageInputChange}
                    />
                        <p>Click To Add <br/><span> + </span> </p>
                </div>
                <div className={classes.addDesc}>
                    <textarea placeholder="Enter a description..." />
                </div>
            </div>
        </div>
    )
    }
}

export default Add;
