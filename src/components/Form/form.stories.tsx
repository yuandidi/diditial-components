/* eslint-disable jsx-a11y/anchor-is-valid */
import { ComponentProps } from "react";
import Form from "./form";
import { Meta, StoryObj } from "@storybook/react/*";
import FormItem from "./formItem";
import Input from "../Input/input";
import Button from "../Button/button";

type StoryProps = ComponentProps<typeof Form>

const meta: Meta<StoryProps> = {
  component: Form,
  title: "Form",
  tags: ['autodocs'],
  decorators: [(story) => <div style={{width: '50%', margin: '0 auto'}}>{story()}</div>]
}
export default meta;

type Story = StoryObj<StoryProps>

export const DefaultForm: Story = {
  args: {
    initialValues: {username: 'viking', agreement: true}
  },
  render: (args) => {
    return <Form {...args}>
      <FormItem label="用户名" name="username" rules={[{type: 'email', required: true}]}>
        <Input />
      </FormItem>
      <FormItem label="密码" name="password" rules={[{type: 'string', required: true, min: 3, max: 8}]}>
        <Input />
      </FormItem>
      <div className='agreement-section' style={{ 'display': 'flex', 'justifyContent': 'center'}}>
        <FormItem name="agreement" valuePropName="checked" getValueFromEvent={(e) => e.target.checked}>
          <input type="checkbox"/>
        </FormItem>
        <span className="agree-text">注册即代表你同意<a href='#'>用户协议</a></span>
      </div>
      <div className='viking-form-submit-area'>
        <Button type="submit" btnType="primary">登录</Button>
      </div>
    </Form>
  }
}
