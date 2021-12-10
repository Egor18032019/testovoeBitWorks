import { AppRoute } from "./CONST.js"
import { Link } from "react-router-dom";

function Toolbar( ) {

    return (

        <div className="toolbar">

            <Link className="toolbar-link" to={AppRoute.REALIZATION}>
                <h2>- Реализация </h2>
            </Link> 
            <Link className="toolbar-link" to={AppRoute.TECHTASK}>
                <h2>- Тех. задание </h2>
            </Link>
             <Link className="toolbar-link" to={AppRoute.TESTCASE}>
                <h2>- Test case </h2>
            </Link>
 
        </div>


    );
}

export default Toolbar;