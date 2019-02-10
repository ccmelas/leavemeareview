import React, { Component } from 'react'

import MainBG from '../components/MainBG';
import AuthForm from '../components/AuthForm';
import InputGroup from '../components/InputGroup';
import Button from '../components/Button';

class AddReview extends Component {
    state = {
        page: 1
    }

    render() {
        return (
            <MainBG>
                <AuthForm>
                    <h4>Review { this.props.match.params.username }</h4>
                    { this.renderTitle() }
                    { this.renderBody() }
                    { this.renderControls() }
                </AuthForm>
            </MainBG>
        );
    }

    renderTitle() {
        const title = this.state.page === 1 ? 
            ( <p>{this.state.page}/2: Tell us a bit about you</p>):
            ( <p>{this.state.page}/2: Review Project</p>);

        return title;
    }

    renderBody() {
        let form = this.state.page === 1 ? 
            (
                <div>
                    <InputGroup type="text" placeholder="Company/Organization"/>
                    <InputGroup type="text" placeholder="Position, Example CEO"/>
                </div>
            ) :
            (
                <div>
                    <InputGroup type="textarea" rows="4" placeholder="Write your review" required/>
                    <InputGroup type="text" placeholder="Project URL"/>
                    <InputGroup type="text" placeholder="Project Relevant Tags"/>
                </div>
            );

        return form;
    }

    renderControls() {
        let controls = this.state.page === 1 ? 
            ( 
                <div className="right">
                    <Button small onClick={this.nextPage}>Next →</Button>
                </div>
            ) :

            (
                <div className="d-flex">
                    <Button small onClick={this.previousPage}>← Previous</Button>
                    <Button small type="submit">
                        Save Review <span role="img" aria-label="Good">✅</span>
                    </Button>
                </div>
            );

        return controls;
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        });
    }

    previousPage = () => {
        this.setState({
            page: this.state.page - 1 || 1
        });
    }

}

export default AddReview;