import { Button } from "~/components/ui/button";
import ContactMeButton from "~/components/Landing"

const TopNav = () => {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <div className="flex items-center">
        <span className="font-bold text-lg">thegr8binil</span>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" className="rounded-full">
          Home
        </Button>
        <Button variant="outline" className="rounded-full">
          My Projects
        </Button>
        <Button variant="outline" className="rounded-full">
          About Me
        </Button>
      </div>
      <ContactMeButton />
    </nav>
  );
};

export default TopNav;
