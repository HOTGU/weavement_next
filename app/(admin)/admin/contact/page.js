import ContactDetail from "@/components/admin/contact/ContactDetail";
import ContactList from "@/components/admin/contact/ContactList";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div className="flex min-h-[calc(100vh-48px)]">
      <div className=" w-1/4">
        <Suspense fallback="list loading">
          <ContactList />
        </Suspense>
      </div>
      <div className="w-3/4">
        <ContactDetail />
      </div>
    </div>
  );
};

export default page;
