// import React from 'react';
// import { IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import DescriptionIcon from '@material-ui/icons/Description';
// import SearchIcon from '@material-ui/icons/Search';
// import AppsIcon from '@material-ui/icons/Apps';
// import { signOut } from 'next-auth/client';
// import { useSession } from 'next-auth/client';

// const Header = () => {
//   const [session] = useSession();


//   return (
//     <header className="p-2 shadow-md sticky top-0 bg-white z-50">
//       <div className="grid grid-cols-4">

//         <div className="flex items-center col-span-1">
//           <IconButton>
//             <MenuIcon />
//           </IconButton>
//           <div className="text-[#2196f3] items-center space-x-2 ml-3 hidden md:inline-flex">
//             <DescriptionIcon fontSize="large" />
//             <p className="text-xl text-gray-500"></p>
//           </div>
//         </div>
//         <div className="col-span-2">
//           <div className="bg-gray-100 rounded-lg hidden md:inline-flex w-full items-center space-x-1 text-gray-500 focus-within:text-gray-600 focus-within:shadow-md">
//             <IconButton>
//               <SearchIcon />
//             </IconButton>
//             <input type="text" className="flex-grow outline-none bg-transparent" />
//           </div>
//         </div>

//         <div className="flex items-center col-span-1 justify-end space-x-1">
//           <div className="inline-block md:hidden">
//             <IconButton>
//               <SearchIcon />
//             </IconButton>
//           </div>
//           <IconButton>
//             <AppsIcon />
//           </IconButton>
//           <IconButton onClick={signOut}>
//             <img src={session?.user.image} className=" rounded-full h-[24px] w-[24px] " alt="" />
//           </IconButton>
//         </div>

//       </div>
//     </header>
//   );
// }

// export default Header;












import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import { signOut } from 'next-auth/client';
import { useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();

  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">

        <div className="flex items-center space-x-4">
          <IconButton>
            <MenuIcon style={{ color: '#ffffff', fontSize: '28px' }} />
          </IconButton>
          <div className="flex items-center space-x-2">
            <DescriptionIcon style={{ color: '#ffffff', fontSize: '32px' }} />
            {/* <p className="text-2xl font-bold text-white"></p> */}
          </div>
        </div>

        <div className="flex-grow mx-4">
          <div className="bg-white rounded-full hidden md:flex items-center space-x-2 text-gray-600 focus-within:shadow-md">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input type="text" className="flex-grow outline-none bg-transparent text-sm" placeholder="Search..." />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <IconButton>
            <SearchIcon style={{ color: '#ffffff', fontSize: '28px' }} />
          </IconButton>
          <IconButton>
            <AppsIcon style={{ color: '#ffffff', fontSize: '28px' }} />
          </IconButton>
          <IconButton onClick={signOut}>
            <img src={session?.user.image} className="rounded-full h-8 w-8" alt="User" />
          </IconButton>
        </div>

      </div>
    </header>
  );
}

export default Header;





















// import React from 'react';
// import { IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
// import DescriptionIcon from '@material-ui/icons/Description';
// import SearchIcon from '@material-ui/icons/Search';
// import AppsIcon from '@material-ui/icons/Apps';
// import { signOut } from 'next-auth/client';
// import { useSession } from 'next-auth/client';

// const Header = () => {
//   const [session] = useSession();

//   return (
//     <header className="bg-gradient-to-r from-green-400 to-blue-500 p-4 shadow-md sticky top-0 z-50">
//       <div className="flex items-center justify-between max-w-6xl mx-auto">

//         <div className="flex items-center space-x-4">
//           <IconButton>
//             <MenuIcon style={{ color: '#ffffff' }} />
//           </IconButton>
//           <div className="flex items-center space-x-2">
//             <DescriptionIcon style={{ color: '#ffffff', fontSize: '32px' }} />
//             <p className="text-2xl font-bold text-white">Your App Name</p>
//           </div>
//         </div>

//         <div className="flex-grow mx-4">
//           <div className="bg-white rounded-full hidden md:flex items-center space-x-2 text-gray-600 focus-within:shadow-md">
//             <IconButton>
//               <SearchIcon />
//             </IconButton>
//             <input type="text" className="flex-grow outline-none bg-transparent" placeholder="Search..." />
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <IconButton>
//             <SearchIcon style={{ color: '#ffffff' }} />
//           </IconButton>
//           <IconButton>
//             <AppsIcon style={{ color: '#ffffff' }} />
//           </IconButton>
//           <IconButton onClick={signOut}>
//             <img src={session?.user.image} className="rounded-full h-8 w-8" alt="User" />
//           </IconButton>
//         </div>

//       </div>
//     </header>
//   );
// }

// export default Header;

