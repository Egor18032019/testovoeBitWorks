const Active = {
    REALIZATION: "REALIZATION",
    TECHTASK : `TECHTASK`,
    TESTCASE: `TESTCASE`,
} 

const AppRoute = {
    ROOT: `/`,
    REALIZATION: `/realization`,
    TECHTASK : `/task`,
    TESTCASE: `/case`,
};

const ReducerActionRouter = {
    SWITCHPAGE : `SWITCHPAGE`,
    SENDCELLS: `SENDCELLS`, 
    GETALLCELLS: `GETALLCELLS`, 
}

export {
    ReducerActionRouter,
    AppRoute,
    Active

};