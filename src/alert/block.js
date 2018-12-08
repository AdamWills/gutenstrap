/**
 * BLOCK: gutenstrap
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import colorOptions from '../common/colorOptions';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl } = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'gutenstrap/alert', {
	title: __( 'Alert' ), // Block title.
	icon: 'warning', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	description: __( 'Alerts are available for any length of text, as well as an optional dismiss button.', 'gutenstrap' ),
	keywords: [
		__( 'bootstrap' ),
		__( 'alert' ),
		__( 'warning' ),
	],

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: '.alert',
		},
		alertType: {
			type: 'string',
			default: 'primary',
		},
	},

	edit: function( { attributes, setAttributes, className = '' } ) {
		const { content, alertType } = attributes;
		const onChangeContent = ( newValue ) => setAttributes( { content: newValue } );
		return (
			<div>
				{
					<InspectorControls>
						<PanelBody title={ __( 'Alert Type', 'gutenstrap' ) } initialOpen={ true }>
							<SelectControl
								label={ __( 'Alert Type', 'gutenstrap' ) }
								value={ alertType }
								options={ colorOptions }
								onChange={ ( newValue ) => setAttributes( { alertType: newValue } ) }
							/>
						</PanelBody>
					</InspectorControls>
				}
				<RichText
					className={ `alert alert-${ alertType } ${ className }` }
					tagName="div"
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},

	save: function( { attributes, className = '' } ) {
		const { content, alertType } = attributes;
		return (
			<div className={ `alert alert-${ alertType } ${ className }` } role="alert">
				{ content }
			</div>
		);
	},

} );
