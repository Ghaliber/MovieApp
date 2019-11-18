import React from 'react'
import StarRating from './StarRating'

class MovieBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }


    }
    render() {
        return (
            <div className='MovieBox'>
                {this.props.items.map((el, i) =>
                    <div key={i} className='Box'>
                        <img src={el.img} width='150px' />
                        <p className='Name'> {el.name}</p>
                        <div className='Rating' >
                        <StarRating  setRating={() => {}} count={el.rating}/>
                        </div>
                        
                    </div>
                )}
            

            </div>
        )
    }
}
export default MovieBox