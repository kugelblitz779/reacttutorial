import React, { useEffect, useState } from 'react'

const UseEffectOnce = () => {

    const [x, setX] = useState(0)
    const [y, sety] = useState(0)

    const logPosition = e => {
        setX(e.clientX);
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('Use Effect called')
        window.addEventListener('mousemove', logPosition);
    }, [])

    return (
        <div>
            Hooks Mouse Position: X - {x} , Y - {y}
        </div>
    )
}

export default UseEffectOnce
