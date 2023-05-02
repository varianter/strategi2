import type { PropsWithChildren } from "react";
import Mail from "./icons/Mail";

type EmployeeCard = PropsWithChildren<{
  name: string;
  email: string;
}>;

export function EmployeeCard({ name, email, children }: EmployeeCard) {
  return (
    <div className="not-prose relative flex bg-slate-50 rounded-lg p-4 min-w-min">
      <div className="flex">
        {children}

        <div className="my-auto p-3">
          <h3 className="not-fancy font-semibold text-lg sm:text-sm lg:text-lg ">
            {name}
          </h3>
          <p className="not-fancy text-xs lg:text-sm ">
            <a className="underline" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        </div>
        <div className="absolute  bottom-0 right-0 inline-flex">
          <a
            className="m-4 text-gray-700 hover:text-gray-500 active:scale-95"
            href={`mailto:${email}`}
            title={`Send email til ${email}`}
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
}
