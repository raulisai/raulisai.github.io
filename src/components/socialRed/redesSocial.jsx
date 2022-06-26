import "./redesSocial.scss";


export default function redesSociales() {

    let urlGit="https://github.com/raulisai";
    let urlLinke="https://www.linkedin.com/in/raul-isai-monroy-romero-39b58a167/";
    let urlInst="https://www.instagram.com/raulisaimonroy/";
    let urlBlog="http://www.facebook.com/";
    let urlMail="mailto:raulisai97@gmail.com";
    let iconLinkeL="assets/linkedin.png";
    let iconInst="assets/png-inst-logo.png";
    let iconBlog="assets/Blog.png";
    let iconMail="assets/mail-icon.png";
    let iconGit="assets/git-icon.png";


  return (   
    <div className="social">
  <ul>
      <li><a href={urlGit} target="_blank" className="icon-git"><img className="Icon-img-facebook" src={iconGit  }></img></a></li>
      <li><a href={urlLinke} target="_blank" className="icon-linke"><img className="Icon-img-facebook" src={iconLinkeL}></img></a></li>
      <li><a href={urlInst} target="_blank" className="icon-inst"><img className="Icon-img-facebook" src={iconInst}></img></a></li>
      <li><a href={urlBlog} target="_blank" className="icon-blog"><img className="Icon-img-facebook" src={iconBlog}></img></a></li>
      <li><a href={urlMail} target="_blank" className="icon-mail"><img className="Icon-img-facebook" src={iconMail}></img></a></li>
  </ul>
</div>)


}