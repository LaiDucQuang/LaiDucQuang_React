import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import TheKing from "../../images/hehe.jpg";
import "./Alert.scss";
import { useLocation } from 'react-router';

const Alert = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    
    if (location.pathname === '/') {
      setOpen(true);
    }
  }, [location.pathname]);


  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        open={open}
        onCancel={handleClick}
        footer={[
        ]}
      >
        <p className='modal__content'>Sunday The King Play - Super sale 100%</p>
        <div className='modal__image'>
          <img src={TheKing} alt='sale' />
        </div>
      </Modal>
    </>
  );
};

export default Alert;
