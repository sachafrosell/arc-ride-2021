/*eslint-disable*/
import React from "react";
import { isMobile } from 'react-device-detect';

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <>

    {!isMobile ?
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.arcgroupglobal.com/"
                  target="_blank"
                >
                  Arc Group Global Ltd.
                </a>
              </li>

            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://jschiazza.dunked.com/"
              target="_blank"
            >
              Jess Schiazza
            </a>
            . Coded by{" "}
            <a
              href="https://github.com/sachafrosell"
              target="_blank"
            >
              Sacha Frosell
            </a>
            .
          </div>
        </Container>
      </footer>
      :
      <footer className="footer" data-background-color="black">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.arcgroupglobal.com/"
                  target="_blank"
                >
                  Arc Group Global Ltd.
                </a>
              </li>

            </ul>
          </nav>

        </Container>
      </footer>
    }
    </>

  );
}

export default DarkFooter;
