import Explore from './Explore/Explore';
import classes from './Welcome.module.css';
import Add from './Add/Add';

function Welcome() {
  return (
    <div className={classes.welcome}>
      <Explore />
      {/* <Add /> */}
    </div>
  );
}

export default Welcome;


/*
for now : array
[
  {name : , desc : , img : },
  {name : , desc : , img : },
  {name : , desc : , img : }
]


data structure : 
json {
  id : number,
  name : string,
  desc : string,
  image : URL
}



*/
