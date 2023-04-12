import PropTypes from 'prop-types';
import { Component } from 'react';
import { DivOverlay, DivModal } from './Modal.styled';

export class Modal extends Component {

    static propTypes = {
        children: PropTypes.node,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        };
    };

    handleBackdropClick = e => {
        if(e.currenTarget !== e.target) {
      
            this.props.closeModal();
        };
    };

    render() {
        return (
            <DivOverlay onClick={this.handleBackdropClick}>
                <DivModal>
                    <img src={this.props.modalImg} alt={this.props.tags}/>
                </DivModal>
            </DivOverlay>
        );
    };
};