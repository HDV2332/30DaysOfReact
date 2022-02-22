import HexaColor from "./HexaColor"

const FormattedBlocks = () => {
    let formatted = []
    let count = 27
    while (count > 0) {
        formatted.push(<HexaColor key={count} />)
        count--
    }
    return (
        <div >
            {formatted}
        </div>
    )
}

export default FormattedBlocks