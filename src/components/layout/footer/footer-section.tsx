import './footer-section.less'

const FooterSection = () => {
  return (
    <footer className="footer">
      <span className="footer__description">
        created by{' '}
        <a
          className="footer__username"
          href="https://github.com/carlosdtn"
          target="_blank"
        >
          carlosdtn
          <img
            src="https://avatars.githubusercontent.com/u/54995804?v=4"
            alt="profile"
            className="footer__avatar"
          />
        </a>
        - devChallenges.io
      </span>
    </footer>
  )
}

export default FooterSection
