import { useRef } from 'react';

function EventsSearch(props) {
  const refYearInput = useRef();
  const refMonthInput = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const selectedYear = refYearInput.current.value;
    const selectedMonth = refMonthInput.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <div>
            <label htmlFor='year'>Year</label>
            <select id='year' ref={refYearInput}>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
            </select>
          </div>
          <div>
            <label htmlFor='month'>Month</label>
            <select id='month' ref={refMonthInput}>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
          </div>
        </div>
        <button>Find Events</button>
      </form>
    </>
  );
}

export default EventsSearch;
