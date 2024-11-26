import React from "react";
import { ComponentProps } from "react";
import AutoComplete from "./autoComplete";
import { DataSourceType } from "./autoComplete";
import { Meta, StoryObj } from "@storybook/react";

type StoryProps = ComponentProps<typeof AutoComplete>;
const meta: Meta<StoryProps> = {
  component: AutoComplete,
  title: "autocomplete",
  tags: ['autodocs'],
} 

export default meta;

type Story = StoryObj<StoryProps>
interface LakerPlayerProps {
  value: string;
  number: number;
}
const lakersWithNumber = [
  { value: 'bradley', number: 11 },
  { value: 'pope', number: 1 },
  { value: 'caruso', number: 4 },
  { value: 'cook', number: 2 },
  { value: 'cousins', number: 15 },
  { value: 'james', number: 23 },
  { value: 'AD', number: 3 },
  { value: 'green', number: 14 },
  { value: 'howard', number: 39 },
  { value: 'kuzma', number: 0 },
]
// 

const handleFetch = (query: string) => {
  return lakersWithNumber.filter(player => player.value.includes(query))
}
const renderOption = (item: DataSourceType) => {
  const itemWithLakers = item as DataSourceType<LakerPlayerProps>
  return (
    <div>
      <h2>Name: {itemWithLakers.value}</h2>
      <p>Number: {itemWithLakers.number}</p>
    </div>
  )
}
const onSelect = (item: DataSourceType) => {
  console.log(item)
}

export const DefaultAutoComplete: Story = {
  args: {
  },
  render: (args) => {
    return <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={onSelect}
        renderOption={renderOption}
        />
  },
}
