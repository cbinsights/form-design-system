import { useState } from 'react';

export default () => {
  const [copiedText, setCopiedText] = useState('');
  const copyToClipboard = (value) => {
    // eslint-disable-next-line no-undef
    window.navigator.clipboard.writeText(value);
    setCopiedText(value);
    setTimeout(() => setCopiedText(''), 2000);
  };
  return [copiedText, copyToClipboard];
};
