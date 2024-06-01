import { useState, useEffect } from "react"

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(window.localStorage.getItem(key) ?? initialValue)

    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export const SignupForm = () => {
    const [name, setName] = useLocalStorage('name', '')
    const [password, setPassword] = useLocalStorage('password', '')

    useEffect(() => {
        window.localStorage.setItem('name', name)
    }, [name])

    useEffect(() => {
        window.localStorage.setItem('password', password)
    }, [password])

    const handleChange = (e) => {
        const name = e.currentTarget.name
        switch (name) {
            case 'name':
            setName(e.currentTarget.value)
            return;

            case 'password':
            setPassword(e.currentTarget.value)
            return;

            default:
            return;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        e.currentTarget.reset()
    }

    return (
        <form style={{marginLeft: '20px'}} onSubmit={handleSubmit}>
            <label>
                Name
                <input style={{marginBottom: '10px'}} type="text" name="name" value={name} onChange={handleChange}/>
            </label>
            <br />
            <label>
                Password
                <input style={{marginBottom: '10px'}} type="password" name="password" value={password} onChange={handleChange}/>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}