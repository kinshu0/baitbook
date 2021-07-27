import { Route } from "react-router-dom";
import { LoginForm, SignupForm } from "./Auth";
import { Nav } from "./Nav";

function Home(props) {
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="home-hero">
                <div>
                    <h3>C'mon join us! We want all of your data right now!</h3>
                </div>
                <Route path='/' exact>
                    <LoginForm />
                </Route>
                <Route path='/signup'>
                    <SignupForm />
                </Route>
            </div>
        </>
    )
}



export { Home }