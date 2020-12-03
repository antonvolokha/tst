import React from 'react';

export const Section = ({id, className,children}) => (
  <section className={`section ${className}`} id={id}>
    {children}
  </section>
);