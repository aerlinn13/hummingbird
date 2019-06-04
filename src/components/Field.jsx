import React from 'react';
import { Button } from "@blueprintjs/core";

class Field extends React.Component {
  render() {
    const {
      field,
      crops,
      selectedField,
      potentialYield,
      selectedCrops,
      index,
      selectField,
      updateField
    } = this.props;

    if (!field) {
      return null;
    }

    let button = <Button className="add-crop" onClick={() => selectField(index)} text="+"/>;
    let selector;
    let crop;

    if (crops && selectedCrops.get(index) != undefined) {
      crop = crops[selectedCrops.get(index)].name;
    }

    if (selectedField && field.name === selectedField.name) {
      button = <Button className="add-crop" onClick={() => selectField(null)} text="-"/>;
      selector = crops.map((crop, cropIndex) => <div className="crop-option" onClick={() => updateField(index, cropIndex)}>{crop.name}</div>);
      if (crop) {
        crop = (<Button onClick={() => updateField(index)} text="remove crop" intent="danger"/>);
      }
    }

    return(
      <div className="field">
        <div className="name">{field.name} - {field.hectares} ha</div><div className="hectares">{potentialYield || ''}</div>
        <div className="yield-ton">{potentialYield ? `per tonne ${Math.floor((potentialYield / field.hectares) * 100) / 100}` : ''}</div>
        <div className="crop">{crop || 'empty field'}</div>
        {button}
        {selector}
      </div>
    );
  }
}

export default Field;
