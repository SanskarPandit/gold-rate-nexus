
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-100 to-amber-50">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">Gold Rate Nexus</h1>
          <p className="text-xl text-amber-700">Connect wholesalers and retailers with real-time gold rates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="bg-white border-amber-300 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-amber-800">Admin</CardTitle>
              <CardDescription>Manage wholesalers and system settings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Access comprehensive admin controls, approve wholesalers, and manage penalties.</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700" 
                onClick={() => {
                  navigate("/admin-login");
                  toast({
                    title: "Admin Portal",
                    description: "Redirecting to admin login",
                  });
                }}
              >
                Admin Login
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white border-amber-300 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-amber-800">Wholesaler</CardTitle>
              <CardDescription>Broadcast gold rates and manage orders</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Update gold rates, approve bookings, and manage your retailer network.</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700" 
                onClick={() => {
                  navigate("/wholesaler-login");
                  toast({
                    title: "Wholesaler Portal",
                    description: "Redirecting to wholesaler login",
                  });
                }}
              >
                Wholesaler Login
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-white border-amber-300 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-amber-800">Retailer</CardTitle>
              <CardDescription>View live gold rates and place bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">Get real-time gold rates, place bookings, and manage your orders.</p>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700" 
                onClick={() => {
                  navigate("/retailer-login");
                  toast({
                    title: "Retailer Portal",
                    description: "Redirecting to retailer login",
                  });
                }}
              >
                Retailer Login
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center mt-12 text-amber-700">
          <p className="text-sm">© 2025 Gold Rate Nexus. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
