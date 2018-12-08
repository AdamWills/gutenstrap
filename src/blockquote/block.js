/**
 * BLOCK: Block Quote
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, TextControl, SelectControl } = wp.components;

const alignmentOptions = [
	{
		label: __( 'Left (Default)', 'gutenstrap' ),
		value: '',
	},
	{
		label: __( 'Center', 'gutenstrap' ),
		value: 'text-center',
	},
	{
		label: __( 'Right', 'gutenstrap' ),
		value: 'text-right',
	},
];

/**
 * Register: aa Gutenberg Block.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'gutenstrap/blockquote', {
	title: __( 'Blockquote' ), // Block title.
	icon: 'format-quote', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	description: __( 'For quoting blocks of content from another source within your document.', 'gutenstrap' ),
	keywords: [
		__( 'bootstrap' ),
		__( 'quote' ),
		__( 'blockquote' ),
	],

	attributes: {
		content: {
			type: 'array',
			source: 'children',
			default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
			selector: '.content',
		},
		footer: {
			type: 'string',
			default: 'Someone famous in ',
		},
		sourceTitle: {
			type: 'string',
			default: 'Source Title',
		},
		alignment: {
			type: 'string',
			default: '',
		},
	},

	edit: function( { attributes, setAttributes, className = '' } ) {
		const { content, footer = '', sourceTitle = '', alignment = '' } = attributes;
		const onChangeContent = ( newValue ) => setAttributes( { content: newValue } );
		return (
			<div>
				{
					<InspectorControls>
						<PanelBody title={ __( 'Citation', 'gutenstrap' ) } initialOpen={ true }>
							<TextControl
								label={ __( 'Footer Text', 'gutenstrap' ) }
								value={ footer }
								onChange={ ( newValue ) => setAttributes( { footer: newValue } ) }
							/>
							<TextControl
								label={ __( 'Source Title', 'gutenstrap' ) }
								value={ sourceTitle }
								onChange={ ( newValue ) => setAttributes( { sourceTitle: newValue } ) }
							/>
						</PanelBody>
						<SelectControl
							label={ __( 'Alignment', 'gutenstrap' ) }
							value={ alignment }
							options={ alignmentOptions }
							onChange={ ( newValue ) => setAttributes( { alignment: newValue } ) }
						/>
					</InspectorControls>
				}
				<blockquote className={ `blockquote ${ className } ${ alignment }` }>
					<p className="mb-0">
						<RichText
							className="mb-0"
							tagName="p"
							onChange={ onChangeContent }
							value={ content }
						/>
					</p>
					<footer className="blockquote-footer">{ footer }
						{ sourceTitle &&
							<cite title="Source Title">{ sourceTitle }</cite>
						}
					</footer>
				</blockquote>
			</div>
		);
	},

	save: function( { attributes, className = '' } ) {
		const { content, footer = '', sourceTitle = '', alignment = '' } = attributes;
		return (
			<blockquote className={ `blockquote ${ className } ${ alignment }` }>
				<p className="mb-0">
					{ content }
				</p>
				<footer className="blockquote-footer">{ footer }
					{ sourceTitle &&
						<cite title="Source Title">{ sourceTitle }</cite>
					}
				</footer>
			</blockquote>
		);
	},

} );
