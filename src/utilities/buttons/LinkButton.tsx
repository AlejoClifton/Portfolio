import Link from 'next/link';
import React, { ReactNode } from 'react';
import style from './linkButton.module.css';

const LinkButton = ({ children, url, type = '_self' }: { children: ReactNode; url: string; type?: '_self' | '_blank' }) => {
    return (
        <Link href={url} target={type} className={`dFlexRowDefault fGap ${style.linkButton}`}>
            {children}
        </Link>
    );
};

export default LinkButton;
