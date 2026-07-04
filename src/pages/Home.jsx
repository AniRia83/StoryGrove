import AppLayout from "../components/layout/AppLayout/AppLayout";
import Hero from "../components/features/grove/Hero";
import ContinueReading from "../components/features/grove/ContinueReading";
import RecentlyPlanted from "../components/features/grove/RecentlyPlanted";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <ContinueReading />
      <RecentlyPlanted />
    </AppLayout>
  );
}