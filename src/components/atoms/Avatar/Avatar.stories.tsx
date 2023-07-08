import type { Meta, StoryObj } from '@storybook/react';

import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
    title: 'atoms/Avatar',
    component: Avatar
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        
    }
};

export const ImgProfile: Story = {
    args: {
        
    }
};
