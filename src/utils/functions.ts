// export const openNewWindow = (url:string) => {
//   window.open(url, "_blank");
// }


export const openNewWindow = (url:string) => {
  // Check if the URL starts with http:// or https://
  if (!/^https?:\/\//i.test(url)) {
    // If not, assume it's an external URL and prepend with https://
    url = 'https://' + url;
  }
  window.open(url, "_blank");
};
