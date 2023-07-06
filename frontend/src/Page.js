import React, { useState, useEffect, useRef } from 'react';
import './Page.css';
import Home from './Home';

function Page() {
  const [content, setContent] = useState('');
  const [pageHeight, setPageHeight] = useState(0);
  const pageRef = useRef(null);





  useEffect(() => {
    const lineHeight = 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    const pageLines = 40;
    const newPageHeight = lineHeight * pageLines;
    setPageHeight(newPageHeight);

    pageRef.current.focus();
  }, [content]);

  const handleContentChange = (e) => {
  e.stopPropagation();
  setContent(e.target.textContent);
};


  return (
    <div className="page" contentEditable="true" onInput={handleContentChange} style={{ height: `${pageHeight}px` }} ref={pageRef} tabIndex="0">
      {}

      <Home/>   
      {/* <div>
        <button className=''contentEditable="false">save me</button>
      </div>  */}
    </div>
  );
}

export default Page;







// import React, { useState, useEffect, useRef } from 'react';
// import './Page.css';
// import Home from './Home';

// function Page() {
//   const [id, setId] = useState('');
//   const [name, setName] = useState('');
//   const [content, setContent] = useState('');
//   const [pageHeight, setPageHeight] = useState(0);
//   const pageRef = useRef(null);

//   useEffect(() => {
//     const lineHeight = 1.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);
//     const pageLines = 40;
//     const newPageHeight = lineHeight * pageLines;
//     setPageHeight(newPageHeight);

//     pageRef.current.focus();
//   }, [content]);

//   const handleIdChange = (e) => {
//     setId(e.target.value);
//   };

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     e.stopPropagation();
//     setContent(e.target.textContent);
//   };

//   const savePage = () => {
//     const pageData = {
//       id,
//       name,
//       content
//     };

//     fetch('/save-page', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(pageData)
//     })
//       .then(response => {
//         if (response.ok) {
//           console.log('Page saved successfully!');
//         } else {
//           console.error('Failed to save page.');
//         }
//       })
//       .catch(error => {
//         console.error('Error saving page:', error);
//       });
//   };

//   return (
//     <div className="page" contentEditable="true" onInput={handleContentChange} style={{ height: `${pageHeight}px` }} ref={pageRef} tabIndex="0">
//       <input type="text" value={id} onChange={handleIdChange} placeholder="ID" />
//       <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />

//       {content}

//       <Home />
//       <div>
//         <button className='' contentEditable="false" onClick={savePage}>Save me</button>
//       </div>
//     </div>
//   );
// }

// export default Page;
