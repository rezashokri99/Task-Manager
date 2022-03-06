import React, { useRef, useState } from "react";
import "./SearchInput.css";
import { MdClear } from "react-icons/md";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  var inputFocus = useRef();
  var btnDelete = useRef();
  var inputField = useRef();

  const clearHandler = (e) => {
    e.preventDefault();
    setInputValue("");
    inputFocus.current.classList.remove("isFocus");
  };

  const focusHandler = (e) => {
    inputFocus.current.style.width = "100%";
    if (inputFocus.current.id.includes(e.target.id)) {
      inputFocus.current.classList.add("isFocus");
    } else {
      inputFocus.current.classList.remove("isFocus");
    }
  };

  const blurHandler = () => {
    inputFocus.current.style.width = "10px";
    inputFocus.current.classList.remove("isFocus");
  }


  return (
    <div className="s128">
      <form  autoComplete="off">
        <div className="inner-form">
          <div className="row">
            <div ref={inputField} className="input-field first" id="first">
              <input
                ref={inputFocus}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={blurHandler}
                onClick={focusHandler}
                className="input"
                id="inputFocus"
                type="text"
                placeholder="Search"
              />
              <button ref={btnDelete} className="clear" id="clear">
                <MdClear onClick={clearHandler} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;
