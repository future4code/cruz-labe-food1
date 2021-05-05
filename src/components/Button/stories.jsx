import Button from ".";

export default {
  title: "Button Padrao",
  component: Button,
};

export const Padrao = (...args) => <Button {...args}>{args.children}</Button>;
