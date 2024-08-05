import '../styles/Header.css';

function Header () {
    return (
      <div className="About">
        <header className="header">
        <div className="header__wrapper">
          <div className="header__down">
              <div className="header__title">
                  <h2>Шаблон <span>– Залог успеха</span></h2>
              </div>
              <p className="header__title-subtitle__line"></p>
              <div className="header__subtitle">
                  <p>Пример оформления компонента</p>
              </div>
          </div>
          <div className="header__button-play-game">
              <a className="button-play-game" href="../main-game-page/index.html">Получить</a>
          </div>
        </div>
    </header>
      </div>
    );
  }
  
  export default Header;