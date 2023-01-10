/*!
 * SAP Fiori login - change CSS for language text
 * I834429
*/
document.addEventListener( 'DOMContentLoaded', (event) => {
  const w = "white";
  var lang_lbl = document.getElementById("LANGUAGE_LABEL")
  var pass_lbl = document.getElementById("CHANGE_PASSWORD_LINK");
  if(lang_lbl) lang_lbl.style.color = w;
  if(pass_lbl) pass_lbl.style.color = w;

})
