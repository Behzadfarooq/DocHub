// import Head from 'next/head'
// import Header from '../components/Header';
// import { useEffect, useState, useRef } from 'react';
// import Login from '../components/Login';
// import { getSession } from 'next-auth/client';
// import { Button, IconButton } from '@material-ui/core';
// import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import FolderOpenIcon from '@material-ui/icons/FolderOpen';
// import Image from 'next/image';
// import Modal from '@material-ui/core/Modal';
// import db from '../firebase';
// import firebase from 'firebase';
// import DocumentRow from '../components/DocumentRow';

// export default function Home({ session }) {
//   const [showModal, setShowModal] = useState(false);
//   const [docs, setDocs] = useState([]);
//   const docNameFieldRef = useRef(null);
//   if (!session) return <Login />

//   const docsRef = db
//     .collection('userDocs')
//     .doc(session?.user.email)
//     .collection('docs');

//   useEffect(() => {
//     const unsub = docsRef
//     .orderBy('timestamp', 'desc')
//     .onSnapshot(querySnapshot => setDocs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))))

//     return unsub
//   }, [])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const inputValue = docNameFieldRef.current.value;

//     if (inputValue) {

//       docsRef.add({
//         fileName: inputValue,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//       })
//       .then(() => {
//         setShowModal(false);
//         e.target.reset();
//       })
//       .catch(err => alert(err))

//     }
//   }

//   const ModalComponent = () => (
//     <Modal
//       open={showModal}
//       onClose={() => setShowModal(false)}
//       aria-labelledby="simple-modal-title"
//       aria-describedby="simple-modal-description"
//       className="grid place-items-center px-2"
//     >
//       <div className="flex justify-center flex-col w-full h-3/6 sm:w-3/6 sm:h-48 bg-gray-100 rounded-xl outline-none px-4">
//         <p className="mb-4">Create document</p>
//         <form onSubmit={handleSubmit}>
//           <input ref={docNameFieldRef} type="text" placeholder="Provide doc name" className="rounded-md p-2 mb-3 w-full outline-none" />
//           <div className="flex space-x-3 justify-center">
//             <Button onClick={() => setShowModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" type="submit">
//               Create
//             </Button>
//           </div>
//         </form>
//       </div>
//     </Modal>
//   );



//   return (
//     <div className="">
//       <Head>
//         <title>Document Editor</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Header />
      
//       <ModalComponent />

//       <section className="bg-[#F0F3F4] py-5 text-gray-600 px-5">
//         <div className="max-w-6xl mx-auto">
          
//           <div className="flex justify-between items-center mb-3">
//             <p>Start a new document</p>

//             {/* <div className="newDoc-btns flex items-center space-x-2">
//               <Button>
//                 Template gallery
//                 <UnfoldMoreIcon />
//               </Button>
//               <div className="border-l h-7 bg-gray-600 border-gray-300"></div>
//               <IconButton>
//                 <MoreVertIcon />
//               </IconButton>
//             </div> */}
//           </div>

//           <div className="">

//             <div className="">
//               <div onClick={() => setShowModal(true)} className="relative h-52 w-40 border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden">
//                 {/* <Image src={"https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"} layout="fill" /> */}
//               </div>
//               <p className="ml-2 mt-2 text-sm">Blank</p>
//             </div>

//           </div>


//         </div>
//       </section>

//       <section className="py-5 text-gray-600 px-5">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center justify-between pb-5 text-sm">
//             <h2 className="font-medium flex-grow">My Documents</h2>
//             <p className="mr-12">Date created</p>
//             <FolderOpenIcon />
//           </div>

//           {docs?.map(doc => (
//             <DocumentRow
//               key={doc.id}
//               doc={doc}
//             />
//           ))}

//         </div>
//       </section>

//     </div>
//   )
// }

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   return {
//     props: {session}
//   }
// }




























import Head from 'next/head';
import Header from '../components/Header';
import { useEffect, useState, useRef } from 'react';
import Login from '../components/Login';
import { getSession } from 'next-auth/client';
import { Button, IconButton } from '@material-ui/core';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import Modal from '@material-ui/core/Modal';
import db from '../firebase';
import firebase from 'firebase';
import DocumentRow from '../components/DocumentRow';

export default function Home({ session }) {
  const [showModal, setShowModal] = useState(false);
  const [docs, setDocs] = useState([]);
  const docNameFieldRef = useRef(null);
  
  if (!session) return <Login />;

  const docsRef = db
    .collection('userDocs')
    .doc(session?.user.email)
    .collection('docs');

  useEffect(() => {
    const unsub = docsRef
      .orderBy('timestamp', 'desc')
      .onSnapshot(querySnapshot => setDocs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
  
    return unsub;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = docNameFieldRef.current.value;

    if (inputValue) {
      docsRef
        .add({
          fileName: inputValue,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setShowModal(false);
          e.target.reset();
        })
        .catch(err => alert(err));
    }
  };

  const ModalComponent = () => (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className="grid place-items-center px-2"
    >
      <div className="flex justify-center flex-col w-full h-2/3 sm:w-1/2 bg-white rounded-xl outline-none px-8 py-6">
        <p className="mb-4 text-2xl font-bold text-gray-800">Create Document</p>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            ref={docNameFieldRef}
            type="text"
            placeholder="Enter document name"
            className="rounded-md p-3 outline-none border border-gray-300"
          />
          <div className="flex justify-end">
            <Button
              onClick={() => setShowModal(false)}
              className="bg-gray-300 text-gray-700 hover:bg-gray-400"
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit" className="bg-blue-500 hover:bg-blue-600 text-white ml-2">
              Create
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 min-h-screen font-sans text-white">
      <Head>
        <title>Document Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <ModalComponent />

      <section className="bg-gradient-to-r from-[#F0F3F4] via-[#F0F3F4] to-[#F0F3F4] py-10 text-gray-600 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-3">
            <p className="text-2xl font-bold">Start a New Document</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              onClick={() => setShowModal(true)}
              className="relative h-64 bg-white border cursor-pointer hover:border-blue-700 rounded-md overflow-hidden shadow-lg"
            >
         
            </div>
          
          </div>
        </div>
      </section>
{/* <section className="bg-gradient-to-r from-[#4CAF50] via-[#45A46F] to-[#40916C] py-8 text-white px-4">
  <div className="max-w-4xl mx-auto flex items-center justify-between">
    <h2 className="text-2xl font-bold">Start a New Document</h2>

    <button
      onClick={() => setShowModal(true)}
      className="h-12 px-4 bg-[#FF5722] border border-[#D84315] cursor-pointer rounded-full flex items-center justify-center hover:bg-[#D84315] hover:border-[#BF360C] transition duration-300 ease-in-out"
    >
      <div className="absolute inset-0 bg-black opacity-40 rounded-full"></div>
      <p className="text-sm font-bold text-white">Create</p>
    </button>
  </div>
</section> */}

      <section className="py-10 text-gray-800 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between pb-6 text-2xl font-bold">
            <h2 className="flex-grow">My Documents</h2>
            <p className="mr-12 text-lg">Date Created</p>
            <FolderOpenIcon className="text-2xl" />
          </div>

          {docs?.map(doc => (
            <DocumentRow
              key={doc.id}
              doc={doc}
              session = {session}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
