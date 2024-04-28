"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { LuMail } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import Button from "../Button";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  modalType: string;
}

export default function AuthModal({
  isOpen,
  onOpenChange,
  modalType,
}: AuthModalProps) {
  return (
    <>
      {modalType === "login" ? (
        <>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Log in
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      autoFocus
                      endContent={<LuMail className="text-rose-500 text-2xl" />}
                      label="Email"
                      placeholder="Enter your email"
                      variant="bordered"
                    />
                    <Input
                      endContent={
                        <IoMdLock className="text-rose-500 text-2xl" />
                      }
                      label="Password"
                      placeholder="Enter your password"
                      type="password"
                      variant="bordered"
                    />
                    <div className="flex py-2 px-1 justify-between">
                      <Checkbox className="text-sm" color="danger">
                        Remember me
                      </Checkbox>
                      <Link color="primary" href="#" size="sm">
                        Forgot password?
                      </Link>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button label="Sign in" onClick={onClose} />
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      ) : (
        <>
          <>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Sign up
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        autoFocus
                        endContent={
                          <LuMail className="text-rose-500 text-2xl" />
                        }
                        label="Email"
                        placeholder="Enter your email"
                        variant="bordered"
                      />
                      <Input
                        endContent={
                          <IoMdLock className="text-rose-500 text-2xl" />
                        }
                        label="Password"
                        placeholder="Enter your password"
                        type="password"
                        variant="bordered"
                      />
                      <div className="flex py-2 px-1 justify-between">
                        <Checkbox className="text-sm" color="danger">
                          Remember me
                        </Checkbox>
                        <Link color="primary" href="#" size="sm">
                          Forgot password?
                        </Link>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button label="Sign in" onClick={onClose} />
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </>
      )}
    </>
  );
}
