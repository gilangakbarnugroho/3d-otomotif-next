import Link from 'next/link';

interface FloatingNavProps {
  prev?: string;
  next?: string;
}

export default function FloatingNav({ prev, next }: FloatingNavProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md p-4 flex justify-between">
      {prev ? (
        <Link href={prev}>
          <a className="text-blue-500">Previous</a>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next}>
          <a className="text-blue-500">Next</a>
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
