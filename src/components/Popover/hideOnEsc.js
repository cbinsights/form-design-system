const hideOnEscFunc = (callback) => ({
  name: 'hideOnEsc',
  defaultValue: true,
  fn(props) {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        if (callback) {
          callback();
        } else {
          props.hide();
        }
      }
    }

    return {
      onShow() {
        document.addEventListener('keydown', onKeyDown);
      },
      onHide() {
        document.removeEventListener('keydown', onKeyDown);
      },
    };
  },
});

export default hideOnEscFunc;
