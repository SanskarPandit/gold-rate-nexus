
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const WholesalerDashboard = () => {
  const navigate = useNavigate();
  const [goldRate, setGoldRate] = useState("");
  const [expiryMinutes, setExpiryMinutes] = useState("60");

  const handleUpdateRate = () => {
    if (!goldRate || isNaN(Number(goldRate))) {
      toast({
        title: "Invalid Rate",
        description: "Please enter a valid gold rate.",
        variant: "destructive",
      });
      return;
    }

    // Here we'll integrate with Supabase to update gold rate
    toast({
      title: "Gold Rate Updated",
      description: `New rate of ₹${goldRate} per gram has been broadcast.`,
    });
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Gold Rate Nexus | Wholesaler</h1>
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
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Wholesaler Dashboard</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-pink-200 mb-6">
              <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
                <CardTitle className="text-purple-800">Broadcast Gold Rate</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="goldRate" className="text-purple-800">Gold Rate (₹ per gram)</Label>
                      <Input
                        id="goldRate"
                        placeholder="Enter gold rate"
                        value={goldRate}
                        onChange={(e) => setGoldRate(e.target.value.replace(/[^0-9.]/g, ""))}
                        className="border-pink-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryTime" className="text-purple-800">Rate Expiry Time (minutes)</Label>
                      <Input
                        id="expiryTime"
                        placeholder="Enter expiry time in minutes"
                        value={expiryMinutes}
                        onChange={(e) => setExpiryMinutes(e.target.value.replace(/\D/g, ""))}
                        className="border-pink-200"
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600" 
                    onClick={handleUpdateRate}
                  >
                    Update & Broadcast Rate
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-pink-200">
              <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
                <CardTitle className="text-purple-800">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-gray-500 py-6">No recent bookings</p>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">View All Bookings</Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-pink-200 mb-6">
              <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
                <CardTitle className="text-purple-800">Retailer Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">Manage Retailers</Button>
              </CardContent>
            </Card>
            
            <Card className="border-pink-200">
              <CardHeader className="bg-gradient-to-r from-purple-200 to-pink-100">
                <CardTitle className="text-purple-800">Reports</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">Sales Report</Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">Booking History</Button>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">Penalty Report</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholesalerDashboard;
