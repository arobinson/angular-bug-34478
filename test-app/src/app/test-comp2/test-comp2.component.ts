import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp2',
  templateUrl: './test-comp2.component.html',
  styleUrls: ['./test-comp2.component.css']
})
export class TestComp2Component implements OnInit {
  frOptions: any = {
    fontSize: ['.8', '1', '1.25', '1.5', '1.75', '2'],
    fontSizeDefaultSelection: '1',
    fontSizeUnit: 'rem',
    linkList: [],
    spellcheck: true,
    charCounterCount: false,
    htmlRemoveTags: ['script', 'style'],
    inlineStyles: {
      'Button or Field Name': '-test-inline: button-or-field-name',
      'Field Value': '-test-inline: field-value',
      'Application Name': '-test-inline: application-name',
      'Object Internal Name': '-test-inline: object-internal-name',
      'New Term': '-test-inline: new-term',
      Monospace: '-test-inline: monospace',
      'User Determined Value': '-test-inline: user-determined-value'
    },
    paragraphMultipleStyles: true,
    tableMultipleStyles: true,
    paragraphStyles: {
      bodytext: 'Body Text',
      h6: 'Heading 6',
      h5: 'Heading 5',
      h4: 'Heading 4',
      h3: 'Heading 3',
      h2: 'Heading 2',
      h1: 'Heading 1',

      subheading: 'Subheading',
      'author-comment': 'Author Comment',
      monospace: 'Monospace'
    },
    tableCellMultipleStyles: true,

    tableStyles: {
      'table-header-top': 'Table Header Top',
      'table-header-side': 'Table Header Side',
      'table-header-topside': 'Table Header Top and Side'
    },
    wordPasteModal: false,
    wordPasteKeepFormatting: false,
    tableCellStyles: {
      'shaded-cell': 'Shaded'
    },
    placeholderText: '',

    toolbarButtons: [
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      'subscript',
      'superscript',
      'paragraphStyle',
      'inlineStyle',
      'insertSpecialText',
      'insertHR',
      'quote',
      'clearFormatting',
      '-',
      'insertTable',
      'outdent',
      'indent',
      'formatOL',
      'formatUL',
      'insertLink',
      'fullscreen',
      'color',
      'html'
    ],

    toolbarButtonsXS: ['paragraphStyle', 'insertTable', 'insertSpecialText', 'insertLink', 'fullscreen', 'html', 'formatOL', 'formatUL'],
    // toolbarButtonsMD: ['paragraphFormat', 'paragraphStyle', 'insertTable', 'fullscreen'],
    // toolbarButtonsSM: ['paragraphFormat', 'paragraphStyle', 'insertTable', 'fullscreen'],
    pluginsEnabled: [
      'align',
      'charCounter',
      'codeBeautifier',
      'codeView',
      'colors',
      'draggable',
      'embedly',
      'entities',
      'fontFamily',
      'fontSize',
      'fullscreen',
      'image',
      'imageManager',
      'inlineStyle',
      'lineBreaker',
      'link',
      'lists',
      'paragraphFormat',
      'paragraphStyle',
      'quote',
      'save',
      'table',
      'url',
      'wordPaste'
    ],
    events: {
      'froalaEditor.focus': (e, editor) => {
        editor.toolbar.show();
      },
      'froalaEditor.blur': (e, editor) => {
        editor.toolbar.hide();
      },
      'froalaEditor.initialized': (e, editor) => {
        editor.toolbar.hide();
      }
    }
  };
  constructor() {}

  ngOnInit() {}
}
