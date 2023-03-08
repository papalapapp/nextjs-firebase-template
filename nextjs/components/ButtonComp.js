import React from "react";

function ButtonComp({
  variant,
  label,
  icon = null,
  iconPosition = "left",
  clickhandler,
}) {
  const btnVariant = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-blue-100 text-blue-600",
    tertiare: "bg-white text-blue-600 border border-blue-600",
  };

  return (
    <button
      className={`${btnVariant[variant]} rounded-lg py-2 px-4 flex`}
      onClick={clickhandler}
    >
      {iconPosition === "left" && icon && <>{icon}</>}
      {label}
      {iconPosition === "right" && icon && <>{icon}</>}
    </button>
  );
}

export default ButtonComp;
