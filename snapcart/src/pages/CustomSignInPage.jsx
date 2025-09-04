import { SignIn } from "@clerk/clerk-react";

const CustomSignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
};

export default CustomSignInPage;
