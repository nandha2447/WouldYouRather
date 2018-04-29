import React from 'react'
import NavBar from './NavBar'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
class AddQuestion extends React.Component{
    state = {
        optionOneText: '',
        optionTwoText: '',
        questionSubmitted: false
    }
    componentDidMount(){
        this.setState(()=>({
            questionSubmitted: false
        }))        
    }
    handleOptionOne = (e) => {
        const text = e.target.value
        this.setState(()=>({
            optionOneText: text
        }))
    }  
    handleOptionTwo = (e) => {
        const text = e.target.value
        this.setState(()=>({
            optionTwoText: text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const {optionOneText , optionTwoText } = this.state
        console.log('option one' + optionOneText)
        console.log('option two' + optionTwoText)
        this.setState(()=>({
            optionOneText: '',
            optionTwoText: ''
        }))
        console.log(this.props)
        const {dispatch, authedUser} = this.props
        dispatch(handleSaveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        }))
        this.setState(()=>({
            questionSubmitted: true
        }))
    }

    render(){
        const {optionOneText , optionTwoText} = this.state
        if(this.state.questionSubmitted === true){
            return(
                <Redirect to ='/home'/>
            )
        }
        return (
            <div>
                <NavBar />        
                <h3>Add a Question</h3>
                <form onSubmit={this.handleSubmit}>
                    Option one: <input type="text" onChange={this.handleOptionOne} maxLength={50} value={optionOneText}/><br/>
                    Option two: <input type="text" onChange={this.handleOptionTwo} maxLength={50} value={optionTwoText}/>
                    <button type='submit' disabled={optionOneText==='' || optionTwoText===''}>Submit</button>
                </form>

            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        authedUser: state.authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)