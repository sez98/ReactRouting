import React, { Component } from 'react';
import { connect } from 'react-redux';
import { breedsList } from '../store/actions' 
 
class Breeds extends Component{

  getBreedsList() {
    this.props.dispatch(breedsList())
  }

  render(){
    console.log(this.props)
    const { breeds } = this.props;
    return (
      <>
        Breeds
        <hr />
        <button onClick={() => this.getBreedsList()}> 
          Get Breeds List
        </button>

        { breeds && breeds.breedsList ?
          breeds.breedsList.map( item =>(
            <div key={item.id}>
              <hr />
                {item.id}. {item.name}
            </div>
          ))
        :null}

      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { wholeState: state, breeds: state.breeds}
}


export default connect(mapStateToProps)(Breeds);
