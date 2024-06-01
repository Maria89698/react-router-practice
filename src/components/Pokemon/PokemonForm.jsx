import { PureComponent } from "react"

export class PokemonForm extends PureComponent {
    handleSubmit = e => {
        e.preventDefault()
        const form = e.currentTarget
        this.props.onSubmit(form.elements.unput.value)
        form.reset()
    }

    render(){
        return(
            <form>
                <input type="text"/>
                <button type="submit">Search</button>
            </form>
        )
    }
    
}