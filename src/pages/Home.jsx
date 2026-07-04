import AppLayout from "../components/layout/AppLayout/AppLayout";
import Hero from "../components/features/grove/Hero";
import ContinueReading from "../components/features/grove/ContinueReading";

export default function Home() {
  return (
    <AppLayout>
      <Hero />
      <ContinueReading />
    </AppLayout>
  );
}