import { Component } from 'react';
import { Container, Title, ColorPickerOption } from './ColorPicker.styled';

export class ColorPicker extends Component {
    handle
    render () {
       return(
            <Container>
                <Title>Color Picker</Title>
                <span>Обраний колір: </span>
                <br />
                {this.props.options.map(({label, color}) => (
                    <ColorPickerOption key={label} bgc={color}>
                        <span>{label}</span>
                    </ColorPickerOption>
                ))}
            </Container>
        )
    }
}