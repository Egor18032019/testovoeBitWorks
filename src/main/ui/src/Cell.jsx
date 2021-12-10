


function Cell(props) {
    const {cell } = props;
    const { id, name } = cell;
    return (
        <li className="cell">
            <div className="cell_id">{id} </div>
            <div className="cell_name">{name} </div>
        </li>
    )
};


export default Cell;