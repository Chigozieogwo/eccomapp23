import React from 'react'

const Ratings = ({value,color}) => {
    return (
        <div>
            {[1, 2, 3, 4, 5].map(index  => (<i key={index} style={{ color: color }} className={
                (value >= index) ? 'fas fa-star'
                    : ((value >= (index - 0.5)) 
                    ? 'fas fa-star-half-alt' 
                    : 'far fa-star')}></i>))}
        </div>
    )
}

Ratings.defaultProps =  {
    color:'#f8e825'
}
export default Ratings
