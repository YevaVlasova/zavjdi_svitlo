export const getFormSubmissionCount = (): number => {
  const count = sessionStorage.getItem("formSubmissionCount");
  return count ? parseInt(count, 10) : 0;
};

export const incrementFormSubmissionCount = (): void => {
  const count = getFormSubmissionCount();
  sessionStorage.setItem("formSubmissionCount", (count + 1).toString());
};

export const resetFormSubmissionCount = () => {
  sessionStorage.setItem("formSubmissionCount", "0");
};
