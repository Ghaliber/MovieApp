import React from 'react'
class StarRating extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            
            
        }
    }
        // ☆
        // ★
    render() {

        let arr = []
        for(let i = 0; i<5; i++){
            if(i < this.props.count){
                arr.push(<span onClick={() => this.props.setRating(i + 1)} key={i}>★</span>)
            }else{
                arr.push(<span onClick={() => this.props.setRating(i + 1)}  key={i}>☆</span>)
            }
        }
        return (
            <div>
                {arr}
            </div>
        )
    }
}
export default StarRating