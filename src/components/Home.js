import { useState } from "react"

function Home(props) {
    return (
        <div className="home-hero">
            <div>
                <h3>We want all of your data right now!</h3>
            </div>
            <LoginForm />
        </div>
    )
}

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className="login-component">
            <form>
                <h2>Log in to baitbook</h2>
                <input placeholder="username" type="username" value={username} onChange={handleUsernameChange}/>
                <input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
                <button type="submit">Submit</button>
            </form>
            <hr/>
            <button className="signup">Create an Account</button>
        </div>
    )
}

export { Home }