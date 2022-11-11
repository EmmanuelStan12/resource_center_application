import React from 'react';
import StyledForm from '../styles/StyledForm';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    componentDidMount() {

    }

    static getDerivedStateFromProps() {

    }

    shouldComponentUpdate(nextState, nextProps) {
        return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    componentWillUnmount() {
        
    }

    handleSubmit(e) {
        // e is a synthetic event, this problem in class based components.
        e.preventDefault();
    }

    render() {
        const { children, ...otherProps } = this.props;
        return (
            <StyledForm onSubmit={this.handleSubmit.bind(this)} {...otherProps}>
                {children}
            </StyledForm>
        )
    }
}

export default Form;