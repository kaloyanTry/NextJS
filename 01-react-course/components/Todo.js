import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

// function Todo(props) {
// props are objects: key-value pairs: key=text, value='...'
// props = {text} => passing as atributes from App.js-<Todo text='...' />

function Todo({ text }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteBtnHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{text}</h2>
      {/* <h2>{props.text}</h2> */}
      <div className='actions'>
        <button className='btn' onClick={deleteBtnHandler}>
          Delete
        </button>
        {/* {modalIsOpen ? <Modal /> : null} :the same: */}
        {modalIsOpen && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        )}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </div>
  );
}

export default Todo;
