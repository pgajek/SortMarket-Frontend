export const checkValidity = (name, regex) => {
  if (name !== "") {
    if (regex.test(name)) return true;
    else return false;
  } else return false;
};
