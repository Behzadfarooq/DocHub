// import React from 'react';
// import { useRouter } from 'next/router'
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import DeleteIcon from '@material-ui/icons/Delete';
// import { IconButton, Tooltip} from '@material-ui/core';
// import DescriptionIcon from '@material-ui/icons/Description';

// const DocumentRow = ({ doc }) => {

//   const router = useRouter();

//   return (
//     <div onClick={() => router.push(`/doc/${doc?.id}`)} className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2">
//       <DescriptionIcon />
//       <p className="flex-grow ml-5 w-10 mr-10 truncate">{doc?.fileName}</p>
//       <p className="text-sm mr-6">{doc?.timestamp?.toDate().toLocaleDateString()}</p>
//       <Tooltip title="Delete">
//           <IconButton >
//            <DeleteIcon />
//          </IconButton>
//          </Tooltip>
//       <IconButton>
      
//         <MoreVertIcon />
//       </IconButton>
//     </div>
//   );
// }

// export default DocumentRow;









// DocumentRow.js


import React from 'react';
import { useRouter } from 'next/router';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, Tooltip } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import {deleteDocument} from './DeleteDoc'; // Import DeleteDoc as default

const DocumentRow = ({ doc, session }) => {
  const router = useRouter();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this document?')) {
      deleteDocument(doc.id, session, router);
    }
    database.ref(`documents/${doc.id}/collaborators`).remove(); // added this
  };

  return (
    <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 text-gray-700 cursor-pointer text-sm border mb-2">
      <DescriptionIcon />
      <p className="flex-grow ml-5 w-10 mr-10 truncate">{doc?.fileName}</p>
      <p className="text-sm mr-6">{doc?.timestamp?.toDate().toLocaleDateString()}</p>
      <Tooltip title="Delete">
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <IconButton onClick={() => router.push(`/doc/${doc?.id}`)}>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};

export default DocumentRow;

 