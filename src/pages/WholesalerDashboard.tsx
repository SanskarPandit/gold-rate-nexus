
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
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Gold Rate Nexus | Wholesaler</h1>
          <Button 
            variant="outline" 
            className="text-white border-white hover:bg-amber-700"
            onClick={() => navigate("/")}
          >
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-amber-800 mb-6">Wholesaler Dashboard</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border-amber-300 mb-6">
              <CardHeader className="bg-amber-100">
                <CardTitle className="text-amber-800">Broadcast Gold Rate</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="goldRate" className="text-amber-800">Gold Rate (₹ per gram)</Label>
                      <Input
                        id="goldRate"
                        placeholder="Enter gold rate"
                        value={goldRate}
                        onChange={(e) => setGoldRate(e.target.value.replace(/[^0-9.]/g, ""))}
                        className="border-amber-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiryTime" className="text-amber-800">Rate Expiry Time (minutes)</Label>
                      <Input
                        id="expiryTime"
                        placeholder="Enter expiry time in minutes"
                        value={expiryMinutes}
                        onChange={(e) => setExpiryMinutes(e.target.value.replace(/\D/g, ""))}
                        className="border-amber-300"
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700" 
                    onClick={handleUpdateRate}
                  >
                    Update & Broadcast Rate
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-amber-300">
              <CardHeader className="bg-amber-100">
                <CardTitle className="text-amber-800">Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-gray-500 py-6">No recent bookings</p>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">View All Bookings</Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-amber-300 mb-6">
              <CardHeader className="bg-amber-100">
                <CardTitle className="text-amber-800">Retailer Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Manage Retailers</Button>
              </CardContent>
            </Card>
            
            <Card className="border-amber-300">
              <CardHeader className="bg-amber-100">
                <CardTitle className="text-amber-800">Reports</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Sales Report</Button>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Booking History</Button>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Penalty Report</Button>
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
