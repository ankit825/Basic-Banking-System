import React from 'react';
import Footer from './Footer/Footer';
import Search from './Search/Search';
import NavbarCreate from './Navbar/NavbarCreate';

const UserSearch = () => {
  return (
    <div>
      <NavbarCreate />
      <Search />
      <Footer />
    </div>
  );
};

export default UserSearch;
