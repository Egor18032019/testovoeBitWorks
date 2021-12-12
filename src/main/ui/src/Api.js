//  TODO сделать Енумы на `/api/get` и другие
//  TODO добавить типизацию ??
async function getAllCells() {

    const response = await fetch('/api/get');
    return await response.json();
}

async function recUser(data) {
    const response = await fetch(`/api/rec`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
 
        return await response.json();
     
}

async function deleteAllInBD(data) {
    const response = await fetch(`/api/clear`, {
        method: "POST"    
    })
        return await response.json();
     
}

export {
    getAllCells,
    recUser,
    deleteAllInBD
}