import '../App.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



export function Lol() {
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const data = await (await fetch('https://randomuser.me/api?results=10?seed=foobar')).json()
    setUserInfo(data.results)
  }

  return (
    <div>
      <h1>Lol tadaa!!</h1>
      {userInfo.map(val => (
        <h3 key={val.login.uuid}>
          <Link to={`/lol/${val.login.uuid}`}>
            {`${val.name.first} ${val.name.last}`}
          </Link>
        </h3>
      ))}
    </div>
  )
}

// export default Lol;
