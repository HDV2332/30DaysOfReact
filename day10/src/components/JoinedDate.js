const pStyles={
  display: 'flex',
  justifyContent: 'center'
}
const JoinedDate = ({ date }) => (
    <div className='date-styles'>
      <p style={pStyles}> &#128340; Joined on {date}</p>
    </div>
  )

  export default JoinedDate