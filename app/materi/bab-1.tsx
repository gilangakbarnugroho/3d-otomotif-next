import Link from 'next/link';
import { courseData } from '@/data/data';

export default function Bab1Page() {
  const bab = courseData.find((b) => b.id === 1);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{bab?.title}</h1>
      <ul className="mt-4 space-y-2">
        {bab?.subBab.map((sub, index) => (
          <li key={index} className="border p-4 rounded-md hover:bg-gray-100">
            <Link href={`/bab/bab-1/sub-bab-${index + 1}`}>
              <a className="text-blue-500 hover:underline">{sub}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
