import type { PropsWithChildren } from "react";

type EmployeeCard = PropsWithChildren<{
  imageUrl: string;
  name: string;
  email: string;
}>;

export function EmployeeCard({
  name,
  email,
  imageUrl,
  children,
}: EmployeeCard) {
  return (
    <div className="not-prose relative flex bg-slate-50 rounded-lg p-4">
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
            className="m-4 hover:opacity-60"
            href={`mailto:${email}`}
            title={`Send email til ${email}`}
          >
            <img
              src="/icons/mail.svg"
              className="w-4 block max-w-full aspect-square"
              alt="Send email"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
