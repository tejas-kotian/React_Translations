import React from "react";
import { useTranslation } from "react-i18next";
import "./translations/i18n";

export const ExampleComponent = (props) => {
  const { t } = useTranslation();
  let lng = props.lang;
  return (
    <div>
      <div style={{ textAlign: lng === "arab" ? "right" : "left" }}>
        <p>
          <p>{t("welcome")}</p>
          <p>
            
            {t("keyWithCount", { count: 3 })}
          </p>
          <p>
            
            {t("keyWithCount", { count: 1 })}
          </p>
          <p>{t("number_format", { number: 35000 })}</p>
        </p>
      </div>
    </div>
  );
};