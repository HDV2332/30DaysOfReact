const withStylesInput = (InputComp, currentType) => {
    return () => {
        return (
            <div className="input-group">
                <p>This is {currentType} type input</p>
                <InputComp type={currentType} />
            </div>
        )
    }
}

export default withStylesInput