import { Control, FieldValues, Path } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

import React from "react";

type CustomFormFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
};

export function CustomFormFiled<T extends FieldValues>({
  name,
  control,
}: CustomFormFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormSelect<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  items: string[];
  labelText?: string;
};

export function CustomFormSelect<T extends FieldValues>({
  name,
  control,
  items,
  labelText,
}: CustomFormSelect<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className="capitalize">{labelText || name}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {items.map((item) => {
                  return (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
