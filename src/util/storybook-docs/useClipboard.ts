import { useState } from 'react';

export default (): [string, (s: string) => void] => {
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = (value: string) => {
    // eslint-disable-next-line no-undef
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };
  return [copiedText, copyToClipboard];
};
