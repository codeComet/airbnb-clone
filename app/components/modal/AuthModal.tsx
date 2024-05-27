"use client";

import React, { useCallback, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Checkbox,
  Link,
} from "@nextui-org/react";
import { LuMail } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import Button from "../Button";
import Input from "../inputs/Input";
import axios from "axios";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface AuthModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  modalType: string;
  setModalType: React.Dispatch<React.SetStateAction<string>>;
}

export default function AuthModal({
  isOpen,
  onOpenChange,
  modalType,
  setModalType
}: AuthModalProps) {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const registrationSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        onOpenChange(false);
      })
      .catch((err) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {modalType === "login" ? (
        <>
          {/* Login modal */}
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
                      id="email-login"
                      type="email"
                      label="Email"
                      disabled={loading}
                      register={register}
                      errors={errors}
                      required
                    />
                    <Input
                      id="password-login"
                      type="password"
                      label="Password"
                      disabled={loading}
                      register={register}
                      errors={errors}
                      required
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
          {/* Registration modal */}
          <>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
              onSubmit={handleSubmit(registrationSubmit)}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-center">
                      Welcome to StayHub
                    </ModalHeader>
                    <hr />

                    <ModalBody>
                      <p className="text-md mt-0">Create your account</p>
                      <Input
                        id="email-reg"
                        type="email"
                        label="Email"
                        disabled={loading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="name-reg"
                        type="text"
                        label="Name"
                        disabled={loading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="password-reg"
                        type="password"
                        label="Password"
                        disabled={loading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <Input
                        id="confirm-password-reg"
                        type="password"
                        label="Confirm Password"
                        disabled={loading}
                        register={register}
                        errors={errors}
                        required
                      />
                      <div className="flex py-2 px-1 justify-between">
                        <Link
                          color="primary"
                          href="#"
                          size="sm"
                          onClick={() => setModalType("login")}
                        >
                          Already have an account? Sign in
                        </Link>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        label="Sign up"
                        onClick={handleSubmit(registrationSubmit)}
                      />
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
