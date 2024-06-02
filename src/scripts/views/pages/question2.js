const Question2 = {
    async render() {
        return `
        <h1>Question Page 2</h1>
      `;
    },

    async afterRender() {
        showLoadingSpinner();

        // Code Here

        hideLoadingSpinner();
    },
};

export default Question2;