export const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_NETWORK: "ERROR GETTING THE INFORMATION, PLACE TRY LATER!!",
    ERR_BAD_REQUEST: "YOUR USER OR PASSWORD ARE INCORRECT, TRY AGAIN!!",
  };

  return codeMatcher[errorCode];
};
