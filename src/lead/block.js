/**
 * BLOCK: gutenstrap
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

import './editor.scss';

/**
 * Register: aa Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'gutenstrap/lead', {
	title: __( 'Lead' ), // Block title.
	icon: 'editor-textcolor', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	description: __( 'Lead paragraphs stand out by increasing the size of font. Typically used for an introductory paragraph.', 'gutenstrap' ),
	keywords: [
		__( 'bootstrap' ),
		__( 'lead' ),
		__( 'paragraph' ),
	],

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: '.lead',
		},
	},

	edit: function( { attributes, setAttributes, className = '' } ) {
		const { content } = attributes;
		const onChangeContent = ( newValue ) => setAttributes( { content: newValue } );
		return (
			<div>
				<RichText
					className={ `lead ${ className }` }
					tagName="p"
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},

	save: function( { attributes, className = '' } ) {
		const { content } = attributes;
		return (
			<p className={ `lead ${ className }` }>
				{ content }
			</p>
		);
	},

} );
