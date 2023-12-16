// import { signIn } from 'next-auth/client';
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center">
//       <div className="overflow-hidden w-40 h-auto mb-4">
//         <img className="object-cover" src="https://guruinfomedia.com/wp-content/uploads/2018/10/texteditor.png" alt="" />
//         {/* <FontAwesomeIcon icon={faFile} /> */}
//       </div>
//       <button onClick={signIn} className="py-2 w-44 shadow-md hover:animate-pulse text-gray-100 rounded-md bg-[#2196f3]">Sign In </button>
//     </div>
//   );
// }

// export default Login;





// import { signIn } from 'next-auth/client';
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500">
//       <div className="overflow-hidden w-40 h-auto mb-4 rounded-lg shadow-lg">
//         <img className="object-cover" src="https://guruinfomedia.com/wp-content/uploads/2018/10/texteditor.png" alt="" />
//       </div>
//       <button onClick={signIn} className="py-2 px-4 w-44 text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring focus:border-blue-300 shadow-md">Sign In</button>
//     </div>
//   );
// }

// export default Login;


import { signIn } from 'next-auth/client';
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-300 to-purple-500">
      <div className="overflow-hidden w-48 h-auto mb-8 rounded-full shadow-lg">
        <img className="object-cover" src="https://guruinfomedia.com/wp-content/uploads/2018/10/texteditor.png" alt="" />
      </div>
      <button
        onClick={signIn}
        className="py-3 px-6 w-48 text-white rounded-md bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 focus:outline-none focus:ring focus:border-purple-300 shadow-lg"
      >
        Sign In
      </button>
    </div>
  );
}

export default Login;


