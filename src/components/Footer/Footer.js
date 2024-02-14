import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <div className={classes.footer}>
      {/* stash 0 */}
      {/* <p className="mb-0 mt-1">Если хотите со мной связаться:</p> */}
      <a href="https://github.com/tymphoto" className={classes.footerLink}>Артем Тимошенко</a>
      <p>Test commit</p>
    </div>
  );
}

export default Footer;
