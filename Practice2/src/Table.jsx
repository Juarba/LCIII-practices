const Table = ({data}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Net Incomes</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    
                    <tr key={index}> 
                        <td>{item.brand}</td>
                        <td>$ {item.income.toLocaleString('es-ES')}</td>
                    </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default Table