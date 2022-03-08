import React, { useRef } from "react";
import "./SearchInput.css";
import { MdClear } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = ({searchValue, setSearchValue}) => {


  const navigate = useNavigate();
  const pathLocation = useLocation().pathname;


  var inputFocus = useRef();
  var btnDelete = useRef();
  var inputField = useRef();

  const clearHandler = (e) => {
    e.preventDefault();
    setSearchValue("");

    inputFocus.current.style.width = "10px";
    inputFocus.current.classList.remove("isFocus");
    navigate("/taskmanager");
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
    if (pathLocation !== "/searchitems") {
      inputFocus.current.style.width = "10px";
      inputFocus.current.classList.remove("isFocus");
    }
  }

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
    navigate("/searchitems");
  }


  return (
    <div className="s128">
      <form  autoComplete="off">
        <div className="inner-form">
          <div className="row">
            <div ref={inputField} className="input-field first" id="first">
              <input
                ref={inputFocus}
                value={searchValue}
                onChange={changeHandler}
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
