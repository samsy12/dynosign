import { combineReducers } from 'redux'

const defaultLayer = {
    opacity: 100,
    name: 'New layer',
    hidden: false
}

function changeActiveLayer(state={
                            type: 'CHANGE_ACTIVE_LAYER',
                            layer: defaultLayer,
                            layerNumber: 0}, action) 
{
    switch(action.type) {
        case 'CHANGE_ACTIVE_LAYER':
            return Object.assign({}, state, {layer: action.layer, layerNumber: action.layerNumber})
        case 'ADD_LAYER':
            return Object.assign({}, state, {layer: action.layer, layerNumber: action.layerNumber})
        case 'DELETE_LAYER':
            let layerNumber = (action.layerId - 1 < 0) ? 0 : action.layerId - 1;
            return Object.assign({}, state, {layerNumber})
    }
    return state;
}

function layersCRUD(state=[defaultLayer], action) {
    switch(action.type) {
        case 'ADD_LAYER':
            return [...state, action.layer]
        case 'CHANGE_LAYER':
            return state.map((item, index)=>{
                if(index!=action.layerId) {
                    return item;
                }
                return {
                    ...item,
                    ...action.layer
                }
            })
        case 'DELETE_LAYER':
            return [
                ...state.slice(0, action.layerId),
                ...state.slice(action.layerId + 1)
            ]
    }
    return state;
}

function changeMouseType(state={type: 'CHANGE_MOUSE_TYPE', mouseType: 'default'}, action) {
    if(action.type == 'CHANGE_MOUSE_TYPE') {
        return Object.assign({}, state, {mouseType: action.mouseType})
    }
    return state;
}

function toggleMenuBar(state={type: 'TOGGLE_MENU_BAR', menuBarVisible: false}, action) {
    if(action.type == 'TOGGLE_MENU_BAR') {
        return Object.assign({}, state, { menuBarVisible: action.menuBarVisible })
    }
    return state;
}

export default combineReducers({
    changeActiveLayer, 
    layersCRUD,
    changeMouseType,
    toggleMenuBar
})