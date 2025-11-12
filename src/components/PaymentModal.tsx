import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
}

const PaymentModal = ({ isOpen, onClose, packageName }: PaymentModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectGoal: "",
    paymentPlan: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    onClose();
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectGoal: "",
      paymentPlan: false,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request: {packageName}</DialogTitle>
          <DialogDescription>
            Fill out this form and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="projectGoal">Project Goal Summary</Label>
            <Textarea
              id="projectGoal"
              value={formData.projectGoal}
              onChange={(e) => setFormData({ ...formData, projectGoal: e.target.value })}
              rows={3}
              required
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="paymentPlan"
              checked={formData.paymentPlan}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, paymentPlan: checked as boolean })
              }
            />
            <Label htmlFor="paymentPlan" className="text-sm font-normal">
              I am interested in MaxDevs' Payment Plan (3-6 month installments)
            </Label>
          </div>
          <Button type="submit" className="w-full bg-gradient-accent">
            Submit Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
