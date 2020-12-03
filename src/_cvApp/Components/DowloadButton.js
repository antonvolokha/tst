import React from 'react';

export const DownloadButton = ({className}) => {
  const download = () => {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.href = `anton_volokha_cv.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button className={`btn ${className}`} onClick={download}><i className="fa fa-download"></i> Download resume</button>
  );
}

export default DownloadButton;

