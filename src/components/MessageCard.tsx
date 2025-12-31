import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { IMessage } from "@/model/User.model";

type MessageCardProps = {
  message: IMessage;
  onDeleteMessage: (messageId: string) => void;
};

const MessageCard = ({ message, onDeleteMessage }: MessageCardProps) => {
  const handleDeleteMessage = async () => {
    try {
      const response = await axios.delete<ApiResponse>(
        `/api/delete-message/${message._id}`
      );
      toast.success(response.data.message);
      onDeleteMessage(message._id.toString());
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast.error(
        axiosError.response?.data.message || "Failed to delete message."
      );
    }
  };

  return (
    <Card className="card-bordered">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>{message.content}</CardTitle>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="cursor-pointer">
                <X className="w-5 h-5" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  this message.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteMessage} className="bg-red-600 hover:bg-red-700">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="text-sm">
          {/* {dayjs(message.createdAt).format("MMM D, YYYY h:mm A")} */}
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default MessageCard;
