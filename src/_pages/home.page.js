import React, { useEffect, useState } from 'react';
import CVSections from '../_cvApp/CVSections';

export const HOME_ROUTE = '/';

export const CV = ({info}) => {

  const [links, setLinks] = useState([]);

  useEffect(() => {
    let tmp = [];
    Object.keys(info).forEach(key => {
      tmp.push(key);
    });

    setLinks(tmp);
  }, []);

  return (
    <div>
      {links.map(page => <CVSections key={page} id={page} data={info[page]} />)}
    </div>
  );
}