function Modal({ onCancel, onConfirm }) {
  // function closeModalHandler() {
  //   onCancel();
  // }
  // function confirmModalHandler() {
  //   onConfirm();
  // }

  return (
    <div className='modal'>
      <p>Are you sure?</p>
      <button className='btn btn--alt' onClick={onCancel}>
        {/* <button className='btn btn--alt' onClick={closeModalHandler}> */}
        Cancel
      </button>
      <button className='btn' onClick={onConfirm}>
        {/* <button className='btn' onClick={confirmModalHandler}> */}
        Confirm
      </button>
    </div>
  );
}

export default Modal;
