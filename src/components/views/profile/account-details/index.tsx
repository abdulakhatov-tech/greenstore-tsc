import { useTranslation } from "react-i18next";
import { Form, Upload } from "antd";
import Cookies from "js-cookie";

import { UploadOutlined } from "@ant-design/icons";

import Button from "@generic/button";
import FormField from "@generic/form-field";
import Typography from "@generic/typography";
import useAccountDetailsFeatures from "./features";
import useFormRules from "@utils/form";

const AccountDetailsComponent: React.FC = () => {
  const { t } = useTranslation();
  const { accountDetailsFormRules } = useFormRules();
  const { form, onFinish, loading, user } = useAccountDetailsFeatures();


  return (
    <div>
      <Typography size='h4' className='font-medium mb-5'>
        {t("profile.personal_info")}
      </Typography>
      <Form layout={"vertical"} form={form} onFinish={onFinish}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-[0px_16px]'>
          <FormField
            name='name'
            labelKey='form.first_name'
            rules={accountDetailsFormRules.name || []}
            placeholderKey='form.first_name'
          />
          <FormField
            name='surname'
            labelKey='form.last_name'
            rules={accountDetailsFormRules.surname || []}
            placeholderKey='form.last_name'
          />
          <FormField
            name='email'
            type='email'
            labelKey='form.email'
            rules={accountDetailsFormRules.email || []}
            placeholderKey='form.email'
          />
          <FormField
            name='phone_number'
            labelKey='form.phone'
            rules={accountDetailsFormRules.phone_number || []}
            placeholderKey='form.phone'
          />
          <FormField
            name='username'
            labelKey='form.username'
            rules={accountDetailsFormRules.username || []}
            placeholderKey='form.username'
          />

          <Form.Item
            label='Photo'
            name='profile_photo'
            rules={accountDetailsFormRules.profile_photo || []}
          >
            <Upload
              name='image'
              action={
                "http://localhost:8080/api/upload?access_token=64bebc1e2c6d3f056a8c85b7"
              }
              listType='picture'
              data={{ type: "img" }}
              headers={{
                Authorization: `Bearer ${
                  Cookies.get("token") ?? localStorage.getItem("token")
                }`,
              }}
              accept='.png,.jpg,.jpeg'
            >
              <div className="flex items-center gap-4">
              {user?.profile_photo && (
                <img
                  src={user?.profile_photo}
                  alt='avatar'
                  className="w-14 h-14 rounded-[50%] object-cover"
                />
              ) }
                <Button>
                  <UploadOutlined /> Upload
                </Button>
              </div>
              
            </Upload>
          </Form.Item>
        </div>

        <Button
          variant='primary'
          type='submit'
          loading={loading}
          disabled={loading}
        >
          {t("form.save_changes")}
        </Button>
      </Form>
    </div>
  );
};

export default AccountDetailsComponent;
