import type { Meta, StoryObj } from '@storybook/react';

import Subtitle from "./Subtitle";

const meta: Meta<typeof Subtitle> = {
    title: 'atoms/Subtitle',
    component: Subtitle
};

export default meta;

type Story = StoryObj<typeof Subtitle>;

export const Default: Story = {
    args: {

    }
};
