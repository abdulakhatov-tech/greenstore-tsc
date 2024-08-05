// components/FormField.tsx

import { FC } from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { FormFieldPropsI } from "@type/index";

const FormField: FC<FormFieldPropsI> = ({
  labelKey,
  name,
  rules,
  type = "text",
  addonBefore,
  placeholderKey,
}) => {
  const { t } = useTranslation();
  
  return (
    <Form.Item label={t(labelKey)} name={name} rules={rules}>
      <Input
        type={type}
        addonBefore={addonBefore}
        placeholder={placeholderKey ? t(placeholderKey) : undefined}
      />
    </Form.Item>
  );
};

export default FormField;
