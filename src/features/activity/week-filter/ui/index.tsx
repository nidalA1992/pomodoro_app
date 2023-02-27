import React from "react";
import Select, { components, DropdownIndicatorProps } from "react-select";

const options = [
  { value: "currentWeek", label: "Эта неделя" },
  { value: "lastWeek", label: "Прошедшая неделя" },
  { value: "twoWeekAgo", label: "2 недели назад" },
];

export const CustomSelect = () => {
  const DropdownIndicator = (props: DropdownIndicatorProps<any, true>) => {
    const { menuIsOpen } = props.selectProps;
    return (
      <components.DropdownIndicator {...props}>
        <svg
          style={{
            transition: "transform 200ms ease-in",
            transform: menuIsOpen ? "rotate(-180deg)" : "",
          }}
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15 1L8 8L1 1" stroke="#B7280F" strokeWidth="2" />
        </svg>
      </components.DropdownIndicator>
    );
  };

  return (
    <Select
      components={{
        Input: () => null,
        DropdownIndicator,
      }}
      defaultValue={options[0]}
      options={options}
      styles={{
        container: (b) => ({
          ...b,
          minWidth: "370px",
        }),
        valueContainer: (b) => ({
          ...b,
          padding: "15px 20px",
        }),
        indicatorSeparator: (b) => ({ display: "none" }),
        indicatorsContainer: (b) => ({
          ...b,
          cursor: "pointer",
          position: "absolute",
          inset: "0",
        }),
        dropdownIndicator: (b, s) => {
          console.log(s);
          return {
            ...b,
            width: "100%",
            height: "100%",
            justifyContent: "end",
            alignItems: "center",
          };
        },
        control: (b, s) => ({
          ...b,
          borderRadius: "none",
          backgroundColor: "#f4f4f4",
          border: "none",
        }),
        menu: (b) => ({
          position: "absolute",
          backgroundColor: "#f4f4f4",
          borderRadius: 0,
          color: "#333333",
          width: "100%",
          filter: "drop-shadow(0px 10px 63px rgba(0, 0, 0, 0.07))",
        }),
        menuList: (b) => ({
          ...b,
          backgroundColor: "#f4f4f4",
          padding: 0,
        }),
        option: (b, s) => {
          if (s.isSelected) {
            return { display: "none" };
          }
          return {
            ...b,
            backgroundColor: s.isSelected
              ? "#c4c4c4"
              : s.isFocused
              ? "#c4c4c4"
              : "transparent",
            color: s.isSelected ? "white" : s.isFocused ? "white" : "#333333",
            borderTop: "1px solid #dedede",
            padding: "15px 20px",
            cursor: "pointer",
            transition: "background-color 200ms ease-in, color 200ms ease-in",
          };
        },
      }}
    />
  );
};
