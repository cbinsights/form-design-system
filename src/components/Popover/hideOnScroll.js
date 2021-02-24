const hideOnScroll = (closeOnScrollRef) => ({
  name: 'hideOnEsc',
  defaultValue: true,
  fn({ hide }) {
    if (!closeOnScrollRef) return {};

    function scrollLogic() {
      hide();
      closeOnScrollRef.current.removeEventListener('scroll', scrollLogic);
    }

    return {
      onShow() {
        closeOnScrollRef.current.addEventListener('scroll', scrollLogic);
      },
      onHide() {
        closeOnScrollRef.current.removeEventListener('scroll', scrollLogic);
      },
    };
  },
});

export default hideOnScroll;
