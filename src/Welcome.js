import Explore from './Explore/Explore';
import classes from './Welcome.module.css';
import Add from './Add/Add';

function Welcome() {

  const DESIGNS = [
    {name : "Tree", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis congue purus, ut aliquet dolor. Duis placerat et lorem non porta. Curabitur molestie ullamcorper dui, in posuere lacus venenatis quis.", image : "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"},

    {name : "Nature", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis congue purus, ut aliquet dolor. Duis placerat et lorem non porta. Curabitur molestie ullamcorper dui, in posuere lacus venenatis quis.", image : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"},

    {name : "Sky", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis congue purus, ut aliquet dolor. Duis placerat et lorem non porta. Curabitur molestie ullamcorper dui, in posuere lacus venenatis quis.", image : "https://static.toiimg.com/photo/72975551.cms"},

    {name : "Scary", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis congue purus, ut aliquet dolor. Duis placerat et lorem non porta. Curabitur molestie ullamcorper dui, in posuere lacus venenatis quis.", image : "http://www.freedigitalphotos.net/images/img/homepage/394230.jpg"},

    {name : "Galaxy", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis congue purus, ut aliquet dolor. Duis placerat et lorem non porta. Curabitur molestie ullamcorper dui, in posuere lacus venenatis quis.", image : "https://www.w3schools.com/w3css/img_lights.jpg"},

    {name : "Random", desc : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis congue purus, ut aliquet dolor. Duis placerat et lorem non porta. Curabitur molestie ullamcorper dui, in posuere lacus venenatis quis.", image : "https://killerattitudestatus.in/wp-content/uploads/2019/12/gud-night-images.jpg"},
    
  ];


  return (
    <div className={classes.welcome}>
      {/* <Explore demoData = {DESIGNS}/> */}
      <Add />
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
