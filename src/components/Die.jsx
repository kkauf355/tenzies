import React from 'react'

export default function Die(props) {
    const styles = {
            backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div 
            className="Die" 
            style={styles}
            onClick={props.holdDie}
        >
            {props.value}
        </div>
    )
}