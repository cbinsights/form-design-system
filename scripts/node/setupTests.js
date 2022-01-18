import '@testing-library/jest-dom/extend-expect';

// Shimming window.scroll for 3rd party libraries
window.scroll = () => {};
