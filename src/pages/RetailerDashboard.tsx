
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const RetailerDashboard = () => {
  const navigate = useNavigate();
  const [bookingAmount, setBookingAmount] = useState("");

  const handleBookGold = () => {
    if (!bookingAmount || isNaN(Number(bookingAmount)) || Number(bookingAmount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount to book.",
        variant: "destructive",
      });
      return;
    }

    // Here we'll integrate with Supabase to create booking
    toast({
      title: "Booking Created",
      description: `Your booking for ${bookingAmount}g has been sent to the wholesaler.`,
    });
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Gold Rate Nexus | Retailer</h1>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-purple-600"
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Retailer Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-pink-200 lg:col-span-2">
            <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
              <CardTitle className="text-purple-800">Current Gold Rate</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center py-6">
                <div className="text-4xl font-bold text-purple-700">₹5,487.25</div>
                <p className="text-gray-500 mt-2">per gram</p>
                <p className="text-sm text-purple-600 mt-4">Valid until: April 4, 2025, 12:30 PM</p>
              </div>
            </CardContent>
            <CardFooter className="bg-purple-50 border-t border-pink-200 flex flex-col space-y-4">
              <div className="w-full space-y-2">
                <Label htmlFor="bookingAmount" className="text-purple-800">Amount to Book (grams)</Label>
                <div className="flex space-x-2">
                  <Input
                    id="bookingAmount"
                    placeholder="Enter amount in grams"
                    value={bookingAmount}
                    onChange={(e) => setBookingAmount(e.target.value.replace(/[^0-9.]/g, ""))}
                    className="border-pink-200"
                  />
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 whitespace-nowrap" 
                    onClick={handleBookGold}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card className="border-pink-200">
              <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
                <CardTitle className="text-purple-800">My Bookings</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-gray-500 py-6">No recent bookings</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">View All Bookings</Button>
              </CardContent>
            </Card>
            
            <Card className="border-pink-200">
              <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
                <CardTitle className="text-purple-800">Penalties</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center text-green-600 py-6">
                  No pending penalties
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerDashboard;
