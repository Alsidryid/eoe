import React from "react";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import style from "./LengSelector.module.css";
import { useEffect } from "react";

const options = [
  { value: "de", label: "De" },
  { value: "en", label: "En" },
  { value: "ru", label: "Ru" },
  { value: "cz", label: "Cz" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "#F7BC3BE5",
    boxShadow: "none",
    cursor: "pointer",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#F7BC3BE5",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#F7BC3BE5",
  }),
  input: (provided) => ({
    ...provided,
    color: "#F7BC3BE5",

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
    backgroundColor: state.isSelected ? "#F7BC3BE5" : "#d3b81f3f",
    color: state.isSelected ? "white" : "#F7BC3BE5",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? "red" : "#F7BC3BE5",
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

  useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (selectedOption) => {
    const language = selectedOption.value;
    i18n.changeLanguage(language);

    localStorage.setItem("i18nextLng", language);
  };

  return (
    <Select
      className={style.select}
      value={options.find((option) => option.value === i18n.language)}
      onChange={changeLanguage}
      options={options}
      styles={customStyles}
      isSearchable={false}
    />
  );
};

export default LangSelector;
