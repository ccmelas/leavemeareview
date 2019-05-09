import React, { Component } from 'react';

import { Toggler, StyledSidebar, Header } from '../components/Sidebar';
import avatar from '../images/favorites.svg';

class Sidebar extends Component {
    state = {
        open: false, // Mobile view
    };

    render() {
        
        const { user, children } = this.props;
        
        return (
            <>
                <Toggler sidebarOpen={(sidebarOpen) => this.setState({ open: sidebarOpen })}/>
                <StyledSidebar open={this.state.open}>
                    <Header>
                        <div className="avatar-container">
                            <img className="avatar" src={user.avatar || avatar } alt="Avatar"/>
                        </div>
                    </Header>
                    { children }
                </StyledSidebar>    
            </>
        )
    }
}


export default Sidebar;
