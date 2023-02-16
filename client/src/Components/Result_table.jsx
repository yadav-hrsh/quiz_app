import React from 'react'

const Result_table = ({userid,attempts ,marks, status}) => {
  return (
    <div>
        <table>
            <thead className='table-header'>
                <tr className='table-row'>
                    <td>Name</td>
                    <td>Attempts</td>
                    <td>Earn points</td>
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-body'>
                    <td>{userid}</td>
                    <td>{attempts}</td>
                    <td>{marks}</td>
                    <td>{status}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Result_table