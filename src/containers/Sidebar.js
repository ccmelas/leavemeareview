import React, { Component } from 'react';

import { Toggler, StyledSidebar, Header } from '../components/Sidebar';
import avatar from '../images/favorites.svg';

class Sidebar extends Component {
    render() {
        
        const { user, children } = this.props;
        
        return (
            <>
                <Toggler/>
                <StyledSidebar>
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
