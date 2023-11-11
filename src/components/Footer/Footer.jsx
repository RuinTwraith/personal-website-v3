import './footer.scss'

const Header = () => {
  return (
    <footer className="footer full-width">
      <div className="footer__container">
        <div className="footer__left">
          <h3 className="footer__heading">Say Hi! 👋</h3>
          <p className="footer__phone">
            <a
              href="tel:+918447294960"
              rel="noreferrer"
              className="footer__phone--link"
            >
              +91-(8447-294960)
            </a>
          </p>
          <p className="footer__email">
            <a
              href="mailto:dibbenduk@gmail.com"
              className="footer__email--link"
              target="_blank"
              rel="noreferrer"
            >
              dibbenduk@gmail.com
            </a>
          </p>
        </div>
        <div className="footer__right">
          <p className="footer__designed-by">Copyright©️</p>
          <p className="footer__credit">Dibbendu Koley</p>
        </div>
      </div>
    </footer>
  )
}

export default Header
