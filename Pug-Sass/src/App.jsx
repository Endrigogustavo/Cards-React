
import './App.scss'

import React from "react"

class App extends React.Component {
  render() {
    return pug`
    .container
    .whaleContainer
      - for(var x = 1; x <= 4; x++)
        .whalePos(class="size" + x)
          .whaleRotate(class="size" + x)
            .whale
            .fin
    .cPos
      .cc
        .circle.one
        .circle.two
        .circle.three
        .circle.four
    .triangleContainer
      .triangleBar
      - for(var x = 1; x < 20; x++)
        span(class="triangle")
    .gradientContainer
      .overlay.one
      .gradient
        - for(var x = 1; x < 39; x++)
          span(class="ray" + x)
        - for(var x = 1; x < 39; x++)
          span(class="ray" + x)
    .rocks
      .rock.one
      .rock.two
      .rock.three
      .rock.four
    .bubbleContainer
      - for(var x = 1; x < 50; x++)
        span(class="bubbleY" + x)
          span(class="bubbleX" + x)
  
    `;
  }
}

export default App;