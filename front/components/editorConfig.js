// editorConfig.js

const editorConfig = {
  toolbar: [
    { name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText'] },
    { name: 'undo', items: ['Undo', 'Redo'] },
    '/',
    { name: 'links', items: ['Link', 'Unlink'] },
    { name: 'insert', items: ['Table'] },
    { name: 'styles', items: ['Format', 'Bold', 'Italic', 'Strike', 'TextColor', 'BGColor', 'NumberedList', 'BulletedList', 'Blockquote'] },
    { name: 'paragraph', items: ['Heading', 'Paragraph'] }
  ],
  language: 'en'
};

export default editorConfig;
