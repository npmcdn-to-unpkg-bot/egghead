import React from 'react'
import ReactDOM from 'react-dom'
import { Motion, spring, presets } from 'react-motion'

class App extends React.Component {
    render() {
        return (
            <Motion
                defaultStyle={{
                    y: 500,
                    z: 4
                }}
                style={{
                    y: spring(100, presets.wobbly),
                    z: spring(1)
                }}
            >
                {obj => {
                    const { y, z } = obj
                    let style = {
                        transform: `translate(100px, ${y}px) scale(${z})`
                    }
                    return <div style={style} className="block"></div>
                }}
            </Motion>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('main'))
