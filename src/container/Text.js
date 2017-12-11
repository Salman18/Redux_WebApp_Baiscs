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
                      <div>Title: {this.props.text}</div>
                  </div>
              );       
            }
        }

function mapStateToProps (state) {
    //Whatever returned from here will show as props inside BookList
     return {
        text: state.simples
     };
   }
// Anything returned from this function will end up as props on the Booklist container 
   function mapDispatchToProps(dispatch) {
//Whenever selectBook is called ,the result should be passed to all of our reducers
     return bindActionCreators( selectText, dispatch);
   }

   export default connect (mapStateToProps, mapDispatchToProps) (TextReducer);