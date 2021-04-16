import { useState } from 'react'
import Stats from './Stats'

const Entry = () => {

    const [stats, setStats] = useState('')
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        fetchGrades()
    }

    const fetchGrades = async () => {
        const res = await fetch('https://qpk05wiya3.execute-api.us-west-2.amazonaws.com/grades?userEntry=' + text)
        const data = await res.json()
        console.log(data)
        setStats(data)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input className="mainEntry" type="text" onChange={event => setText(event.target.value)} placeholder="ex. math 101 2014-2020" />
                <button type="submit" hidden>Submit</button>
            </form>

            <Stats stats={stats} />
        </>
    )
}

export default Entry
