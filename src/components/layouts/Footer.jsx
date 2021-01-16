import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const Footer = () => {
  return (
    <footer>
      <div className='row text-center'>
        <div className='col-12'>
          <a
            href='https://www.linkedin.com/in/nejcrogelsek'
            target='_blank'
            alt='linkedIn'>
            <LinkedInIcon />
          </a>
          <a
            href='https://github.com/nejcrogelsek'
            target='_blank'
            alt='GitHub'>
            <GitHubIcon />
          </a>
          <a href='#' target='_blank' alt='Resume'>
            <InsertDriveFileIcon />
          </a>
        </div>
        <div className='col-12'>
          <p>Copyright - 2021 Nejc Rogelšek, All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
