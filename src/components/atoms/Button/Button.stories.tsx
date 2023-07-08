import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: "primary",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    color: "secondary",
    children: "Button",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};
export const medium: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};
export const Small: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};
