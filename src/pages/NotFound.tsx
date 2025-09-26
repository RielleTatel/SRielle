import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 relative overflow-hidden">
      {/* Aesthetic blurred containers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Container 1 */}
        <div
          className="absolute w-[300px] h-[260px] rounded-full bg-white/25 blur-[35px] shrink-0"
          style={{ 
            transform: "rotate(-22.4deg)",
            top: "15%",
            left: "10%"
          }}
        />
        
        {/* Container 2 */}
        <div
          className="absolute w-[220px] h-[200px] rounded-full bg-white/30 blur-[28px] shrink-0"
          style={{ 
            transform: "rotate(34.7deg)",
            top: "25%",
            right: "15%"
          }}
        />
        
        {/* Container 3 */}
        <div
          className="absolute w-[180px] h-[160px] rounded-full bg-white/35 blur-[25px] shrink-0"
          style={{ 
            transform: "rotate(-45.1deg)",
            bottom: "20%",
            left: "20%"
          }}
        />
        
        {/* Container 4 */}
        <div
          className="absolute w-[250px] h-[220px] rounded-full bg-white/28 blur-[32px] shrink-0"
          style={{ 
            transform: "rotate(18.9deg)",
            bottom: "30%",
            right: "12%"
          }}
        />
      </div>

      <div className="text-center relative z-10">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
