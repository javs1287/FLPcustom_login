/*!
 * SAP Fiori login - change color of language and change password texts in logon page
 * I834429
*/
document.addEventListener( 'DOMContentLoaded', (event) => {
  const w = "white";
  document.getElementById("LANGUAGE_LABEL").style.color = w;
  document.getElementById("CHANGE_PASSWORD_LINK").style.color = w;

})
