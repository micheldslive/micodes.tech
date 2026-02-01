'use client';

import React, { ComponentProps } from 'react';

import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Tooltip } from '../Tooltip';

export type SelectOption = {
  value: string;
  label: string;
  icon?: React.ReactNode;
};

export type SelectProps = Omit<ComponentProps<'input'>, 'ref' | 'onChange'> & {
  options: SelectOption[];
  handleChange(value: string): void;
  label?: string;
};

export const Select = ({ label, options, handleChange, value }: SelectProps) => {
  const option = options.find((option) => option.value === value);
  const trigger = option?.icon ?? option?.label;
  return (
    <Tooltip.Root>
      <Dropdown.Root modal={false}>
        <Dropdown.Trigger asChild>
          <Tooltip.Trigger asChild>
            {trigger && (
              <Button variant="transparent" size="icon" className="cursor-hover">
                {trigger}
                <span className="sr-only">{label}</span>
              </Button>
            )}
          </Tooltip.Trigger>
        </Dropdown.Trigger>
        <Dropdown.Content align="start">
          {options.map(({ value, label, icon }) => (
            <Dropdown.Item
              key={value}
              onClick={() => handleChange(value)}
              className="flex cursor-pointer items-center gap-2 capitalize"
            >
              {icon}
              {label}
            </Dropdown.Item>
          ))}
        </Dropdown.Content>
      </Dropdown.Root>
      {label && (
        <Tooltip.Content side={'bottom'} sideOffset={4}>
          <span>{label}</span>
        </Tooltip.Content>
      )}
    </Tooltip.Root>
  );
};
