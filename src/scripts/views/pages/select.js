const Select = {
    async render() {
        return `
        <h1>Select Page</h1>
      `;
    },

    async afterRender() {
        showLoadingSpinner();

        // Code Here

        hideLoadingSpinner();
    },
};

export default Select;