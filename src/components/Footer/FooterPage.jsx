import './FooterPage.css';
import './FooterPage.module.css';
import { AwesomeButtonSocial } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

const FooterMain = () => {
  return (
    <footer className="container-fluid">
      <div className="row text-center padding">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h2>Контакти</h2>
          <div className="social padding">
            <p>+38-(099)-99-99-999</p>
            <p>+38-(044)-44-44-444</p>
            <p>official.post@gmail.com</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h2>Графік роботи</h2>
          <div className="social padding">
            <p>Пн-пт: 10:00 - 18:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: вихідний</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h2>Соціальні мережі</h2>
          <div>
            <AwesomeButtonSocial
              className="aws-btn"
              cssModule={AwesomeButtonStyles}
              type="facebook"
              url="https://caferati.me"
            >
              Facebook
            </AwesomeButtonSocial>
            <br />
            <AwesomeButtonSocial
              className="aws-btn"
              cssModule={AwesomeButtonStyles}
              type="instagram"
              url="https://caferati.me"
            >
              Instagram
            </AwesomeButtonSocial>
          </div>
        </div>
      </div>
    </footer>
  );
};
// const ButtonV = () => {
//   return (
//     <AwesomeButtonSocial
//       cssModule={AwesomeButtonStyles}
//       type="facebook"
//       url="https://caferati.me"
//     >
//       Button
//     </AwesomeButtonSocial>
//   );
// };
export default FooterMain;
