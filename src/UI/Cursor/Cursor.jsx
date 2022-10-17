import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Trailer = styled.div`
  height: ${(props) => props.settings.size};
  width: ${(props) => props.settings.size};
  background-color: var(--clr-400);
  border-radius: 100vh;

  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10000;

  pointer-events: none;
  opacity: 0;
  transition: opacity 500ms ease;
  transition: translate 8000ms ease;
  
  transform: ${(props) => props.settings.translate } ${(props) => props.settings.interacting} ;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden; // Hide any overflow from svg


  & svg {
    transform: scale(.8);
  }

  & svg * {
    stroke: var(--clr-100);
  }

  body:hover & {
    opacity: .8;
  }

  body:hover &.interacting {
    opacity: 1;
  }
`

const Cursor = (props) => {

  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 })
  const [interacting, setInteracting] = useState(false)
  const [interactClass, setInteractClass] = useState('')
  const size = 30 // Set size static (if adding animation use scale)

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        // Offset the coords by the size of the custom cursor so the mouse is centered
        x: event.clientX - size / 2,
        y: event.clientY - size / 2
      });

      const interactable = event.target.closest(".interactable");
      const isInteracting = interactable !== null
      setInteracting(isInteracting);
      
      if(isInteracting) {
        setInteractClass(interactable.dataset.type)
      } else {
        setInteractClass('')
      }
    }

    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    }
  }, [])

  // console.log(interacting)

  return (
    <Trailer className={interactClass !== '' ? 'interacting' : ''} settings={
      { 
        translate: `translate(${globalCoords.x}px, ${globalCoords.y}px)`,
        size: size + 'px',
        interacting: `scale(${interacting ? 2 : 1})`
      }} > 
        {/* Display svg based on interactable class */}
        {interactClass === 'button' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-click" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Remove border hardcoded in svg
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
            <line x1="3" y1="12" x2="6" y2="12" />
            <line x1="12" y1="3" x2="12" y2="6" />
            <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
            <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
            <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
            <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
          </svg>
        )}
        {interactClass === 'link' && (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Remove border hardcoded in svg
          <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
          <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
          <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
        </svg>
        )}
        {interactClass === 'input' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-forms" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
            <path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" />
            <path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
            <path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" />
            <path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" />
            <path d="M17 12h.01" />
            <path d="M13 12h.01" />
          </svg>
        )}
        {interactClass === 'download' && (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-download" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Remove border hardcoded in svg
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
            <line x1="12" y1="11" x2="12" y2="17" />
            <polyline points="9 14 12 17 15 14" />
          </svg>
        )}
        {interactClass === "navigation" && (
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-down-up" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Remove border hardcoded in svg
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
            <line x1="17" y1="3" x2="17" y2="21" />
            <path d="M10 18l-3 3l-3 -3" />
            <line x1="7" y1="21" x2="7" y2="3" />
            <path d="M20 6l-3 -3l-3 3" />
          </svg>
        )}
      </Trailer>
  )
}

export default Cursor