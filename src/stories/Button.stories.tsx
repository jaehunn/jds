import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "~/components";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Example = Template.bind({});
Example.args = { children: "Testing" };

/** 어떤 컨트롤이 필요할까? */
