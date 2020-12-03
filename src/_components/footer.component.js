import React from 'react';

export function Footer() {
    return (
        <div className="footer">
            <div className="text-center">
                {process.env.REACT_APP_FOOTER_MESSAGE}
            </div>
        </div>
    );
}