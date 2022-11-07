import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import EmitterMixin from '@ckeditor/ckeditor5-utils/src/emittermixin';
import mix from '@ckeditor/ckeditor5-utils/src/mix';

export default class ImageManager extends Plugin {

	static get pluginName() {
		return 'ImageManager';
	}

	init() {
		const editor = this.editor;
		editor.ui.componentFactory.add( 'imageManager', locale => {

			const button = new ButtonView( locale );
			const command = editor.commands.get( 'bold' );
			const t = locale.t;

			button.set( {
				label: t( 'Insert Image' ),
				icon: imageIcon,
				tooltip: true
			} );

			button.bind( 'isOn', 'isEnabled' ).to( command , 'value', 'isEnabled' );

			button.on( 'execute', () => { this.fire( 'open__image_manager__e', true ); } );
			return button;
		});
	}
}

mix( ImageManager, EmitterMixin );
