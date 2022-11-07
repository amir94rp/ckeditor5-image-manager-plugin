
# CKEditor 5 Image Manager plugin

This package is a simple plugin for CKEditor 5. Plugin adds a "Insert Image" button to editor's toolbar and by clicking this button, the "open__image_manager__e" will be fired.


## Installation

Install with npm

```bash
  npm i @amir94rp/ckeditor5-file-manager --save-dev
```

## Usage/Examples

```javascript
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import {ImageManager} from "@amir94rp/ckeditor5-file-manager";

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
    //...
    Essentials,
    ImageManager,
    //...
];

// Editor configuration.
ClassicEditor.defaultConfig = {
    //...
    toolbar: {
        items: [
            //...
            'imageManager',
            //...
        ],
        shouldNotGroupWhenFull: true
    },
    //...
}
```

