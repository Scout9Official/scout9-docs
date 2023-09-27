import ErrorCard from '@/components/error/ErrorCard';

export default function DocSectionError({
                                        error,
                                        reset,
                                      }: {
  error: Error
  reset: () => void
}) {
  console.error('Doc Guide Error:', error);
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-5/6">
      <ErrorCard title="Doc Error" message={error.message} name={error.name} stack={error.stack}/>
    </div>

  );
}
