import { useContext } from "react"
import { ThemeContext } from "../App"

const Paragraph = () => {
    const theme = useContext(ThemeContext)

    return (
        <div className={theme} >
            <h4>
                Context provides a way to pass data through the component tree without having to pass props down manually at every level.
            </h4>
            <p>
                In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
            </p>
        </div >
    )
}

export default Paragraph