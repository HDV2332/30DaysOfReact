export const Button = ({ onClick, text, style }) => {
    return (
        <button onClick={onClick} style={style}>
            {text}
        </button>
    )
}
