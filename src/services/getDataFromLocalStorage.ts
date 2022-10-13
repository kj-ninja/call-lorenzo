export const getDataFromLocalStorage = () => {
  const data = localStorage.getItem('lang');
  if (data) {
    return JSON.parse(data);
  } else {
    return localStorage.setItem('lang', JSON.stringify("pl"))
  }
}
