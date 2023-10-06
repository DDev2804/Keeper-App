function Footer() {
    let dt = new Date();
  let date = dt.getFullYear();
    
    return<footer>
        <p id="footer">Copyright <i className="fa fa-copyright"></i> {date}</p>
    </footer>
}

export default Footer;