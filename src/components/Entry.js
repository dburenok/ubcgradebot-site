import { useState } from 'react'
import Stats from './Stats'

const Entry = () => {

    const [failed, setFailed] = useState(false)
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
        if (!data['failedQuery']) {
            setStats(data)
            setFailed(false)
        } else {
            setFailed(true)
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input className="mainEntry" type="text" onChange={event => setText(event.target.value)} placeholder="ex. math 101 2014-2020" />
                <button type="submit" hidden>Submit</button>
            </form>

            {(() => {
                if (failed || stats['message'] === "Internal Server Error") {
                    return <p style={{ color: "darkred" }}>Hmm... Something's not right.</p>
                } else if (!failed && stats) {
                    return <Stats stats={stats} />
                }
            })()}

        </>
    )
}

export default Entry
