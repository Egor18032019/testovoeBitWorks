import { Active } from "./CONST.js"
import Realization from "./Realization.jsx"
import TestCase from "./TestCase.jsx"
import TechTask from "./TechTask.jsx"



function View(props) {
    const { active } = props;
    switch (active) {
        case Active.REALIZATION:
            return (
                <Realization
                />
            )
        case Active.TECHTASK:
            return (
                <TechTask />
            )
        case Active.TESTCASE:
            return (
                <TestCase />
            )
            default:
                return (
                    <h1>Что то пошло не так.</h1>
                )
    }
}


export default View;