
import { FC } from "react";
import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { FormFieldPropsI } from "@type/index";
import Input from "@generic/input";
import { InputT } from "@generic/input/types";

const FormField: FC<FormFieldPropsI> = ({
  labelKey,
  name,
  rules,
  type = "text",
  placeholderKey,
  size='medium',
  dependencies
}) => {
  const { t } = useTranslation();
  
  return (
    <Form.Item dependencies={dependencies} label={labelKey ? t(labelKey) : ''} name={name} rules={rules}>
      <Input
        type={type as InputT}
        placeholder={placeholderKey ? t(placeholderKey) : undefined}
        size={size}
      />
    </Form.Item>
  );
};

export default FormField;
