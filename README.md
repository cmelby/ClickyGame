# Click Game


## Summary 
The Click Game is a simple pattern recognition game where the user starts by clicking on one of the card, then proceeds to select different cards each time. The longer and more clicks the user initiates without clicking the same card the more points the user will get. Once the user selects the same card consecutively, their score goes back to zero. This game was built using a react front end that shuffles components on the page after each click by the user. 


## Demo
![Site](
  Assets/demo.gif) 

 
## Technologies Used
- React: Used to dynamically render components on browser and initiate functionality of the game based on user inputs.
- Git - Version control system to track changes to source code.
- GitHub - Hosts repository that can be deployed to GitHub Pages.
 
## Code Snippet
Thee belwo code snippet is our Character Card component that we are exporting to be used in our App.js. This component is responsible for creating the structure that then will be used to place the parsed data from our json in order to send the correct piceses of information to the browser. React makes mogularity very efficient in this way by enabling these components, which are very similar to constructors to be imported and implement other places in our code. However it's important to note that "props" can only be handed down, not upwards when creating our components. 

```js

import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.image} 
        onClick={()=> props.clickHandler(props.id)}/>
      </div>
    </div>
  );
}

export default CharacterCard;

});
```

## Built With
* [React](https://reactjs.org/docs/getting-started.html)
* [Reactbootstrap](https://www.npmjs.com/package/react-bootstrap)
* [npmjs](https://docs.npmjs.com/)
* [inquirer](https://www.npmjs.com/package/inquirer)

## Authors

**Chris Melby**
- [LinkedIn](https://www.linkedin.com/in/chris-melby-71106b126/)
- [Link to Github](https://github.com/cmelby)
- [Portfolio](https://cmelby.github.io/portfolio/)
