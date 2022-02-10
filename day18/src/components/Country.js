const Country = ({ country: { name, flag, population } }) => {
    return (
      <div className='country'>
        <div className='country_flag'>
          <img src={flag} alt={name} />
        </div>
        <h3 className='country_name'>{name.toUpperCase()}</h3>
        <div class='country_text'>
          <p>
            <span>Population: </span>
            {population}
          </p>
        </div>
      </div>
    )
  }

export default Country