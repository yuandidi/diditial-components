import { ComponentProps } from "react";
import Select from "./select";
import Option from "./option";
import { Meta, StoryObj } from "@storybook/react/*";

type StoryProps = ComponentProps<typeof Select>;

const meta: Meta<StoryProps> = {
  component: Select,
  title: "Select",
  tags: ['autodocs'],
}

export default meta;

type Story = StoryObj<StoryProps>

export const DefaultSelect: Story = {
  name: '默认select',
  args: {
    multiple: false,
  },
  render: (args) => (
    <Select {...args}>
      <Option value="1" label="Option 1"/>
      <Option value="2" label="Option 2"/>
      <Option value="3" label="Option 3" disabled={true}/>
      <Option value="4" label="Option 4"/>
    </Select>
  )
}

export const MultipleSelect: Story = {
  name: '多选select',
  args: {
    multiple: true,
    onChange: (value: string, values: string[]) => {
      console.log(value, values)
    }
  },
  render: (args) => (
    <Select {...args}>
      <Option value="1" label="Option 1"/>
      <Option value="2" label="Option 2"/>
      <Option value="3" label="Option 3"/>
    </Select>
  )
}

export const DisabledSelect: Story = {
  name: '禁用的select',
  args: {
    disabled: true,
    placeholder: '禁用'
  },
  render: (args) => (
    <Select {...args}>
      <Option value="1" label="Option 1"/>
      <Option value="2" label="Option 2"/>
      <Option value="3" label="Option 3"/>
    </Select>
  )
}