
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

type UserType = "admin" | "wholesaler" | "retailer";

const userTypeLabels = {
  admin: "Admin",
  wholesaler: "Wholesaler",
  retailer: "Retailer"
};

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userType, setUserType] = useState<UserType>("retailer");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  useEffect(() => {
    // Check if there's a default user type in the location state
    const state = location.state as { defaultUserType?: string } | null;
    if (state?.defaultUserType && ["admin", "wholesaler", "retailer"].includes(state.defaultUserType)) {
      setUserType(state.defaultUserType as UserType);
    }
  }, [location.state]);

  const handleUserTypeChange = (value: UserType) => {
    setUserType(value);
  };

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
        description: `Redirecting to ${userTypeLabels[userType]} dashboard.`,
      });
      navigate(`/${userType}-dashboard`);
    } catch (error) {
      toast({
        title: "Invalid OTP",
        description: "The verification code is incorrect or expired.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-pink-50">
      <Card className="w-full max-w-md border-pink-200 shadow-lg">
        <CardHeader className="text-center bg-gradient-to-r from-purple-200 to-pink-100 rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-purple-800">
            {userTypeLabels[userType]} Login
          </CardTitle>
          <CardDescription className="text-purple-600">
            {userType === "retailer" 
              ? "Log in to view gold rates and place bookings" 
              : userType === "wholesaler" 
                ? "Log in to broadcast gold rates and manage orders" 
                : "Log in to the admin portal"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <Label htmlFor="user-type" className="text-purple-700">User Type</Label>
            <Select 
              value={userType} 
              onValueChange={(value) => handleUserTypeChange(value as UserType)}
            >
              <SelectTrigger className="w-full border-pink-200 focus:ring-purple-400">
                <SelectValue placeholder="Select user type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="wholesaler">Wholesaler</SelectItem>
                <SelectItem value="retailer">Retailer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-purple-700">Phone Number</Label>
            <Input
              id="phone"
              placeholder="Enter your 10-digit phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
              disabled={isOtpSent}
              className="border-pink-200 focus:ring-purple-400"
            />
          </div>

          {isOtpSent && (
            <div className="space-y-2">
              <Label htmlFor="otp" className="text-purple-700">Verification Code</Label>
              <InputOTP 
                maxLength={6}
                value={otp} 
                onChange={setOtp}
                className="gap-2 flex justify-center"
              >
                <InputOTPGroup className="gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <InputOTPSlot 
                      key={i} 
                      index={i} 
                      className="h-12 w-12 text-lg border-pink-200 focus:ring-purple-400 bg-white"
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col">
          {!isOtpSent ? (
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white" 
              onClick={handleSendOtp}
            >
              Send Verification Code
            </Button>
          ) : (
            <div className="space-y-2 w-full">
              <Button 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white" 
                onClick={handleVerifyOtp}
              >
                Verify & Login
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-pink-200 text-purple-700 hover:bg-pink-50" 
                onClick={() => setIsOtpSent(false)}
              >
                Change Phone Number
              </Button>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
