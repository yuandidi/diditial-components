import React, { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Icon from './icon'
import Button from '../Button'

type StoryProps = ComponentProps<typeof Icon>

const meta: Meta<StoryProps> = {
  component: Icon,
  title: 'Icon',
  tags: ['autodocs'],
}

export default meta

type story = StoryObj<StoryProps>

export const ADefaultIcons: story = {
  name: '默认图标',
  args: {
  },
  render: (args) => {
    return <>
      <Icon icon="check" size="3x"/>
      <Icon icon="times" size="3x"/>
      <Icon icon="anchor" size="3x"/>
      <Icon icon="trash" size="3x"/>
      <Button size="lg" btnType="primary"><Icon icon="check"/> check </Button>
    </>
  }
}

export const BThemeIcons: story = {
  name: '不同主题的 Icon',
  args: {
  },
  render: (args) => {
    return <>
      <Icon icon="check" size="3x" theme="success"/>
      <Icon icon="times" size="3x" theme="danger"/>
      <Icon icon="anchor" size="3x" theme="primary"/>
      <Icon icon="exclamation-circle" size="3x" theme="warning" />
    </>
  }
}

export const CCustomIcons: story = {
  name: '更多行为的 Icon',
  args: {
  },
  render: (args) => {
    return <>
      <Icon icon="spinner" size="3x" theme="primary" spin/>
      <Icon icon="spinner" size="3x" theme="success" pulse/>
    </>
  }
}
