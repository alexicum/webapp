import React, { Component } from 'react'
import { title }            from 'react-isomorphic-render'
import styler               from 'react-styling'
import { connect }          from 'react-redux'

import Checkbox from '../../components/checkbox'
import Dropdown from '../../components/dropdown'
import Switch   from '../../components/switch'

@connect
(
	store => ({ })
)
export default class Form extends Component
{
	state = 
	{
		text_value: 'Text',
		select_value: 'B',
		textarea_value: 'Lorem ipsum',
		checked: true,
		// selected: 'A',
		// switched: true,
	}

	render()
	{
		const markup = 
		(
			<div>
				{title("Form UI Showcase")}

				<form style={style.form}>
					<label style={style.form.label}>{'Text input field'}</label>
					<input type="text" style={style.form.input} value={this.state.text_value} onChange={this.on_input_text_changed}/>
					You entered: {this.state.text_value}

					<label style={style.form.label}>{'Select'}</label>
					<select style={style.form.select} value={this.state.select_value} onChange={this.on_selection_changed}>
						<option value="A">Apple</option>
						<option value="B">Banana</option>
						<option value="C">Cranberry</option>
					</select>
					You selected: {this.state.select_value}

					<label htmlFor="description" style={style.form.label}>{'Textarea'}</label>
					<textarea name="description" style={style.form.textarea} value={this.state.textarea_value} onChange={this.on_textarea_text_changed}/>
					You entered: {this.state.textarea_value}

					<label style={style.form.label}>Checkbox</label>
					<Checkbox style={style.form.checkbox} label="Checkbox" checked={this.state.checked} on_change={ checked => this.setState({ checked: checked }) }/>
					You checked: {this.state.checked ? 'checked' : 'unchecked'}

					<label style={style.form.label}>Dropdown</label>
					<Dropdown style={style.form.checkbox} selected={this.state.selected} list={[{ key: 'A', label: 'Apple' }, { key: 'B', label: 'Banana' }, { key: 'C', label: 'Cranberry' }]} label="Choose" select={ selected => this.setState({ selected: selected }) }/>
					You selected: {this.state.selected ? this.state.selected : 'nothing'}

					<label style={style.form.label}>Switch</label>
					<div>
						iOS style switch
						<Switch style={style.form.switch} value={this.state.switched} on_change={ switched => this.setState({ switched: switched }) }/>
					</div>
					You switched: {this.state.switched ? 'on' : 'off'}
				</form>
			</div>
		)

		return markup
	}

	on_input_text_changed = event =>
	{
		const value = event.target.value
		// you can validate value here
    	this.setState({ text_value: value })
	}

	on_selection_changed = event =>
	{
		const value = event.target.value
    	this.setState({ select_value: value })
	}

	on_textarea_text_changed = event =>
	{
		const value = event.target.value
		// you can validate value here
    	this.setState({ textarea_value: value })
	}
}

const style = styler
`
	form
		margin-top: 2em

		input
			padding: .5em
			margin-top: 1em
			margin-right: 1em
			margin-bottom: 1em

		select
			padding: .5em
			margin-top: 0em
			margin-right: 1em

		textarea
			padding: .5em
			margin-top: 0em
			margin-right: 1em

		label
			display: block
			margin-top: 1em
			margin-bottom: 1em
			font-weight: bold

		checkbox
			display: block
			margin-top: 1em
			margin-bottom: 1em

		switch
			// margin-top: 1em
			margin-bottom: 1em
			margin-left: 1em
`