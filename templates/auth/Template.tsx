"use client";

import { UICard } from "@/designs/data-display/card/Component";
import { UITabs } from "@/designs/data-display/tabs/Component";
import { UIField } from "@/designs/inputs/field/Component";
import { UIInput } from "@/designs/inputs/input/Component";
import { UICheckbox } from "@/designs/inputs/checkbox/Component";
import { UIButton } from "@/designs/inputs/button/Component";
import { UIAlert } from "@/designs/feedback/alert/Component";

function SignInForm() {
  return (
    <div className="flex flex-col gap-4">
      <UIField label="Email"><UIInput type="email" placeholder="you@example.com" /></UIField>
      <UIField label="Password"><UIInput type="password" placeholder="••••••••" /></UIField>
      <UICheckbox label="Remember me" />
      <UIButton className="mt-2">Sign in</UIButton>
    </div>
  );
}

function SignUpForm() {
  return (
    <div className="flex flex-col gap-4">
      <UIField label="Name"><UIInput placeholder="Jane Doe" /></UIField>
      <UIField label="Email"><UIInput type="email" placeholder="you@example.com" /></UIField>
      <UIField label="Password" description="At least 8 characters."><UIInput type="password" placeholder="••••••••" /></UIField>
      <UICheckbox label="I agree to the terms" />
      <UIButton className="mt-2">Create account</UIButton>
    </div>
  );
}

function ForgotPasswordForm() {
  return (
    <div className="flex flex-col gap-4">
      <UIAlert variant="info" description="We'll send a reset link to your email." />
      <UIField label="Email"><UIInput type="email" placeholder="you@example.com" /></UIField>
      <UIButton className="mt-2">Send reset link</UIButton>
    </div>
  );
}

export function AuthTemplate() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <UICard className="w-full max-w-sm">
        <p className="mb-4 text-lg font-semibold text-foreground">Welcome</p>
        <UITabs
          tabs={[
            { label: "Sign in", value: "signin", content: <SignInForm /> },
            { label: "Sign up", value: "signup", content: <SignUpForm /> },
            { label: "Forgot", value: "forgot", content: <ForgotPasswordForm /> },
          ]}
        />
      </UICard>
    </div>
  );
}

export { AuthTemplate as default };
