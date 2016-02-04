import React from 'react'
import ReactDOM from 'react-dom'
import { Motion, spring } from 'react-motion'

class App extends React.Component {
    render() {
        return (
            <Motion defaultStyle={{x: 0}} style={{x: spring(360)}}>
                {val => {
                    let style = {
                        width: val.x,
                        height: val.x,
                        position: 'absolute',
                        top: val.x*0.25,
                        left: val.x*0.25,
                        border: '1px solid red',
                        transform: `rotate(${val.x}deg)`
                    }
                    return <div style={style}>{val.x}</div>
                }}
            </Motion>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'))
