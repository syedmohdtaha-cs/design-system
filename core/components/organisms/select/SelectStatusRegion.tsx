import * as React from 'react';
import styles from '@css/components/select.module.css';

const ANNOUNCE_DELAY_MS = 700;

interface SelectStatusRegionProps {
  message: string;
  searchVersion?: number;
}

export const SelectStatusRegion = ({ message, searchVersion }: SelectStatusRegionProps) => {
  const [announced, setAnnounced] = React.useState('');
  const spokenMessage = React.useRef('');
  const alternate = React.useRef(false);

  React.useEffect(() => {
    if (!message) {
      spokenMessage.current = '';
      setAnnounced('');
      return undefined;
    }
    if (spokenMessage.current === message) return undefined;

    const timer = window.setTimeout(() => {
      spokenMessage.current = message;
      alternate.current = !alternate.current;
      setAnnounced(alternate.current ? message : `${message}\u00A0`);
    }, ANNOUNCE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [message, searchVersion]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={styles['Select-srOnly']}
      data-test="DesignSystem-Select-status"
    >
      {announced}
    </div>
  );
};

export default SelectStatusRegion;
