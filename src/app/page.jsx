import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full items-center my-20">
      <div className="flex flex-col gap-10">
        <a className="outline p-2" href="/aboutus">
          this button goes to about us page
        </a>
        <a className="outline p-2" href="/dashboard">
          this button goes to dashboard page
        </a>
      </div>
    </main>
  );
}
