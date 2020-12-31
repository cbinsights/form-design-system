const triggerHelper = (triggerType, isOpen) => {
  // https://atomiks.github.io/tippyjs/v6/all-props/#trigger
  // We'd like hover to semantically map to mouseenter + focus
  const triggerMapping = {
    click: 'click',
    hover: 'mouseenter focus',
  };
  /* Tippy will throw a warning if you attempt to pass a trigger when
     isOpen is passed. This will avoid showing that warning. */
  return isOpen !== undefined ? undefined : triggerMapping[triggerType];
};

export default triggerHelper;
