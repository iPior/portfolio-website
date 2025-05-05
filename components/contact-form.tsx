"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { sendEmailPayload } from "@/lib/actions"

import { toast } from "sonner"
import { formSchema } from "@/lib/schemas"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form  = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })
  const { reset } = form

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    try {
      await sendEmailPayload(data)
      toast("Message sent!")
      reset()
    } catch (error) {
      toast("Something went wrong.")
      console.error("Error sending email:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4 flex flex-col justify-between">

        <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                      <Input placeholder="your@email.com" {...field} className="bg-background" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Subject</FormLabel>
                <FormControl>
                    <Input placeholder="Event in a Few Weeks" {...field} className="bg-background"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Message</FormLabel>
                <FormControl>
                    <Textarea id="message" placeholder="Your message here..." className="min-h-[200px] bg-background" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full sm:w-36 p-2" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
      </form>
    </Form>
  )
}