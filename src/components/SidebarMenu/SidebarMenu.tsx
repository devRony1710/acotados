import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

// navbar routes
import { NavbarRoutes } from "../../lib";

// interface
import { SidebarMenuProps } from "./SidebarMenu.interface";

export const SidebarMenu: React.FC<SidebarMenuProps> = (props) => {
  const { open, setOpen } = props;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-center justify-between mt-4 px-4">
                        <Dialog.Title className="text-2xl font-semibold leading-6 text-main-blue">
                          Acotados Studio
                        </Dialog.Title>
                        <div className="flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <XMarkIcon
                              className="h-6 w-6"
                              color="#2A3362"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul className="w-full flex flex-col items-center gap-10 mt-24">
                        {NavbarRoutes.map((navbarItem) => (
                          <li>
                            <a
                              className="text-xl font-semibold text-light-gray hover:text-main-yellow"
                              href={navbarItem.path}
                            >
                              {navbarItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
