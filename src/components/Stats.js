// import { useEffect } from 'react'
import Graph from './Graph'

const Stats = ({ stats }) => {

    if (stats) {
        return (
            <div>
                <div id="stats">
                    <h2>{stats['subject']} {stats['course']}</h2>
                    <h2>{stats['year']}{stats['semester']}</h2>
                    <ul>
                        <li>Average: {stats['averages']}
                            {(() => {
                                const grade = +stats['averages']
                                if (!grade) {
                                    return ""
                                } else if (grade < 50) {
                                    return " (F)"
                                } else if (grade < 55) {
                                    return " (D)"
                                } else if (grade < 60) {
                                    return " (C-)"
                                } else if (grade < 64) {
                                    return " (C)"
                                } else if (grade < 68) {
                                    return " (C+)"
                                } else if (grade < 72) {
                                    return " (B-)"
                                } else if (grade < 76) {
                                    return " (B)"
                                } else if (grade < 80) {
                                    return " (B+)"
                                } else if (grade < 85) {
                                    return " (A-)"
                                } else if (grade < 90) {
                                    return " (A)"
                                } else {
                                    return " (A+)"
                                }
                            })()}
                        </li>
                        <li>Std. Dev: {stats['std_devs']}
                            {(() => {
                                const dev = +stats['std_devs']

                                if (dev > 15) {
                                    return " (High)"
                                } else if (dev < 10) {
                                    return " (Low)"
                                } else {
                                    return ""
                                }
                            })()}
                        </li>
                        <li>Enrolled: {stats['enrollments']}</li>
                        <li>Failed: {stats['failures']} ({stats['failRate']})</li>
                    </ul>
                </div>
                <div id="graph">
                    <Graph graphData={stats['grade_dict']} />
                </div>
            </div>
        )
    } else {
        return ""
    }
}

export default Stats
