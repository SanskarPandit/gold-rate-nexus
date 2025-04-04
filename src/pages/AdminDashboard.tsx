
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="bg-amber-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Gold Rate Nexus | Admin</h1>
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
        <h2 className="text-2xl font-bold text-amber-800 mb-6">Admin Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-amber-300">
            <CardHeader className="bg-amber-100">
              <CardTitle className="text-amber-800">Wholesaler Management</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">Approve new wholesalers and manage existing ones.</p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Manage Wholesalers</Button>
            </CardContent>
          </Card>
          
          <Card className="border-amber-300">
            <CardHeader className="bg-amber-100">
              <CardTitle className="text-amber-800">System Reports</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">View system-wide reports and analytics.</p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">View Reports</Button>
            </CardContent>
          </Card>
          
          <Card className="border-amber-300">
            <CardHeader className="bg-amber-100">
              <CardTitle className="text-amber-800">Penalty Management</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-4">Review and waive penalties for retailers.</p>
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Manage Penalties</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
