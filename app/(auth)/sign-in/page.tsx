import AuthFom from "@/components/AuthFom";
import React from "react";

export default function SignIn() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthFom type="sign-in" />
    </section>
  );
}
