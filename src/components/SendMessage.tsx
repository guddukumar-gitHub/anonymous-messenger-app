import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { messageSchemaValidation } from "@/schemas/messageSchema";
import { ApiResponse } from "@/types/ApiResponse";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { Router } from "next/router";
import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export function MessageBox() {
    const [message, setMessage] = useState("")
  const form = useForm<z.infer<typeof messageSchemaValidation>>({
    resolver: zodResolver(messageSchemaValidation),
    defaultValues: { content: "" },
  });

  const onSubmit = async (data: z.infer<typeof messageSchemaValidation>) => {
    try {
      const response = await axios.post<ApiResponse>("/api/send-message");
      toast.success(response.data.message);

    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data.message ||
          "An error occurred during sending message"
      );
      setMessage(
        axiosError.response?.data.message ||
          "An error occurred during sending message"
      );
    }
  };

  return (
    <Dialog>
      <Form>
        <form>
          <DialogTrigger asChild>
            <Button className="cursor-pointer" variant="outline">
              Send Message
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Message</DialogTitle>
            </DialogHeader>
            <Textarea placeholder="Type your message here." />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Send Message</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
