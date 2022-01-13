import { useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'

type setColorProps = {
    color: string,
    setColor: void
}

const darkModeSwitch = ({ color, setColor }: setColorProps) => {

    const changeColor = () => {
        if (color === "dark") {
            setColor("light")
        } else {
            setColor("dark")
        }
    }

    if (color === "light") {
        return (<button onClick={changeColor}><FaSun /></button>)
    } else {
        return (<button onClick={changeColor}><FaMoon /></button>)
    }
}

export default darkModeSwitch;