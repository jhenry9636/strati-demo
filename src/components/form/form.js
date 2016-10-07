import React, { Component } from 'react';
import './form.css';
import jquery from 'jquery';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import RegisterStore from '../../stores/register.js'
import jsonpatch from 'fast-json-patch';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const $ = jquery;

const styles = {
  customWidth: {
    width: 370,
  },
};


class Form extends Component {
 
  constructor(props) {
    super(props);

    this.state = {
    	name: '',
    	description: ''
    }
  }

  sendData() {

		var req = {'application':{'name':this.refs.nameField.getValue(),'description':this.refs.descriptionField.getValue()}};

		$.ajax({
			url: encodeURI('/registry/rs/ga/v2/applications/nodes'),
			type: 'POST',
			data: JSON.stringify(req),
			dataType: 'string',
			contentType: 'application/json'
		})

  }

  render() {
    return (
		<MuiThemeProvider>
			<div>
				<h1 className="mainTitle">Register Application</h1>
				<section>
						<div className="row">
							<div className="col-sm-4">
								<TextField style={styles.customWidth} 
								floatingLabelText="Service Name" 
								ref="nameField" />
							</div>
							<div className="col-sm-4">
				        <SelectField style={styles.customWidth}
				        	className="critical"
				        	floatingLabelText="Business Criticality"
				        	ref="criticalityField">
				          <MenuItem value={'critical'} primaryText="Critical" />
				          <MenuItem value={'major'} primaryText="Major" />
				          <MenuItem value={'minor'} primaryText="Minor" />
				        </SelectField>
							</div>
							<div className="col-sm-4">
				        <SelectField style={styles.customWidth}
				        	className="critical"
				        	floatingLabelText="Usage"
				        	ref="usageField">
				          <MenuItem value={'internal'} primaryText="Internal" />
				          <MenuItem value={'external'} primaryText="External" />
				        </SelectField>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<TextField
						      multiLine={true}
						      rows={1}
						      rowsMax={2}
						      floatingLabelText="Description"
						      fullWidth={true}
						      onBlur={this.setName}
						      ref="descriptionField" />
							</div>
						</div> 
				</section>
				<RaisedButton onClick={this.sendData.bind(this)} label="Save" backgroundColor={'#00aeef'} primary={true} className="mainButton" />
			</div>
		</MuiThemeProvider>

    );
  }
}

export default Form;
