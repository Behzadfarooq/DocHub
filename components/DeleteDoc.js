// DeleteDoc.js

// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import db from '../firebase';

// const deleteDocument = async (id, session, router) => {
//   try {
//     await db.collection('userDocs').doc(session?.user.email)
//       .collection('docs').doc(id).delete();
//     console.log('Document successfully deleted!');
//   } catch (error) {
//     console.error('Error deleting document: ', error);
//   } finally {
//     // Redirect to the main page or another appropriate location
//     router.push('/');
//   }
// };

// const DeleteDoc = ({ session }) => {
//   const router = useRouter();

//   // useEffect to handle deletion on component mount
//   useEffect(() => {
//     const { id } = router.query;
//     if (id) {
//       deleteDocument(id, session, router);
//     }
//   }, [router.query, session]);

//   return (
//     <div>
//       <p>Deleting document...</p>
//       {/* You can add a loading indicator or additional UI here */}
//     </div>
//   );
// };

// export { deleteDocument, DeleteDoc }; 


// DeleteDoc.js
// DeleteDoc.js

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import db from '../firebase';

export const deleteDocument = async (id, session, router) => {
  try {
    await db.collection('userDocs').doc(session?.user.email)
      .collection('docs').doc(id).delete();
    console.log('Document successfully deleted!');
  } catch (error) {
    console.error('Error deleting document: ', error);
  } finally {
    // Redirect to the main page or another appropriate location
    router.push('/');
  }
};

export default function DeleteDoc({ session }) {
  const router = useRouter();

  // useEffect to handle deletion on component mount
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      deleteDocument(id, session, router);
    }
  }, [router.query, session]);

  return (
    <div>
      <p>Deleting document...</p>
      {/* You can add a loading indicator or additional UI here */}
    </div>
  );
}


