import React from 'react';
import DesignCard from './DesignCard/DesignCard';
import classes from './Designs.module.css';

function Designs(props) {
    const designToShow = []
    
    //put everything in
    props.demoData.forEach((design) => {
            //add search functionality later here ****************
            if(design.name.indexOf(props.searchText) === -1){
                return;
            }

            designToShow.push(
            <DesignCard
                key={design.name}
                name={design.name}
                desc={design.desc}
                image={design.image}
            />
            )
    }
);


    return (
        <div className={classes.designs}>
            {designToShow}
        </div>
    )
}

export default Designs
