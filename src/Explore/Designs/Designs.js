import React, {useEffect, useState} from 'react';
import DesignCard from './DesignCard/DesignCard';
import classes from './Designs.module.css';
import firebase from '../../firebase';
import 'firebase/firebase-firestore';

function Designs(props) {

    const [posts, setPosts] = useState();
    const searchText = props.searchText.toLowerCase();
    let postsToShow = [];

    useEffect(() => {
        let data = [];
        //grab everything from the db
        firebase.firestore().collection('posts').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {data.push(doc.data())})
            setPosts(data);
            console.log(data)
        });
    }, []);

    if(posts){
        posts.forEach((post)=>{
            if (post.postName.toLowerCase().indexOf(searchText) === -1){
                return;
            }
            postsToShow.push(
                (<DesignCard
                    key={post.postImageURL}
                    name = {post.postName}
                    image = {post.postImageURL}
                    desc = {post.postDesc}/>)
            );
            console.log('search ran...');
        });
    }


    return (
        <div className={classes.designs}>
            {/* {posts && posts.map(post => {
                return (<DesignCard
                    key = {post.postImageURL}
                    name = {post.postName}
                    image = {post.postImageURL}
                    desc = {post.postDesc}
                    />)
            })} */}
        {postsToShow}
            
        </div>
    )
}

export default Designs
