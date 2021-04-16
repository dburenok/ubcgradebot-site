// import { useState } from 'react'
// import Graph from './Graph'

const Stats = ({ stats }) => {
    if (stats) {
        return (
            <div className="stats">
                <h2>{stats['subject']} {stats['course']}</h2>
                <h2>{stats['year']}</h2>
                <ul>
                    <li>Average: {stats['averages']}</li>
                    <li>Std. Dev: {stats['std_devs']}</li>
                    <li>Enrolled: {stats['enrollments']}</li>
                    <li>Failed: {stats['failures']} ({stats['failRate']})</li>
                </ul>
            </div>
        )
    } else {
        return ""
    }

}

export default Stats
