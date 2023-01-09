/*!
 * SAP Fiori login - change CSS for language text
 * I834429
*/
document.addEventListener( 'DOMContentLoaded', (event) => {
  const w = "white";
  var lang_txt = document.getElementById("LANGUAGE_LABEL");
  var pwd_txt = document.getElementById("CHANGE_PASSWORD_LINK");
  var cpr_txt = document.getElementsByClassName("loginCopyright");
  var hdr_txt = document.getElementsByClassName("loginLogo");
  lang_txt.style.color = w;
  pwd_txt.style.color = w;
  /* cpr_txt[0].style.color = w;
  for (var i = 0; i < cpr_txt.length; i++) {
    cpr_txt[i].style.color = w;
  };
  console.log(cpr_txt);
  console.log(hdr_txt);
  */

})
