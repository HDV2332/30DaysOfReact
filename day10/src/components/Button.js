export const Button = ({ className,style,text, onClick }) => (
    <div className='button-wrapper'>
        <button className={className} style={style} onClick={onClick}>
            {text}
        </button>
    </div>
)