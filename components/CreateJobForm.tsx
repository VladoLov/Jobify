"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { CustomFormFiled, CustomFormSelect } from "./FormComponentsFile";
import {
  createAndEditJobSchema,
  CreateAndEditJobType,
  JobMode,
  JobStatus,
} from "@/app/utils/types";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJobAction } from "@/app/utils/actions";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

/* const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
}); */

const CreateJobForm = () => {
  // 1. Define your form.
  const form = useForm<CreateAndEditJobType>({
    resolver: zodResolver(createAndEditJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  //4. creat query client
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: (values: CreateAndEditJobType) => createJobAction(values),
    onSuccess: (data) => {
      if (!data) {
        toast({ description: "there was an error" });
        return;
      }
      toast({ description: "job created" });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
      queryClient.invalidateQueries({ queryKey: ["stats"] });
      queryClient.invalidateQueries({ queryKey: ["charts"] });

      form.reset();
      router.push("/jobs");
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: CreateAndEditJobType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);

    //4. now instead cl(values) we use mutate
    mutate(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted p-8 rounded"
      >
        <h2 className="capitalize font-semibold text-4xl mb-6">add job</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-start">
          {/**position */}
          <CustomFormFiled name="position" control={form.control} />
          {/**company */}
          <CustomFormFiled name="company" control={form.control} />
          {/**location */}
          <CustomFormFiled name="location" control={form.control} />
          {/**Job status */}
          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />
          {/**Job mode */}
          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="job mode"
            items={Object.values(JobMode)}
          />

          <Button
            type="submit"
            className="self-end capitalize"
            disabled={isPending}
          >
            {isPending ? "loading" : "Create Job"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CreateJobForm;
