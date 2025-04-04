
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const WholesalerLogin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (!phoneNumber || phoneNumber.length !== 10) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    // Here we'll integrate with Supabase to send OTP
    try {
      // Placeholder for Supabase OTP sending
      toast({
        title: "OTP Sent",
        description: "A verification code has been sent to your phone.",
      });
      setIsOtpSent(true);
    } catch (error) {
      toast({
        title: "Failed to send OTP",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid verification code.",
        variant: "destructive",
      });
      return;
    }

    // Here we'll integrate with Supabase to verify OTP
    try {
      // Placeholder for Supabase OTP verification
      toast({
        title: "Login Successful",
        description: "Redirecting to wholesaler dashboard.",
      });
      navigate("/wholesaler-dashboard");
    } catch (error) {
      toast({
        title: "Invalid OTP",
        description: "The verification code is incorrect or expired.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-amber-100 to-amber-50">
      <Card className="w-full max-w-md border-amber-300">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-amber-800">Wholesaler Login</CardTitle>
          <CardDescription>Log in to broadcast gold rates and manage orders</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-amber-800">Phone Number</Label>
              <Input
                id="phone"
                placeholder="Enter your 10-digit phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                disabled={isOtpSent}
                className="border-amber-300"
              />
            </div>

            {isOtpSent && (
              <div className="space-y-2">
                <Label htmlFor="otp" className="text-amber-800">Verification Code</Label>
                <Input
                  id="otp"
                  placeholder="Enter the verification code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="border-amber-300"
                />
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          {!isOtpSent ? (
            <Button 
              className="w-full bg-amber-600 hover:bg-amber-700" 
              onClick={handleSendOtp}
            >
              Send Verification Code
            </Button>
          ) : (
            <div className="space-y-2 w-full">
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700" 
                onClick={handleVerifyOtp}
              >
                Verify & Login
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-amber-300 text-amber-800" 
                onClick={() => setIsOtpSent(false)}
              >
                Change Phone Number
              </Button>
            </div>
          )}
          <Button 
            variant="ghost" 
            className="mt-4 text-amber-700" 
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WholesalerLogin;
