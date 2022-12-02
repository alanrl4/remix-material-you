import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { HelloWorld } from '../index'

export default {
	title: 'M3/HelloWorld',
	component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>

const Template: ComponentStory<typeof HelloWorld> = args => (
	<HelloWorld {...args} />
)

export const Default = Template.bind({})
Default.args = {
	name: 'Alan RL',
}
