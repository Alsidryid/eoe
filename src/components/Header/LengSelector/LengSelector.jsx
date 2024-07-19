import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import style from "./LengSelector.module.css";

const options = [
  { value: "en", label: "En" },
  { value: "ru", label: "Ru" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    borderColor: "#d3b81fe8",
    color: "#d3b81fe8",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#d3b81fe8",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#d3b81fe8",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#d3b81fe8",
  }),
  input: (provided) => ({
    ...provided,
    color: "#d3b81fe8",

    cursor: "default",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: () => ({
    display: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#d3b81fe8" : "#d3b81f3f",
    color: state.isSelected ? "white" : "#d3b81fe8",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? "red" : "#d3b81fe8",
      color: "white",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
};

const LangSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  return (
    <Select
      className={style.select}
      defaultValue={options.find((option) => option.value === i18n.language)}
      onChange={changeLanguage}
      options={options}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default LangSelector;
