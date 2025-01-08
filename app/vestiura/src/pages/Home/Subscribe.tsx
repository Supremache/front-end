"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordionContent } from "@/constants";

// Schema validation for email
const FormSchema = z.object({
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .nonempty({ message: "Email is required." }),
});

const Subscribe = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted with:", data); // Debug log
    toast({
      title: "Subscription Successful! 🎉",
      //description: `You've successfully subscribed with email: ${data.email}`,
      description: (
        <pre className="mt-2 w-full rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    form.reset();
  }

  return (
    <div className="relative container h-full w-full mx-auto flex flex-col">
      <div className="relative flex flex-col md:flex-row items-center md:items-end justify-between md:space-x-6 overflow-hidden">
        {/* Image Section */}
        <img
          src="./images/accordion.png"
          alt="FAQ Illustration"
          className="absolute md:relative w-full md:w-1/2 max-w-[440px] object-contain md:left-0 md:top-20 mx-auto left-1/2 top-16 -translate-x-1/2 md:translate-x-0 -z-10"
        />

        {/* Accordion Section */}
        <Accordion
          type="single"
          collapsible
          className="relative z-10 w-full max-w-lg md:max-w-xl  rounded-lg backdrop-filter backdrop-blur-md"
        >
          {accordionContent.map((content, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-2 border border-border rounded-t-lg"
            >
              <AccordionTrigger className="bg-muted hover:bg-muted/50 transition-colors rounded-t-lg p-2 font-semibold">
                {content.question}
              </AccordionTrigger>
              <AccordionContent className="rounded-b-lg p-2 text-sm text-muted-foreground">
                {content.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Newsletter Section */}
      <div className="bg-muted h-auto w-full mx-auto flex flex-col md:flex-row items-center justify-between overflow-hidden space-y-6 md:space-y-0 md:space-x-6 rounded-xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, (errors) => {
              console.log("Validation errors:", errors);
            })}
            className="container max-w-xl order-1 p-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="space-y-2">
                      <h4 className="h4 leading-tight font-bold">
                        Subscribe to our Newsletter!
                      </h4>
                      <p className="body-2 leading-tight text-muted-foreground">
                        Stay updated with the latest news, trends, and exclusive
                        offers directly in your inbox.
                      </p>
                    </div>
                  </FormLabel>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 input-field bg-background"
                      />
                    </FormControl>
                    <Button type="submit" className="flex-shrink-0">
                      Subscribe
                    </Button>
                  </div>
                  <FormDescription>
                    We'll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <img
          src="./images/subscribe.png"
          alt="Subscribe Illustration"
          className="order-2 h-full max-h-[400px] object-contain mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default Subscribe;
