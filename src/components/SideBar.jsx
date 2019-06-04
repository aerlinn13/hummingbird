import React from 'react';
import Field from './Field';


class SideBar extends React.Component {
  render() {
    const {
      farm,
      fields,
      crops,
      potentialYield,
      selectedField,
      selectedCrops,
      selectField,
      updateField
    } = this.props;

      if (!fields || !farm || !crops) {
        return null;
      }

      return(
        <div className="sidebar">
          <div className="farm-name">{farm.name}</div>
          <div className="yield">{potentialYield.length ? Math.floor(potentialYield.reduce((acc, cur) => acc + cur, 0) * 100) / 100 : null}</div>
          <div className="legend">
            <div className="fields-sign">Field</div>
            <div className="yield-sign">Yield</div>
          </div>
          {fields.map((field, index) =>
            <Field
            index={index}
            field={field}
            crops={crops}
            selectedField={selectedField}
            selectedCrops={selectedCrops}
            selectField={selectField}
            updateField={updateField}
            potentialYield={potentialYield[index]}
            />)}
        </div>
      );
  }
}

export default SideBar;
