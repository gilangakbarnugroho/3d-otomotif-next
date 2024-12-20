import Link from 'next/link';
import { courseData } from '../data/data';

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Selamat Datang di E-Learning 3D Otomotif</h1>
      <p className="mt-2 text-gray-600">Pilih salah satu bab di bawah untuk memulai belajar:</p>
      <ul className="mt-4 space-y-2">
        {courseData.map((bab) => (
          <li key={bab.id} className="border p-4 rounded-md hover:bg-gray-100">
            <Link href={`/bab/bab-${bab.id}`}>
              <div className="text-red-500 hover:underline">{bab.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
