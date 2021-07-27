import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className='login-component'>
            <form>
                <h2>Log in to <span style={{ color: '#F23D18' }}>bait</span>book</h2>
                <input placeholder="username" type="username" value={username} onChange={handleUsernameChange} />
                <input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />

            <Link to='/feed'>
                <button type="submit">Submit</button>
            </Link>
            </form>
            <hr />
            <Link to='/signup' className="signup-link">
                <button className="signup">Create an Account</button>
            </Link>
        </div>
    );
}
function SignupForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className='login-component'>
            <form>
                <h2>Sign up for <span style={{ color: '#F23D18' }}>bait</span>book</h2>
                <input placeholder="username" type="username" value={username} onChange={handleUsernameChange} />
                <input placeholder="password" type="password" value={password} onChange={handlePasswordChange} />
                <input placeholder="confirm password" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                <button type="submit">Create an Account</button>
            </form>
            <Link to='/' className='small-link'>&#8592; Go Back</Link>
        </div>
    );
}

export { LoginForm, SignupForm }