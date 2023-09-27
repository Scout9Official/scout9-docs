'use client';

import { MenuIcon } from '@/components/icons';
import { ISidebarLayoutMenu } from '@/components/sidebar-layout/SidebarLayoutMenu';
import { Button } from '@nextui-org/button';
import { Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/modal';
import React from 'react';

export interface ISidebarLayoutMobileMenu extends ISidebarLayoutMenu {
  children?: React.ReactNode;
}

export default function SidebarLayoutMobileMenu(props: ISidebarLayoutMobileMenu) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        variant="light"
        size="sm"
        className="mb-12"
        startContent={<MenuIcon/>}
      >Settings</Button>
      <Modal
        size="full"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              x: 0,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              x: -300,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <SidebarLayoutMenu
                  {...props}
                  linkProps={{
                    onClick: onClose
                  }}
                />
                {props.children}
              </ModalBody>
              {/*<ModalFooter>*/}
              {/*  <Button color="danger" variant="light" onPress={onClose}>*/}
              {/*    Close*/}
              {/*  </Button>*/}
              {/*</ModalFooter>*/}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
