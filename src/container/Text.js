import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectText } from '../actions/index';
import { bindActionCreators } from 'redux';

class TextReducer extends Component {
    
    render() {
              if (!this.props.text) {
                    return <div>Nothing</div>
                }
              return (
                  <div>
                      <h3>Hi</h3>
                      <div>Name: {this.props.text}</div>
                  </div>
              );       
            }
        }

function mapStateToProps (state) {
    //Whatever returned from here will show as props inside TextReducer
     return {
        text: state.simple
     };
   }
// Anything returned from this function will end up as props on the TextReducer container 
   function mapDispatchToProps(dispatch) {
//Whenever selectText is called ,the result should be passed to all of our reducers
     return bindActionCreators( selectText, dispatch);
   }

   export default connect (mapStateToProps, mapDispatchToProps) (TextReducer);