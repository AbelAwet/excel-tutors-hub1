import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      lastMessage: "Great progress on your calculus homework!",
      time: "10 min ago",
      unread: 2,
    },
    {
      id: 2,
      name: "Emma Williams",
      subject: "English",
      lastMessage: "Don't forget to prepare the essay draft.",
      time: "2 hours ago",
      unread: 0,
    },
    {
      id: 3,
      name: "Prof. Michael Chen",
      subject: "Physics",
      lastMessage: "Let's review the Newton's laws next session.",
      time: "1 day ago",
      unread: 1,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Dr. Sarah Johnson",
      text: "Hi! How are you doing with the calculus problems I assigned?",
      time: "Yesterday, 3:45 PM",
      isOwn: false,
    },
    {
      id: 2,
      sender: "You",
      text: "I've completed most of them! I had some trouble with problem 5 though.",
      time: "Yesterday, 4:12 PM",
      isOwn: true,
    },
    {
      id: 3,
      sender: "Dr. Sarah Johnson",
      text: "That's great! Problem 5 is tricky. Let me send you a hint: think about the chain rule application.",
      time: "Yesterday, 4:15 PM",
      isOwn: false,
    },
    {
      id: 4,
      sender: "You",
      text: "Oh, I see! That makes sense now. Thank you!",
      time: "Today, 9:20 AM",
      isOwn: true,
    },
    {
      id: 5,
      sender: "Dr. Sarah Johnson",
      text: "Great progress on your calculus homework!",
      time: "Today, 10:05 AM",
      isOwn: false,
    },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) {
      toast.error("Please enter a message");
      return;
    }

    toast.success("Message sent!");
    setNewMessage("");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in">Messages</h1>

        <div className="grid md:grid-cols-3 gap-6 h-[600px]">
          {/* Conversations List */}
          <Card className="animate-slide-up overflow-hidden">
            <CardHeader>
              <CardTitle>Conversations</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedConversation === conversation.id
                        ? "bg-muted"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold">{conversation.name}</h3>
                      {conversation.unread > 0 && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {conversation.subject}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {conversation.lastMessage}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {conversation.time}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Messages Area */}
          <Card className="md:col-span-2 animate-slide-up flex flex-col" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <CardTitle>
                {conversations.find((c) => c.id === selectedConversation)?.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.isOwn
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.isOwn
                            ? "text-primary-foreground/70"
                            : "text-muted-foreground"
                        }`}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Textarea
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  rows={2}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button onClick={handleSendMessage} className="self-end">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Messages;
