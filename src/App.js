import React from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import whiteImage from 'public/assets/img/white-image.png';
const square = { width: 175, height: 175 }

class App extends React.Component {
  
  render() {
    return (
      <div>   
        <Segment.Group horizontal>
          <Segment circular style={square}>
            내용
          </Segment>
          <Segment circular style={square}>
            내용2
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

export default App