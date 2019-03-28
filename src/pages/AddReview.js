import React, { Component } from 'react'

import MainBG from '../components/MainBG';
import AuthForm from '../components/AuthForm';
import InputGroup from '../components/InputGroup';
import SelectInputGroup from '../components/SelectInputGroup';
import Button from '../components/Button';
import Separator from './../components/Separator';
import { DataProvider } from '../components/DataProvider';
import { UserConsumer } from './../App';

import { makeRequest } from './../services/http';

class AddReviewDisplay extends Component {
    state = {
        page: 1,
        loading: false,
        reviewDone: false,
        errors: [],
        rating: 1,
        tags: '',
        projectUrl: '',
        text: '',
        company: '',
        position: '',
    }

    // componentDidMount() {
    //     const { user } = this.props;
    //     this.setState({ user });
    // }

    startGoogleAuth = async () => {
        this.setState({ loading: true, errors: [] });
        const { code } = await window.auth2.grantOfflineAccess();
        const response = await makeRequest(`/login/google?code=${code}`);
        this.loginUser(response);
    } 

    submitReview = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, errors: [] });
        const {rating, text, position, company, projectUrl, tags } = this.state;
        const response = await makeRequest(
            '/reviews', 
            'post', 
            { rating, text, position, company, projectUrl, tags, owner: this.props.reviewee._id },
            this.props.token
        );

        if (!response.errors) {
            this.setState({ reviewDone: true })
        } else {
            this.setState({ loading: false, errors: response.errors});
        }
    }

    handleChange = name => event => {
        event.preventDefault();
        this.setState({ [name]: event.target.value });
    }

    loginUser = (response) => {
        if (!response.errors) {
            this.props.onAuthentication(response.data.user, response.data.token);
            this.setState({ loading: false });
        } else {
            this.setState({ loading: false, errors: response.errors});
        }
    }

    render() {
        return (
            <MainBG>
                <AuthForm handleSubmit={ this.submitReview }>
                    { this.renderContent() }
                </AuthForm>
            </MainBG>
        );
    }

    renderContent = () => {
        const { user, reviewee } = this.props;
        const { loading, reviewDone } = this.state;

        if (!reviewee) {
            return <h4>The user you want to review was not found</h4>;
        } else if (!user) {
            return (
                <div>
                    <h4>Please login to proceed</h4>
                    <Separator text="google"/>
                    <div className="gap"></div>
                    <Button length="block" scheme="google"
                            onClick={this.startGoogleAuth}
                            loading={loading}>Sign in with Google</Button>
                </div>
            );   
        } else if (reviewDone) {
            return (
                <div>
                    <h4>Done! Thank you for giving { reviewee.name } a review</h4>
                </div>
            )
        } else {
            return (
                <div>
                    <h4>Review { reviewee.name }</h4>
                    { this.renderTitle() }
                    { this.renderBody() }
                    { this.renderControls() }
                </div>
            )
        }
    }


    renderTitle() {
        const title = this.state.page === 1 ? 
            ( <p>{this.state.page}/2: Tell us a bit about you</p>):
            ( <p>{this.state.page}/2: Review Project</p>);

        return title;
    }

    renderBody() {
        const options = [
            { name: `1 Star`, value: 1}, 
            { name: `2 Stars`, value: 2}, 
            { name: `3 Stars`, value: 3}, 
            { name: `4 Stars`, value: 4},
            { name: `5 Stars`, value: 5}
        ];

        let form = this.state.page === 1 ? 
            (
                <div>
                    <InputGroup type="text" 
                        onChange={this.handleChange('company')}
                        placeholder="Company/Organization"
                        required="required"/>

                    <InputGroup type="text"
                        placeholder="Position, Example CEO"
                        onChange={this.handleChange('position')}
                        required="required"/>
                </div>
            ) :
            (
                <div>
                    <InputGroup type="textarea" 
                        rows="4" placeholder="Write your review" 
                        required="required"
                        onChange={this.handleChange('text')}/>

                    <SelectInputGroup
                        defaultlabel="Rate your freelancer" 
                        options={ options }
                        onChange={this.handleChange('rating')}
                        required="required"/>

                    <InputGroup type="text"
                        placeholder="Project URL"
                        onChange={this.handleChange('projectUrl')}/>

                    <InputGroup type="text"
                        placeholder="Project Relevant Tags"
                        onChange={this.handleChange('tags')}/>
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
                    <Button small type="submit" loading={this.state.loading}>
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

const AddReview = (props) => {
    // user = the authenticated user
    // reviewee = the user to be reviewed
    return (<UserConsumer>
        {({ user, token }) => (
            <DataProvider url={`/user/search?username=${props.match.params.username}`}
                token={token} 
                render={
                    ({ data }) => <AddReviewDisplay 
                                    token={token}
                                    user={user} 
                                    reviewee={data.user}
                                    onAuthentication={props.onAuthentication}/>
                    }
            />
        )}

    </UserConsumer>);
}

export default AddReview;