const Question3 = {
    async render() {
        return `
        <h1>Question Page 3</h1>
      `;
    },

    async afterRender() {
        showLoadingSpinner();

        // Code Here

        hideLoadingSpinner();
    },
};

export default Question3;