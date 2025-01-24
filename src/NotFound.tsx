
import { Button } from "./components/ui/button";

const NotFound = () => {
    
  const appUrl: string = import.meta.env.VITE_APP_URL;
  return (
    <div className="flex flex-col items-center justify-center md:justify-center h-screen w-full gap-y-10 dark:bg-secondary_black">
      <div className="flex flex-col items-center gap-y-8">
        <div className="flex justify-center">
          <img
            src={"https://enligencestorage.blob.core.windows.net/assets/not-found.png"}
            alt="not-found"
            className="w-10/12 md:w-6/12 dark:block"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-2xl text-primary text-center dark:text-white">
            This page could not be found
          </div>
          <div className="text-sm font-semibold text-center text-primary dark:text-white">
            The page you are looking for might have been removed or temporarily
            unavailable.
          </div>
        </div>
      </div>
      <Button
        onClick={() => window.location.assign(`${appUrl}/dashboard`)}
        className="bg-blue-500"
      >
        Back to Homepage
      </Button>
    </div>
  );
};

export default NotFound;
