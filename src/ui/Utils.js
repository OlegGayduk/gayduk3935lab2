
const SetItem = (key, value)=>{
   

    key = String(key)
    if(typeof value === "object"){
        value = JSON.stringify(value)
    }
    // let _value = GetItem(key)
    // if(_value === null){
    //     SetItem(key, JSON.stringify({}))
    // }
    localStorage.setItem(key, value)
    return true
}

const GetItem = (key)=>{
    key = String(key)
    let value = localStorage.getItem(key)

    try{
        value = JSON.parse(value)
        return value
    }
    catch (e){
        return value
    }
}

const LocalStorage = {
    SetItem,
    GetItem
}


export {LocalStorage}