import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  width: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  position: relative;
  z-index: 10;
  width: 100%;
  @media (min-width: 500px) {
    border-radius: 10px;
  }
`;
const MenuModal = ({
  title,
  description,
  website,
  github,
  technologies,
  url,
  showModal,
  setShowModal,
}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-10%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div className='projectModal-animation' style={animation}>
            <ModalWrapper showModal={showModal}>
              <div className='content-modal'>
                <div className='m-header text-center'>
                  <h5>{title}</h5>
                  <CloseIcon
                    aria-label='Close modal'
                    onClick={() => setShowModal(!showModal)}
                  />
                </div>
                <div className='m-body'>
                  <img
                    src={url}
                    alt='Napaka s povezavo. Ni mogoče naložiti slike.'
                  />
                  <div className='m-body-content'>
                    <h4>Technologies I used for this project:</h4>
                    <ul className='m-technologies-list'>
                      {technologies.map((technology) => (
                        <li>{technology}</li>
                      ))}
                    </ul>
                    <p>{description}</p>
                    <a
                      href={website}
                      target='_blank'
                      className='m-button linkBtn'>
                      Visit website
                    </a>
                    <a
                      href={github}
                      target='_blank'
                      className='m-button linkBtn'>
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default MenuModal;
