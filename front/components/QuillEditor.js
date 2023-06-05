

import styled from 'styled-components';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false  
});

const QuillEditorWrapper = styled.div`
  .ql-editor {
    min-height: 400px;
  }

  .ql-syntax  {
    display: inline-block;
    max-width: 100%;
    overflow-x: auto;
    white-space: pre-wrap;
  }

  .ql-snow .ql-editor code, .ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
  }
`;


const QuillEditor = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'color': []}, {'background': []}],
      [{ 'align': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link'],
      ['clean'],
      [ 'code-block']
    ]
  };
  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'align',
    'list', 'bullet',
    'link',
    'code-block'
  ];

  const sanitizeOptions = {
    allowedTags: ['p', 'a', 'b', 'i', 'u', 's', 'em', 'strong', 'br', 'ul', 'li', 'ol', 'pre', 'code'],
    allowedAttributes: {
      a: ['href', 'target'],
      pre: ['class']
    }
  };

  return (
    <QuillEditorWrapper>
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Compose an epic..."
        sanitize={sanitizeOptions} // sanitize 옵션 추가
      />
    </QuillEditorWrapper>
  );
};

export default QuillEditor;
