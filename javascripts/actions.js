export function changeMouseType (mouseType) {
  return { type: 'CHANGE_MOUSE_TYPE', mouseType }
}

export function deleteLayer (layerId) {
  return { type: 'DELETE_LAYER', layerId }
}

export function changeActiveLayer (layer, layerNumber) {
  return { type: 'CHANGE_ACTIVE_LAYER', layer, layerNumber }
}

export function addLayer (layersCount) {
  return {
    type: 'ADD_LAYER',
    layer: {
      opacity: 100,
      linesArray: [],
      name: 'New layer ' + layersCount,
      hidden: false
    },
    layerNumber: layersCount
  }
}

export function changeLayer (layer, layerId) {
  return { type: 'CHANGE_LAYER', layer, layerId }
}

export function toggleMenuBar (menuBarVisible) {
  return { type: 'TOGGLE_MENU_BAR', menuBarVisible }
}

export function changeLayerVisibility (hidden, layerNumber) {
  return { type: 'CHANGE_LAYER_VISIBILITY', hidden, layerNumber }
}

export function addLine (element, layerNumber) {
  return { type: 'ADD_LINE', lineData: element.toDataURL(), layerNumber }
}

export function redoLine (layerNumber) {
  return { type: 'REDO_LINE', layerNumber };
}

export function undoLine (layerNumber) {
  return { type: 'UNDO_LINE', layerNumber };
}

export function changeColor (color) {
  return { type: 'CHANGE_COLOR', color };
}
