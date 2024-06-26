import { PureComponent, useEffect, useState } from "react";

export const PokemonInfo = () => {
    // state = {
    //     pokemon: '',
    //     isLoading: false,
    //     error: null,
    //     status: 'idle'
    // }

    const [pokemon, setPokemon] = useState('')
    const [error, changeError] = useState(null)
    const [isLoading] = useState(false)
    const [status] = useState('idle')

    useEffect(() => {
        setPokemon({status: 'pending', pokemon: null})

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
        .then(res=>{
            if (!res.ok) {
                return Promise.reject(new Error (`Покемона з іменем ${this.props.pokemonName} не знайдено!`))
            }
            return res.json()
        })
        .then(pokemon => this.setState({ pokemon, error: null, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }))

    }, [])

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.pokemonName !== this.props.pokemonName) {
    //       this.setState({status: 'pending', pokemon: null})
    //       fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemonName}`)
    //         .then(res=>{
    //             if (!res.ok) {
    //                 return Promise.reject(new Error (`Покемона з іменем ${this.props.pokemonName} не знайдено!`))
    //             }
    //             return res.json()
    //         })
    //         .then(pokemon => this.setState({ pokemon, error: null, status: 'resolved' }))
    //         .catch(error => this.setState({ error, status: 'rejected' }))
    //     }
    // }

    if (status === 'idle') {
        return <p>Введіть ім'я покемона</p>
    }
    if (status === 'pending') {
        return <div>Loading...</div>
    }
    if (status === 'rejected') {
        return <div>{error.message}</div>
    }
    if (status === 'resolved') {
        return <div></div>
    }

    return(
        <div>
            {!isLoading && !pokemon && !error && <p>Введіть ім'я покемона</p>}
            {{isLoading} && <div>Loading...</div>}
            {error && <div>Покемона з іменем {pokemon} не знайдено!</div>}
            {pokemon && <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
                </div>}
            
            <img src={this.state.pokemon.sprites.other['official-artwork'].front_default} alt="" />
        </div>
    )
}