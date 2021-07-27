import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { NavBar } from "./Nav"


const months = {
    1: 'Jan', 2: 'Jan', 3: 'Jan', 4: 'Jan',
    5: 'Jan', 6: 'Jan', 7: 'Jan', 8: 'Jan',
    9: 'Jan', 10: 'Jan', 11: 'Jan', 12: 'Jan',
}


function ProfileCard(props) {

    return (
        <div className="profile-card">
            <img src={props.profile.picture.large} alt={props.profile.login.username} />
            <h1>{props.profile.name.first} {props.profile.name.last}</h1>
            <h3>Age: {props.profile.dob.age}</h3>
            <h3>Birthdate: {props.profile.dob.date.slice(8, 10)} {months[parseInt(props.profile.dob.date.slice(5, 7))]} {props.profile.dob.date.slice(0, 4)}</h3>
            <h3>Address: </h3>
            <h3>{props.profile.location.street.number} {props.profile.location.street.name}, {props.profile.location.city}, {props.profile.location.state}-{props.profile.location.postcode}, {props.profile.location.country}</h3>
        </div>
    )
}




function Feed(props) {


    const [profiles, setProfiles] = useState([])


    const fetchProfiles = async () => {
        const data = await (await fetch('https://randomuser.me/api/?results=13')).json()
        setProfiles(data.results)
    }

    useEffect(() => fetchProfiles(), [])

    return (
        <>
            <NavBar>
                <Link to='/'>
                    <h2 className="go-back">
                        ◄
                    </h2>
                </Link>
                <h2 className="title" style={{ fontWeight: 'normal', }}>Look at everyone's data!</h2>
            </NavBar>
            <div className="cards-section">
                {profiles.map((profile, i) => <ProfileCard key={i} profile={profile} />)}
            </div>
        </>
    )
}

export { Feed }