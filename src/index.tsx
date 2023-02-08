import * as React from 'react';
import styles from './index.module.css';

interface ComponentProps {
  /** Title for PhysicalEngine. */
  title: string;
}

export default function PhysicalEngine(props: ComponentProps) {
  const { title = 'Hello World!' } = props;

  return (
    <div className={styles.PhysicalEngine}>{title}</div>
  );
}
