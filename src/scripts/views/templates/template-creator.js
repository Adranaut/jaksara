import CONFIG from "../../globals/config";

const showLoadingSpinner = () => {
  document.getElementById("loadingSpinner").style.display = "block";
};

const hideLoadingSpinner = () => {
  document.getElementById("loadingSpinner").style.display = "none";
};

export { showLoadingSpinner, hideLoadingSpinner };
