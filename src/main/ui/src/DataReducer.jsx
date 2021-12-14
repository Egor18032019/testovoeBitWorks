import React from "react";
import { ReducerActionRouter, Active } from "./CONST.js"

const DataContext = React.createContext("cells");
const initialState = {
    active: Active.REALIZATION,
    result: [],
    status: ""
};


const dataReducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ReducerActionRouter.GETALLCELLS:
            const response = action.payload;

            if (response.length < 9) {
                let arr = []
                response.forEach((elem) => {
                    arr.push(elem.id)
                })
                const foo = [0,1, 2, 3, 4, 5, 6, 7, 8, 9].filter(e => {
                    return !arr.includes(e)
                });
                foo.forEach((elem) => {
                    response.push({
                        id: elem,
                        name: ""
                    })
                })
            }
            response.sort((a, b) => {
                return a.id - b.id
            })
            return Object.assign({}, state, {
                result: response,
                status:""
            })

        case ReducerActionRouter.ERROR:
            const responseError = action.payload;

            return Object.assign({}, state, {
                status: responseError
            })
        // а нужен ли вообще расчет на клиенте ?
        case ReducerActionRouter.SENDCELLS:
            const newPartResult = action.payload;
            const requestList = newPartResult.requestList;
            const forAddResult = requestList.reduce(
                function (result, id) {
                    const foo = {
                        id: id,
                        name: newPartResult.name
                    }
                    result.push(foo)
                    return result
                }, []
            )
            const oldResult = [].concat(state.result);
            const newResult = oldResult.filter(e => {
                return !requestList.includes(e.id)
            });
            newResult.push(...forAddResult)
            newResult.sort((a, b) => {
                return a.id - b.id
            }
            );
            return Object.assign({}, state, {
                result: newResult,
                status: ""
            });

    }
}

export {
    dataReducer,
    initialState,
    DataContext
};