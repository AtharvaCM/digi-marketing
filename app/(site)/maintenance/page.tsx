import { NextPage } from 'next';
import Image from 'next/image';

const Page: NextPage = async () => (
  <div className="px-4">
    <main className="flex flex-col items-center justify-center min-h-screen space-y-4 text-center">
      <Image src="/logo.png" width="150" height="150" alt="Logo" className="" style={{ aspectRatio: '150/150', objectFit: 'cover' }} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Under Maintenance</h1>
        <p className="text-sm font-medium leading-normal not-italic">We are currently undergoing maintenance. Please check back later.</p>
      </div>
    </main>
  </div>
);

export default Page;
