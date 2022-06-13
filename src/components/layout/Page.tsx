import React from 'react';
import styles from './Page.module.css';

export default function Page({ children }: { children: JSX.Element[] }) {
	return <div className={styles.Page}>{children}</div>;
}
