import { useState } from 'react'
import Stats from './Stats'

const Entry = () => {

  const [loading, setLoading] = useState(false)
  const [failed, setFailed] = useState(false)
  const [tutorial, setTutorial] = useState(true)
  const [stats, setStats] = useState('')
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setTutorial(false)
    setFailed(false)
    setLoading(true)
    fetchGrades()
  }

  const fetchGrades = async () => {
    const res = await fetch('https://qpk05wiya3.execute-api.us-west-2.amazonaws.com/grades?userEntry=' + text)
    const data = await res.json()
    setLoading(false)
    if (!data['failedQuery']) {
      setStats(data)
      setFailed(false)
    } else {
      setFailed(true)
    }
  }

  return (
    <>
      {(() => {
        if (tutorial) {
          return (<div className="tutorial">
            <h2>How To Use</h2>
            <p>For a year range, enter <span className="mono">math 101 2014-2020</span> or enter <span className="mono">phil 220 2019</span> for a single year.</p>
            <br />
            <p>You can also choose the session with <span className="mono">2019s</span> or <span className="mono">2019w</span>.</p>
          </div>)
        }
      })()}


      <form onSubmit={onSubmit}>
        <input className="mainEntry" type="text" onChange={event => setText(event.target.value)} placeholder="ex. math 101 2014-2020" />
        <button type="submit" hidden>Submit</button>
      </form>

      {(() => {
        if (loading) {
          return <p className="loading">Loading...</p>
        }
      })()}

      {(() => {
        if ((failed || stats['message'] === "Internal Server Error")) {
          return <p style={{ color: "darkred" }}>Hmm... Something's not right.</p>
        } else if (!failed && stats && !loading) {
          return <Stats stats={stats} />
        }
      })()}

    </>
  )
}

export default Entry
