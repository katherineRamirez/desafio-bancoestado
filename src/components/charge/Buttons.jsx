import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionAndroid from 'material-ui/svg-icons/action/view-list';
import ActionAndroid from 'material-ui/svg-icons/action/view-list';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

const RaisedButtonExampleComplex = () => (
  <div>
    <RaisedButton
      label="Eventos"
      labelPosition="before"
      style={styles.button}
      containerElement="label"
    >
      <input type="file" style={styles.exampleImageInput} />
    </RaisedButton>
    <RaisedButton
      label="Amigos"
      labelPosition="before"
      primary={true}
      icon={<ActionAndroid />}
      style={styles.button}
    />
  </div>
);

export default RaisedButtonExampleComplex;