import React from "react";
import { getAllCells, recUser } from "./Api.js"
import { ReducerActionRouter, Active } from "./CONST.js"

const DataContext = React.createContext("cells");
const initialState = {
    active: Active.REALIZATION,
    result: [],
    status: ""
};

/*
[{"id":1,"name":""},{"id":2,"name":""},{"id":3,"name":""},
{"id":4,"name":""},{"id":5,"name":""},{"id":6,"name":""}
,{"id":7,"name":""},{"id":8,"name":""},{"id":9,"name":""}]
*/

const dataReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ReducerActionRouter.GETALLCELLS:
            const response = action.payload;

            return Object.assign({}, state, {
                result: response,
                status: "getAllCells"
            })
        case ReducerActionRouter.SENDCELLS:
            const newPartResult =action.payload;
            console.log(newPartResult)
            const oldResult = [].concat(state.result);
            const newResult = [];
            // мы должны из в старом результе перезаписать новые значения
            return Object.assign({}, state, {
                result: newResult,
                status: "sendCells"
            });

        case ReducerActionRouter.SWITCHPAGE:
            return Object.assign({}, state, {
                active: action.payload
            });
    }
}

export {
    dataReducer,
    initialState,
    DataContext
};