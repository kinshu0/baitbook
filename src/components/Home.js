import { Route, Router, Switch } from "react-router-dom";


function Home(props) {
    return (
        <div className="home-hero">
            <div>
                <h3>C'mon join us! We want all of your data right now!</h3>
            </div>
            {props.children}
        </div>
    )
}



export { Home }