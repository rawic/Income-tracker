import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');
  const el = document.createElement('div');

  useEffect(() => {
    if(portalRoot) {
      portalRoot.appendChild(el);

      return () => { portalRoot.removeChild(el) };
    }
  }, [el, portalRoot]);
  
  return createPortal(children, el);
};

export default Portal;
