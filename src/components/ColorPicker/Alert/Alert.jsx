import PropTypes from 'prop-types';
import { StyledAlert } from './Alert.styled';

export const Alert = ({text, type}) => {
    return <StyledAlert type={type}>{text}</StyledAlert>
}

Alert.propType = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['error', 'success', 'warning'])
}