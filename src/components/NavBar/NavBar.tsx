import React from 'react';

type NavElement = {
  label: string;
  href: string;
};

type NavProps = {
  links: NavElement[] | NavElement;
};

export const NavBar: React.FC<NavProps> = () => {
  return (
    <div className='flex flex-row'>
      <div>Logo</div>
      <div>Lista Menu</div>
    </div>
  );
};
