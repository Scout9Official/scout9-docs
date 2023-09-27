'use client';

import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useCallback, useTransition } from 'react';

export interface IErrorTryAgain {
  // Normally this is used to attempt to recover by trying to re-render the segment
  reset(): void;

}

/**
 * Mainly used for error pages to attempt to recover by trying to re-render the segment
 */
export default function ErrorTryAgain(props: IErrorTryAgain) {

  const {reset} = props;
  const [isTransitioning, startTransition] = useTransition();

  const handleClick = useCallback(() => {
    startTransition(() => {
      reset();
    })
  }, []);


  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">

      <Button
        color="danger"
        className="max-w-[400px] w-full"
        isLoading={isTransitioning}
        onClick={handleClick}
      >
        Try again
      </Button>
      <Button
        as={Link}
        href={'/contact-support'}
        color="danger"
        className="max-w-[400px] w-full"
        variant="light"
      >
        Contact Support
      </Button>
      </div>
      <p>Or email <Link color="danger" href="mailto:patrick@scout9.com?subject=App Error">patrick@scout9.com</Link></p>
    </div>
  );
}
