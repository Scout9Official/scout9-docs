import { isProduction } from '@/utils';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Image } from '@nextui-org/image';

export interface IErrorCard extends Error {
  title: string;
  showStack?: boolean;
}

export default function ErrorCard(props: IErrorCard) {
  const {name, title, message, stack, showStack} = {showStack: !isProduction, ...props};

  return (
    <Card className="max-w-[400px] w-full">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="lg"
          src="/SVG/Icon_96x96.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{name}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody

      >
        <p className="text-red-500">{message}</p>
      </CardBody>
      <Divider/>
      {showStack && stack && <CardFooter>
        <Accordion>
          <AccordionItem key="error" aria-label="Stack" title="Stack" className="max-h-96 overflow-y-scroll">
            {stack}
          </AccordionItem>
        </Accordion>
      </CardFooter>}
    </Card>
  );

}
