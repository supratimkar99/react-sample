const TableBody = (props) => {
	const rowData = props.employeeData.map((row, index) => {
        return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.skill}</td>
                    <td>
                        <button className="link b2" onClick={() => props.deleteEmployee(index)}>Delete</button>
                    </td>
                </tr>
        )
    })
    return <tbody>{rowData}</tbody>
}

export default TableBody;