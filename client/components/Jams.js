import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchAllJams} from '../store'
import { Grid, Menu } from 'semantic-ui-react'
import {JamCard} from './JamCard'

export class Jams extends Component {

  componentDidMount() {
    this.props.getAllJams()
  }

  renderAllJams(){
    return this.props.allJams.map(jam => <JamCard key={jam.id} jam={jam}/>)
  }

  render() {
    return (
<div className="blog-posts">
      <div className="page-header header-filter header-small" style={{ backgroundImage: `url("../../public/material-kit-html-v2.0.4/assets/img/homemade-jam.jpg")` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <h2 className="title">Enjoy only the best hommeade jam</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">

          <div className="section">
            <div className="nav nav-bar">
              <div>
                <h2 className="navbar-header" style = {{ textAlign: 'center' }}>Currently In Stock</h2>
              </div>
            </div>
            <div className="row">
              { this.props.allJams.map(jam => {
                  return (<div className="col-md-4" key={jam.id}>
                    <div>
                      <div className="card card-raised card-background" style={{ backgroundImage: `url(${jam.image})` }}>
                        <div className="card-content">
                          <Link to={"/jams/"+ jam.id}>
                          <h6 className="category text-info">{jam.name}</h6></Link>

                          <h3 className="card-title">{jam.name}</h3>

                          <p className="card-description">
                            {jam.description.length < 50 ? jam.description : jam.description.slice(0,50) + '...'}
                          </p>
                          <Link className="btn btn-danger btn-round" to={"/products/" + jam.id}>
                            <i className="material-icons">format_align_left</i> Eat me
                  </Link>
                        </div>
                      </div>
                    </div>
                  </div>)
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("STATE", state)
  return {
    allJams: state.jamReducer.allJams,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllJams: () => dispatch(fetchAllJams())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jams)
